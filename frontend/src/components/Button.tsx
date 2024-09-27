import { buttonType } from "../types/ButtonType";
import { mc } from "../utils/funcs";

const Button:React.FC<buttonType> = ({className, text, onClick}) => {
  return (
    <div onClick={onClick} className={mc("text-white flex justify-center items-center border-2 border-gray-500 rounded-full", className)}>
      {text}
    </div>
  );
}

export default Button;
