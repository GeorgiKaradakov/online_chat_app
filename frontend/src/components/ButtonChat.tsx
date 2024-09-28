import { buttonChatType } from "../types/ButtonChatType";
import { mc } from "../utils/funcs";

const Button:React.FC<buttonChatType> = ({className, text, img, onClick}) => {
  return (
    <div onClick={onClick} className={mc("text-[#5FAFFF] flex justify-center items-center border-2 border-gray-500 rounded-full", className)}>
      {
        text ? text : img
      }
    </div>
  );
}

export default Button;
