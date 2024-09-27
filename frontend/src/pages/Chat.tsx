import Button from "../components/Button";


function Chat(){
  return (
    <div className=" p-2 h-[90%] w-[90%] flex flex-col justify-between md:w-[70%] md:h-[70%]">
      <div className="h-[90%] w-[100%] border-4 border-sky-400 rounded-lg"></div>
      <div className="p-2 h-[8%] w-[100%] flex border-4 border-sky-400 rounded-lg">
        <input className="h-full w-5/6 bg-transparent text-white focus:outline-none focus:ring-0 focus:border-transparent" type="text" name="msg_cont" placeholder="message.."/>
        <Button text="Send" className="h-full w-1/6"/>
      </div>
    </div>
  );
}

export default Chat;
