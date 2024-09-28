import { MessageType } from "../types/MessageType";
import { mc } from "../utils/funcs";


const Message:React.FC<MessageType> = ({msg, gender, className}) => {
  return (
    <div className={mc(gender == "man" ? "bg-sky-400" : "bg-pink-300", "p-2 mb-3 w-fit font-bold rounded-3xl max-w-1/2 max-sm:max-w-[90%]", className)}>
      <p className="break-words">{msg}</p>
    </div>
  );
}

export default Message;
