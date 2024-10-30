import { MessageType } from "../types/types";
import { mc } from "../utils/funcs";

const Message:React.FC<MessageType> = ({username, msg, gender, className, isSender, fromServer}) => {
  const leftOrRight = `flex flex-col ${isSender ? "justify-center items-end" : "justify-center items-start"}`;

  return (
    <>
      {!fromServer ? 
        <div className={`p-4 w-full ${leftOrRight}`}>
          <p className={`${isSender ? "mr-4" : "ml-4"} w-fit font-bold text-red-300`}>{username}</p>
          <div className={mc(isSender ? "bg-green-300" : gender === "male" ? "bg-sky-400" : "bg-pink-300", "p-2 w-fit max-w-[50%] font-bold rounded-3xl max-sm:max-w-[90%]", className)}>
            <p className="w-full break-all">{msg}</p>
          </div>
        </div>
      : 
        <div className="w-full flex justify-center items-center">
          <p className="text-base text-red-300">{msg}</p>
        </div>
      }
    </>
  );
}

export default Message;

