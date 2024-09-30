import PPType from "../../types/PPType"
import ButtonChat from "../ButtonChat";
import RadioButton from "../radioButton";

import "../../styles/popup.css";


const PopUpWindow:React.FC<PPType> = ({isOpen, popUpName, inputName1, inputName2, inputPlaceHolder1, inputPlaceHolder2, btnText, className, closePopUp, submitPopUp}) => {
  return (
    <div className={`${isOpen ? className : "hidden"} absolute w-[90%] h-1/2 flex flex-col justify-center items-center md:w-2/3 lg:w-1/3`}>
      <div className={`z-40 absolute w-full h-full bg-gray-950 flex flex-col items-center rounded-xl`}>
        <h1 className="mt-4 text-red-300 font-bold text-2xl">{popUpName}</h1>
        <input name={inputName1} className="mt-6 text-white font-bold text-center rounded-xl bg-gray-800 w-[80%] h-1/6 focus:outline-none focus:ring-0 focus:border-transparent" placeholder={inputPlaceHolder1}/>
        <input name={inputName2} className="mt-6 text-white font-bold text-center rounded-xl bg-gray-800 w-[80%] h-1/6 focus:outline-none focus:ring-0 focus:border-transparent" placeholder={inputPlaceHolder2}/>

        <p className="mt-10 text-red-300 font-bold text-xl">Specify Gender:</p>
        <div className="w-1/2 h-1/6 flex justify-between items-center">
          <RadioButton name="gender" text="male" className="w-1/2 mr-4"/>
          <RadioButton name="gender" text="female" className="w-1/2 ml-4"/>
        </div>

        <div className="mt-12 px-6 flex justify-between w-full h-1/6">
          <ButtonChat onClick={closePopUp} text="Cancel" className="w-1/3 h-2/3 border-none text-white font-bold rounded-lg bg-gray-600 lg:h-3/4"/>
          <ButtonChat onClick={submitPopUp} text={btnText} className="w-1/3 h-2/3 border-none text-white font-bold rounded-lg bg-purple-500 lg:h-3/4"/>
        </div>
      </div>
    </div>
  )
}

export default PopUpWindow;
