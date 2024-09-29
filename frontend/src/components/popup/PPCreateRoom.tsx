import { PPCreateType } from "../../types/PPCreateType";
import ButtonChat from "../ButtonChat";
import RadioButton from "../radioButton";


const PPCreateRoom:React.FC<PPCreateType> = ({isOpen, closePopUp, submitPopUp}) => {
  return (
    <div className={`absolute w-[90%] h-1/2 bg-gray-950 flex flex-col items-center rounded-xl md:w-2/3 lg:w-1/3 ${isOpen ? "" : "hidden"}`}>

      <input className="mt-12 text-white font-bold text-center rounded-xl bg-gray-800 w-[80%] h-1/6 focus:outline-none focus:ring-0 focus:border-transparent" placeholder="enter room code..."/>
      <input className="mt-6 text-white font-bold text-center rounded-xl bg-gray-800 w-[80%] h-1/6 focus:outline-none focus:ring-0 focus:border-transparent" placeholder="enter username..."/>

      <p className="mt-12 text-white font-bold">Specify Gender:</p>
      <div className="w-1/2 h-1/6 flex justify-between items-center">
        <RadioButton name="gender" text="male" className="w-1/2 mr-4"/>
        <RadioButton name="gender" text="female" className="w-1/2 ml-4"/>
      </div>

      <div className="mt-12 px-6 flex justify-between w-full h-1/6">
        <ButtonChat onClick={closePopUp} text="cancel" className="w-1/3 h-2/3 border-none text-white font-bold rounded-lg bg-gray-600 lg:h-3/4"/>
        <ButtonChat onClick={submitPopUp} text="enter" className="w-1/3 h-2/3 border-none text-white font-bold rounded-lg bg-purple-500 lg:h-3/4"/>
      </div>
    </div>
  )
}

export default PPCreateRoom;
