import ButtonChat from "../components/ButtonChat.tsx";
import {close_img, send_img} from "../assets/svgs.tsx"
import Message from "../components/Message.tsx";

import "../styles/chat.css"
import { useController } from "../controllers/ChatController.ts";

const Chat = () =>{
  const {navigate, messages, useOnLoad, roomName} = useController();

  useOnLoad();

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="bg-cont h-[90%] w-[90%] md:w-[70%] md:h-[70%]">
        <div className="p-[3px] w-full h-full min-h-[510px] bg-[#242424] rounded-lg flex flex-col justify-between">
          <div className="h-[90%] w-full border-4 border-sky-400 rounded-lg md:max-lg:h-[87%]" id="chat_log">
            <div className="relative p-1 w-full flex justify-end">
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl">{roomName}</p>
              <ButtonChat onClick={() => {navigate('/')}} img={close_img("size-9")} className="button_cont border-none w-[40px]"/>
            </div>
            {/* message components go down */}
            <div className="w-full h-[92%] overflow-y-auto">
              {messages.map((msg, _) => (
                <Message username={msg.username} gender={msg.gender} msg={msg.msg} isSender={msg.isSender} key={_}/>
              ))}
            </div>
          </div>

          <div className="p-2 h-[8%] w-[100%] flex border-4 border-sky-400 rounded-lg md:mt-3 md:h-[15%] lg:h-[10%]">
            <input onChange={(e) => {setMessage(e.target.value)}} className="h-full w-5/6 bg-transparent text-white focus:outline-none focus:ring-0 focus:border-transparent" type="text" name="msg_cont" placeholder="message.."/>
            <ButtonChat img={send_img()} className="button_cont h-full w-1/6"/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Chat;

