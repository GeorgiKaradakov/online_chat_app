import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../utils/constants";
import { useSocketFuncs } from "../utils/socketio_funcs";
import { MessageType } from "../types/types";

export const useController = () => {
  const navigate = useNavigate();

  const { onJoin, onMessage, emitSendMessages } = useSocketFuncs();

  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [roomName, setRoomName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<MessageType[]>([]);

  const getStatus = async () => {
    try {
      const response = await axios.get(API.GET_STATUS, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      setIsAuthorized(response.data.is_authorized);
    } catch (error) {
      console.log(error);
    }
  };

  const useOnLoad = () => {
    useEffect(() => {
      const fetchStatus = async () => {
        await getStatus();
        setIsLoading(false);
      };
      fetchStatus();
    }, []);
  };

  const useSocketListen = () => {
    useEffect(() => {
      const cleanUpJoin = onJoin(setRoomName);
      const clearMessageHandler = onMessage(setMessages);

      return () => {
        cleanUpJoin();
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
  };
};
