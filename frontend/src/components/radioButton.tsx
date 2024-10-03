import { forwardRef } from "react";
import { radioButtonType } from "../types/types";
import { mc } from "../utils/funcs";
import { useController } from "../utils/controller";


const RadioButton = forwardRef<HTMLInputElement, radioButtonType>(({name, comp_ref, className, text, getData, setData}, ref) => {
  const {getAddData} = useController({addData: true});

  return (
    <label className={mc("hover:cursor-pointer", className)}>
      <input ref={ref || comp_ref} className="hidden peer" type="radio" name={name} onChange={(e) => {getAddData!(e, getData, setData, true)}} value={text}/>
      <div className="p-3 text-center text-white font-bold rounded-2xl bg-gray-600 peer-checked:bg-purple-500">
        {text}
      </div>
    </label>
  );
});

export default RadioButton;
