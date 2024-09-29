import { buttonChatType } from "../types/ButtonChatType.tsx";
import { mc } from "../utils/funcs.ts";

const ButtonChat:React.FC<buttonChatType> = ({className, text, img, onClick}) => {
  return (
    <div onClick={onClick} className={mc("p-1 text-[#5FAFFF] flex justify-center items-center border-2 border-gray-500 rounded-full cursor-pointer", className)}>
      {
        text ? text : img
      }
    </div>
  );
}

export default ButtonChat;
