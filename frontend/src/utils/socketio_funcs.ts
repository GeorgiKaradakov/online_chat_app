import { io } from "socket.io-client";
import { BASE_URL } from "./constants";
import { MessageType } from "../types/types";

export const socket = io(BASE_URL, {
  withCredentials: true,
});

export const useSocketFuncs = () => {
  const emitSendMessages = (message: string) => {
    socket.emit("send_message", { message: message });
  };

  const emitCollectMessages = () => {
    socket.emit("collect_messages");
  };

  const onJoin = (
    setRoomName: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    socket.on("join_success", (data) => {
      setRoomName(data.roomName);
    });

    return () => {
      socket.off("join_success");
    };
  };

  const onMessage = (
    setMessages: React.Dispatch<React.SetStateAction<MessageType[]>>,
  ) => {
    socket.on("message_received", () => {
      emitCollectMessages();
    });

    socket.on("get_messages", (data) => {
      console.log(data.messages);
      setMessages(data.messages);
    });

    return () => {
      socket.off("get_messages");
      socket.off("message_received");
    };
  };

  return { onJoin, onMessage, emitSendMessages, emitCollectMessages };
};
