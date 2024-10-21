import { PPType } from "../../types/types";
import ButtonChat from "../ButtonChat";
import RadioButton from "../radioButton";

import "../../styles/popup.css";
import { useEffect, forwardRef } from "react";
import { useController } from "../../utils/controller";


const PopUpWindow = forwardRef<HTMLDivElement, PPType>(
  ({ isOpen, comp_ref, btn_ref1, btn_ref2, popUpName, inputName1, inputName2, inputPlaceHolder1, inputPlaceHolder2, btnText, className, url, closePopUp, submitPopUp }, ref) => {
    const {getData, getAddData, getClearContents, getSendData} = useController({useData: true, addData: true, clearPopUpContents: true, sendData: true})
    const {data, setData} = getData!({
      username: '',
      room_name: '',
      room_code: '',
      gender: '',
    });

    return (
      <div className={`${isOpen ? className : "hidden"} absolute w-[90%] h-1/2 flex flex-col justify-center items-center md:w-2/3 lg:w-1/3`}>
        <div ref={ref || comp_ref} className="z-40 w-full h-full bg-gray-950 flex flex-col items-center rounded-xl">
          <h1 className="mt-4 text-red-300 font-bold text-2xl">{popUpName}</h1>
          <input
            name={inputName1}
            className="mt-6 text-white font-bold text-center rounded-xl bg-gray-800 w-[80%] h-1/6 focus:outline-none focus:ring-0 focus:border-transparent"
            placeholder={inputPlaceHolder1}
            onChange={(e) => getAddData!(e, data, setData, false)}
          />
          <input
            name={inputName2}
            className="mt-6 text-white font-bold text-center rounded-xl bg-gray-800 w-[80%] h-1/6 focus:outline-none focus:ring-0 focus:border-transparent"
            placeholder={inputPlaceHolder2}
            onChange={(e) => getAddData!(e, data, setData, false)}
          />
          <p className="mt-10 text-red-300 font-bold text-xl">Specify Gender:</p>
          <div className="w-1/2 h-1/6 flex justify-between items-center">
            {/* Ref passed to RadioButton */}
            <RadioButton comp_ref={btn_ref1} name="gender" text="male" getData={data} setData={setData} className="w-1/2 mr-4" />
            <RadioButton comp_ref={btn_ref2} name="gender" text="female" getData={data} setData={setData} className="w-1/2 ml-4" />
          </div>
          <div className="mt-12 px-6 flex justify-between w-full h-1/6">
            <ButtonChat onClick={() => {closePopUp(); getClearContents!(comp_ref, btn_ref1, btn_ref2, setData)}} text="Cancel" className="w-1/3 h-2/3 border-none text-white font-bold rounded-lg bg-gray-600 lg:h-3/4" />
            <ButtonChat onClick={() => {submitPopUp(); getSendData!(data, url);}} text={btnText} className="w-1/3 h-2/3 border-none text-white font-bold rounded-lg bg-purple-500 lg:h-3/4" />
          </div>
        </div>
      </div>
    );
  }
);

export default PopUpWindow;
