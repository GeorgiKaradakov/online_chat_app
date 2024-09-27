import {clsx, type ClassValue} from "clsx";
import { twMerge } from "tailwind-merge";

const mc = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

type buttonType = {
  text      ?: string
  className ?: string
  onClick   ?: () => {};
};

const Button:React.FC<buttonType> = ({className, text, onClick}) => {
  return (
    <div onClick={onClick} className={mc("text-white flex justify-center items-center border-2 border-gray-500 rounded-full", className)}>
      <p>{text}</p>
    </div>
  );
}

export default Button;
