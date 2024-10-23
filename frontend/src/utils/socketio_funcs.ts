import { io } from "socket.io-client";
import { BASE_URL } from "./constants";
import { useNavigate } from "react-router-dom";
import { MessageType } from "../types/types";

export const socket = io(BASE_URL, {
  withCredentials: true,
});

export const useSocketFuncs = () => {
  const navigate = useNavigate();

  const emitJoin = () => {
    socket.emit("join");
  };

  const emitGetMessages = () => {
    socket.emit("get_messages");
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
    socket.on("new_message", () => {
      socket.emit("add_messages");
    });
    socket.on("get_messages", (data) => {});

    return () => {
      socket.off("new_message");
      socket.off("get_messages");
    };
  };

  return { onJoin, emitJoin, onMessage, emitGetMessages };
};
