import { useState } from "react";
import PPCreateRoom from "../components/popup/PPCreateRoom.tsx";
import ButtonChat from "../components/ButtonChat.tsx";

function Home(){
  const [open, setOpen] = useState(true);

  return (
    <>
      <ButtonChat onClick={() => setOpen(true)} text="open popup" className="w-1/3 h-24"/>
      <PPCreateRoom isOpen={open} closePopUp={() => setOpen(false)} submitPopUp={() => console.log("submited")}/>
    </>
  );
}

export default Home;
