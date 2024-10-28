import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../utils/constants";
import { useSocketFuncs } from "../utils/socketio_funcs";
import { MessageType } from "../types/types";

export const useController = () => {
  const navigate = useNavigate();

  const messageContRef = useRef<HTMLDivElement>(null);
  const messageTextRef = useRef<HTMLInputElement>(null);

  const {
    onMessage,
    onConnect,
    emitSendMessages,
    emitCollectMessages,
    socket,
  } = useSocketFuncs();

  const [isAuthorized, setIsAuthorized] = useState(false);
  const [roomName, setRoomName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<MessageType[]>([]);

  const getRoomName = async () => {
    try {
      const response = await axios.get(API.GET_STATUS_AND_ROOM_NAME, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      setRoomName(response.data.roomName);
    } catch (error) {
      console.log(error);
    }
  };

  const useOnLoad = () => {
    useEffect(() => {
      getRoomName();
    }, []);
  };

  const useOnMessageScroll = () => {
    useEffect(() => {
      if (messageContRef.current) {
        messageContRef.current.scrollTop = messageContRef.current.scrollHeight;
      }
    }, [messages]);
  };

  const useSocketListen = () => {
    useEffect(() => {
      socket.connect();
      const clearOnConnect = onConnect(setIsAuthorized);
      emitCollectMessages();
      const clearMessageHandler = onMessage(setMessages);

      return () => {
        clearOnConnect();
        clearMessageHandler();
        socket.disconnect();
      };
    }, []);
  };

  const sendMessage = () => {
    emitSendMessages(message);

    if (messageTextRef.current) {
      messageTextRef.current.value = "";
    }
  };

  return {
    navigate,
    message,
    setMessage,
    messages,
    setMessages,
    useOnLoad,
    roomName,
    setRoomName,
    isAuthorized,
    useSocketListen,
    messageContRef,
    messageTextRef,
    useOnMessageScroll,
    sendMessage,
  };
};
