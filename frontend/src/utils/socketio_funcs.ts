import { io } from "socket.io-client";
import { BASE_URL } from "./constants";
import { MessageType } from "../types/types";

export const socket = io(BASE_URL, {
  withCredentials: true,
  autoConnect: false,
});

export const useSocketFuncs = () => {
  const connectSocket = () => {
    socket.connect();
  };

  const disconnectSocket = () => {
    socket.disconnect();
  };

  const emitSendMessages = (message: string) => {
    socket.emit("send_message", { message: message });
  };

  const emitCollectMessages = () => {
    socket.emit("collect_messages");
  };

  const onConnect = (
    setIsAuthorized: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    socket.on("authorize", (data) => {
      setIsAuthorized(data.isAuthorized);
    });

    return () => {
      socket.off("authorize");
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

  return {
    onMessage,
    onConnect,
    emitSendMessages,
    emitCollectMessages,
    connectSocket,
    disconnectSocket,
  };
};
