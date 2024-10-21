import { buttonChatType } from "../types/types.tsx";
import { mc } from "../utils/funcs.ts";
import "../styles/Button.css"

const ButtonChat:React.FC<buttonChatType> = ({className, text, img, onClick}) => {
  return (
    <div onClick={onClick} className={mc("p-1 text-[#5FAFFF] flex justify-center items-center border-2 border-gray-500 rounded-full cursor-pointer", className)}>
      {text && text}
      {img && img}
    </div>
  );
}

export default ButtonChat;
