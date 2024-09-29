import { radioButtonType } from "../types/radioButtonType";
import { mc } from "../utils/funcs";


const RadioButton:React.FC<radioButtonType> = ({name, className, text}) => {
  return (
    <label className={mc("hover:cursor-pointer", className)}>
      <input className="hidden peer" type="radio" name={name}/>
      <div className="p-3 text-center text-white font-bold rounded-2xl bg-gray-600 peer-checked:bg-purple-500">
        {text}
      </div>
    </label>
  );
};

export default RadioButton;
