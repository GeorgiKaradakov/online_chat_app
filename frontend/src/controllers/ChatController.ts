import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../utils/constants";

export const useController = () => {
  const navigate = useNavigate();
  const [roomName, setRoomName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    /*example conversation*/
    {
      username: "Anna",
      gender: "woman",
      msg: "Hey guys! What’s everyone up to this weekend?",
    },
    {
      username: "Me",
      gender: "man",
      msg: "Not much, just thinking about going hiking. How about you, Anna",
      isSender: true,
    },
    {
      username: "John",
      gender: "man",
      msg: "I might check out that new pizza place downtown. Heard it's amazing!",
    },
    {
      username: "Anna",
      gender: "woman",
      msg: "Ooo, I’ve been wanting to try that place! Maybe we could all go together?",
    },
    {
      username: "Me",
      gender: "man",
      msg: "Pizza sounds good! But I still want to do some hiking. Maybe pizza after?",
      isSender: true,
    },
    {
      username: "John",
      gender: "man",
      msg: "That’s a solid plan. Hike first, then pizza. Works for me.",
    },
    {
      username: "Anna",
      gender: "woman",
      msg: "I’m in! What time are you thinking, Mike?",
    },
    {
      username: "Me",
      gender: "man",
      msg: "How about 10 AM for the hike? We can meet at the trailhead, then grab pizza around 1?",
      isSender: true,
    },
    { username: "John", gender: "man", msg: "10 AM? NUH UH. No way be man" },
    {
      username: "Anna",
      gender: "woman",
      msg: "Perfect! I’ll bring some water and maybe a few cookies. Can’t wait!",
    },
  ]);

  const fetchName = async () => {
    try {
      const response = await axios.get(API.GET_NAME_ROOM, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response.data.room_name);
      setRoomName(response.data.room_name);
    } catch (error) {
      console.log(error);
    }
  };

  const useOnLoad = () => {
    useEffect(() => {
      fetchName();
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
  };
};
