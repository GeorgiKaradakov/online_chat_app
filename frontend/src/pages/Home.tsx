import { useState } from "react";
import PPJoinRoom from "../components/popup/PPJoinRoom.tsx"
import ButtonChat from "../components/ButtonChat.tsx";

function Home(){
  const [open, setOpen] = useState(false);

  return (
    <>
      <ButtonChat onClick={() => setOpen(true)} text="open popup" className="w-1/3 h-24"/>
      <PPJoinRoom isOpen={open} closePopUp={() => setOpen(false)} submitPopUp={() => console.log("submited")}/>
    </>
  );
}

export default Home;
