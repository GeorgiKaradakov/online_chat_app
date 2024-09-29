import { useState } from "react";
import ButtonChat from "../components/ButtonChat.tsx";
import PopUpWindow from "../components/popup/PopUpWindow.tsx";

function Home(){
  const [openCR, setOpenCR] = useState(false);
  const [openJR, setOpenJR] = useState(false);

  return (
    <>
      <ButtonChat onClick={() => setOpenCR(true)} text="Create Room" className="w-1/3 h-20 mb-10"/>
      <ButtonChat onClick={() => setOpenJR(true)} text="Join Room" className="w-1/3 h-20"/>
      <PopUpWindow
        popUpName="Create room"
        inputName1="username"
        inputName2="room_name"
        inputPlaceHolder1="Enter username..."
        inputPlaceHolder2="Enter room name..."
        btnText="Create"
        className="animate-popup-cr"
        isOpen={openCR}
        closePopUp={() => setOpenCR(false)}
        submitPopUp={() => console.log('submit cr')}
      />
      <PopUpWindow
        popUpName="Join room"
        inputName1="room_code"
        inputName2="username"
        inputPlaceHolder1="Enter code..."
        inputPlaceHolder2="Enter username..."
        btnText="Enter"
        className="animate-popup-jr"
        isOpen={openJR}
        closePopUp={() => setOpenJR(false)}
        submitPopUp={() => console.log('submit jr')}
      />
    </>
  );
}

export default Home;
