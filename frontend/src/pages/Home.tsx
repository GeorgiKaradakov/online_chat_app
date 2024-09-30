import ButtonChat from "../components/ButtonChat";
import PopUpWindow from "../components/popup/PopUpWindow";
import Typewriter from "../components/Typewriter";
import { controller } from "../utils/controller";

import "../styles/styles.css";

function Home() {
  const {getPPCreate, getPPJoin, getClearContents} = controller({usePPCreate: true, usePPJoin: true, clearPopUpContents: true});
  const {openCR, changeCR} = getPPCreate!(false);
  const {openJR, changeJR} = getPPJoin!(false);

  return (
    <>
      <div className={`${openCR ? "" : (openJR ? "" : "hidden")} absolute top-0 left-0 w-full h-full z-20 backdrop-blur`}></div>
      <div className="w-full h-full flex flex-col justify-center items-center max-lg:gap-y-10 lg:flex-row-reverse">
        <h1 className="p-3 mt-6 w-full text-white text-7xl text-center font-bold max-sm:text-4xl max-md:text-4xl md:text-5xl md:px-8">
          <Typewriter text="Welcome to the live chatroom, press Create room to create your own room which other people can join with code or press join room if you have a code for another room!" delay={50} />
        </h1>

        <div className="w-full h-1/2 flex flex-col justify-center items-center gap-y-10 lg:bg-black lg:h-full lg:w-1/3">
          <ButtonChat
            onClick={() => changeCR()}
            text="Create room"
            className="w-2/3 h-1/6 rounded-xl bg-purple-500 text-xl text-white font-bold border-none lg:h-[10%]"
          />
          <ButtonChat
            onClick={() => changeJR()}
            text="Join room"
            className="w-2/3 h-1/6 rounded-xl bg-purple-500 text-xl text-white font-bold border-none lg:h-[10%]"
          />
        </div>

        <PopUpWindow
          isOpen={openCR}
          popUpName="Create room"
          id="create_pp" btn_id1="cr_rb_male" btn_id2="cr_rb_female"
          inputName1="username"
          inputName2="room_name"
          inputPlaceHolder1="Enter username..."
          inputPlaceHolder2="Enter room name..."
          btnText="Create"
          className="animate-popup-cr"
          closePopUp={() => {changeCR(); getClearContents!();}}
          submitPopUp={() => console.log("submit cr")}
        />
        <PopUpWindow
          isOpen={openJR}
          id="create_pp" btn_id1="jr_rb_male" btn_id2="jr_rb_female"
          popUpName="Join room"
          inputName1="room_code"
          inputName2="username"
          inputPlaceHolder1="Enter room code..."
          inputPlaceHolder2="Enter username..."
          btnText="Join"
          className="animate-popup-jr"
          closePopUp={() => {changeJR(); getClearContents!();}}
          submitPopUp={() => console.log("submit jr")}
        />
      </div>
    </>
  );
}

export default Home;
