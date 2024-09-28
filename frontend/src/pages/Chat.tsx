import Button from "../components/Button";
import {close_img, send_img} from "../assets/svgs.tsx"
import Message from "../components/Message.tsx";

//TODO: Make different color messages for boys and girls

function Chat(){
  return (
      <div className="bg-cont h-[90%] w-[90%] md:w-[70%] md:h-[70%]">
        <div className="p-[3px] w-full h-full bg-[#242424] rounded-lg flex flex-col justify-between">
          <div className="pl-4 h-[90%] w-[100%] border-4 border-sky-400 rounded-lg" id="chat_log">
            <div className="p-1 w-full flex justify-end">
              <Button img={close_img("size-9")} className="w-[40px] hover:cursor-pointer"/>
            </div>
            {/* message components go down */}
            <div>
              <Message gender="man" msg="Sup, guys:)aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"/>
              <Message gender="woman" msg="Sup, sweetie:)bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"/>
            </div>
          </div>

          <div className="p-2 h-[8%] w-[100%] flex border-4 border-sky-400 rounded-lg md:mt-3 md:h-1/6 lg:h-[10%]">
            <input className="h-full w-5/6 bg-transparent text-white focus:outline-none focus:ring-0 focus:border-transparent" type="text" name="msg_cont" placeholder="message.."/>
            <Button img={send_img()} className="h-full w-1/6 hover:cursor-pointer"/>
          </div>

        </div>
      </div>
  );
}

export default Chat;

