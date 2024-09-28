import Button from "../components/Button";
import {close_img, send_img} from "../assets/svgs.tsx"
import Message from "../components/Message.tsx";
import { useState } from "react";

function Chat(){
  const [messages, setMessages] = useState([ /*example conversation*/
    {username:"Anna", gender:"woman", msg:"Hey guys! What’s everyone up to this weekend?"},
    {username:"Me", gender:"man", msg:"Not much, just thinking about going hiking. How about you, Anna", isSender:true},
    {username:"John", gender:"man", msg:"I might check out that new pizza place downtown. Heard it's amazing!"},
    {username:"Anna", gender:"woman", msg:"Ooo, I’ve been wanting to try that place! Maybe we could all go together?"},
    {username:"Me", gender:"man", msg:"Pizza sounds good! But I still want to do some hiking. Maybe pizza after?", isSender:true},
    {username:"John", gender:"man", msg:"That’s a solid plan. Hike first, then pizza. Works for me."},
    {username:"Anna", gender:"woman", msg:"I’m in! What time are you thinking, Mike?"},
    {username:"Me", gender:"man", msg:"How about 10 AM for the hike? We can meet at the trailhead, then grab pizza around 1?", isSender:true},
    {username:"John", gender:"man", msg:"10 AM? Early, but okay. I'll bring some snacks for the hike."},
    {username:"Anna", gender:"woman", msg:"Perfect! I’ll bring some water and maybe a few cookies. Can’t wait!"},
  ]);
  return (
      <div className="bg-cont h-[90%] w-[90%] md:w-[70%] md:h-[90%]">
        <div className="p-[3px] w-full h-full bg-[#242424] rounded-lg flex flex-col justify-between">
          <div className="h-[90%] w-[100%] border-4 border-sky-400 rounded-lg md:max-lg:h-[80%]" id="chat_log">
            <div className="p-1 w-full flex justify-end">
              <Button img={close_img("size-9")} className="button_cont w-[40px] hover:cursor-pointer"/>
            </div>
            {/* message components go down */}
            <div className="w-full h-[90%] overflow-y-auto md:max-lg:h-[80%]">
              {messages.map((msg, _) => (
                <Message username={msg.username} gender={msg.gender} msg={msg.msg} isSender={msg.isSender}/>
              ))}
            </div>
          </div>

          <div className="p-2 h-[8%] w-[100%] flex border-4 border-sky-400 rounded-lg md:mt-3 md:h-1/6 lg:h-[10%]">
            <input className="h-full w-5/6 bg-transparent text-white focus:outline-none focus:ring-0 focus:border-transparent" type="text" name="msg_cont" placeholder="message.."/>
            <Button img={send_img()} className="button_cont h-full w-1/6 hover:cursor-pointer"/>
          </div>

        </div>
      </div>
  );
}

export default Chat;

