import Button from "../components/Button";

function Chat(){
  return (
    <div className="bg-cont h-[90%] w-[90%] md:w-[70%] md:h-[70%]">
      <div className="p-[3px] w-full h-full bg-[#242424] rounded-lg flex flex-col justify-between">

        <div className="h-[90%] w-[100%] border-4 border-sky-400 rounded-lg" id="chat_log"></div>

        <div className="p-2 h-[8%] w-[100%] flex border-4 border-sky-400 rounded-lg md:mt-3 md:h-1/6 lg:h-[10%]">
          <input className="h-full w-5/6 bg-transparent text-white focus:outline-none focus:ring-0 focus:border-transparent" type="text" name="msg_cont" placeholder="message.."/>
          <Button text="Send" className="h-full w-1/6"/>
        </div>

      </div>
    </div>
  );
}

export default Chat;
