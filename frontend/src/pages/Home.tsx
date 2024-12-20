import ButtonChat from "../components/ButtonChat";
import PopUpWindow from "../components/popup/PopUpWindow";
import Typewriter from "../components/Typewriter";
import { useController } from "../controllers/controller.ts";

import { API } from "../utils/constants.ts"

import "../styles/styles.css";

function Home() {
  const {getPPCreate, getPPJoin, ppCreateRef, cRBRef1, cRBRef2, ppJoinRef, jRBRef1, jRBRef2} = useController({usePPCreate: true, usePPJoin: true, useCPPRefHooks: true, useJPPRefHooks: true});
  const {openCR, changeCR} = getPPCreate!(false);
  const {openJR, changeJR} = getPPJoin!(false);

  return (
    <>
      <div className={`${openCR ? "" : (openJR ? "" : "hidden")} absolute top-0 left-0 w-full h-full z-20 backdrop-blur`}></div>
      <div className="w-full h-full flex flex-col justify-center items-center max-lg:gap-y-10 lg:flex-row-reverse">
        <div className="w-full flex flex-col space-y-20 justify-center items-center text-center lg:space-y-40">
          <h1 className="text-white text-7xl font-bold max-sm:text-3xl max-md:text-4xl md:text-5xl">Welcome to the live chatroom</h1>
          <h1 className="p-3 mt-6 w-full  text-white text-7xl text-center lg:w-[80%] max-sm:text-2xl max-md:text-4xl md:text-5xl md:px-8">
            <Typewriter text="Press Create room to create your own room which other people can join with code or press join room if you have a code for another room!" delay={50} />
          </h1>
        </div>

        <div className="w-full h-1/2 flex flex-col justify-center items-center gap-y-10 lg:bg-black lg:h-full lg:w-1/3">
          <ButtonChat
            onClick={() => changeCR()}
            text="Create room"
            className="w-2/3 h-1/6 rounded-xl bg-purple-500 text-xl text-white font-bold border-none lg:h-[10%] max-sm:max-h-1/3"
          />
          <ButtonChat
            onClick={() => changeJR()}
            text="Join room"
            className="w-2/3 h-1/6 rounded-xl bg-purple-500 text-xl text-white font-bold border-none lg:h-[10%] max-sm:max-h-1/3"
          />
        </div>

        <PopUpWindow
          isOpen={openCR}
          popUpName="Create room"
          comp_ref={ppCreateRef!} btn_ref1={cRBRef1!} btn_ref2={cRBRef2!}
          inputName1="username"
          inputName2="room_name"
          inputPlaceHolder1="Enter username..."
          inputPlaceHolder2="Enter room name..."
          btnText="Create"
          className="animate-popup-cr"
          url={API.CREATE_ROOM}
          closePopUp={() => {changeCR();}}
          submitPopUp={() => {changeCR();}}
        />
        <PopUpWindow
          isOpen={openJR}
          popUpName="Join room"
          comp_ref={ppJoinRef!} btn_ref1={jRBRef1!} btn_ref2={jRBRef2!}
          inputName1="username"
          inputName2="room_code"
          inputPlaceHolder1="Enter username..."
          inputPlaceHolder2="Enter room code..."
          btnText="Join"
          className="animate-popup-jr"
          url={API.JOIN_ROOM}
          closePopUp={() => {changeJR();}}
          submitPopUp={() => {changeJR();}}
        />
      </div>
    </>
  );
}

export default Home;
