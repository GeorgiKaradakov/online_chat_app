import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../utils/constants";
import { useSocketFuncs } from "../utils/socketio_funcs";
import { MessageType } from "../types/types";

export const useController = () => {
  const navigate = useNavigate();

  const messageContRef = useRef(null);

  const { onMessage, emitSendMessages, emitCollectMessages } = useSocketFuncs();

  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [roomName, setRoomName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<MessageType[]>([]);

  const getStatusAndRoomName = async () => {
    try {
      const response = await axios.get(API.GET_STATUS_AND_ROOM_NAME, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      setIsAuthorized(response.data.is_authorized);
      setRoomName(response.data.roomName);
    } catch (error) {
      console.log(error);
    }
  };

  const useOnLoad = () => {
    useEffect(() => {
      const fetchStatus = async () => {
        await getStatusAndRoomName();
        setIsLoading(false);
      };
      fetchStatus();

      emitCollectMessages();
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
      const clearMessageHandler = onMessage(setMessages);

      return () => {
        clearMessageHandler();
      };
    }, []);
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
    isLoading,
    emitSendMessages,
    messageContRef,
    useOnMessageScroll,
  };
};
