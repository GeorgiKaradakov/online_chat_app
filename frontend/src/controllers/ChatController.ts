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
    connectSocket,
    disconnectSocket,
  } = useSocketFuncs();

  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [roomName, setRoomName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<MessageType[]>([]);

  const getRoomName = async () => {
    try {
      const response = await axios.get(API.GET_ROOM_NAME, {
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

  const OnEnterKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") sendMessage();
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
      connectSocket();
      const clearOnConnect = onConnect(setIsAuthorized, setIsLoading);
      emitCollectMessages();
      const clearMessageHandler = onMessage(setMessages);

      return () => {
        clearOnConnect();
        clearMessageHandler();
        disconnectSocket();
      };
    }, []);
  };

  const sendMessage = () => {
    if (message.length == 0) return;

    emitSendMessages(message);

    if (messageTextRef.current) {
      messageTextRef.current.value = "";
    }
    setMessage("");
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
    isLoading,
    useSocketListen,
    messageContRef,
    messageTextRef,
    useOnMessageScroll,
    sendMessage,
    OnEnterKeyPress,
  };
};
