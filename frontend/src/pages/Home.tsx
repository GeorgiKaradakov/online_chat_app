import React from 'react';
import Button from '../components/Button';
import Typewriter from "../components/Typewriter";

function Home() {
  return (
    <>
      <nav className="w-1/4 h-full lg:w-48 z-[-2] flex flex-col bg-slate-950 place-content-center items-center space-y-3 border-r-2 border-sky-400 p-3">
        <div className="w-full h-[7%] text-sky-400">
          <Button 
            className="hover:bg-slate-900 hover:cursor-pointer w-full h-full border-2 border-sky-400 rounded-3xl" 
            label="Start" 
            onClick={console.log} 
          />
        </div>
        <div className="w-full h-[7%] text-sky-400">
          <Button 
            className="hover:bg-slate-900 hover:cursor-pointer transition w-full h-full border-2 border-sky-400 rounded-3xl" 
            label="Exit" 
            onClick={console.log} 
          />
        </div>
      </nav>
      <h1 className="w-full text-white flex flex-col text-7xl text-center font-bold place-content-center p-3">
        <Typewriter text="Welcome to the live chatroom, press start to chat!" delay={100} />
      </h1>
    </>
  );
}

export default Home;
