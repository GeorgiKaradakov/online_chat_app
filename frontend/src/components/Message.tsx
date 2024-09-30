import { MessageType } from "../types/types";
import { mc } from "../utils/funcs";

const Message:React.FC<MessageType> = ({username, msg, gender, className, isSender}) => {
  const leftOrRight = `flex flex-col ${isSender ? "justify-center items-end" : "justify-center items-start"}`;

  return (
    <div className={`p-4 w-full ${leftOrRight}`}>
      <p className={`${isSender ? "mr-4" : "ml-4"} w-fit font-bold text-red-300`}>{username}</p>
      <div className={mc(isSender ? "bg-green-300" : gender == "man" ? "bg-sky-400" : "bg-pink-300", "p-2 w-fit font-bold rounded-3xl max-w-1/2 max-sm:max-w-[90%]", className)}>
        <p className="break-words">{msg}</p>
      </div>
    </div>
  );
}

export default Message;

