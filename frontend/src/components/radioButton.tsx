import { radioButtonType } from "../types/types";
import { mc } from "../utils/funcs";


const RadioButton:React.FC<radioButtonType> = ({name, id, className, text}) => {
  return (
    <label className={mc("hover:cursor-pointer", className)}>
      <input id={id} className="hidden peer" type="radio" name={name}/>
      <div className="p-3 text-center text-white font-bold rounded-2xl bg-gray-600 peer-checked:bg-purple-500">
        {text}
      </div>
    </label>
  );
};

export default RadioButton;
