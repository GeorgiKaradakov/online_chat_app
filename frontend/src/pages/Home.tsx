import React from 'react';
import Button from '../components/Button';

function Home(){
  return (
    <>
      <nav className="z-[-2] flex flex-col pl-2 pr-2 bg-slate-950 place-content-center space-y-10 border-sky-400">
        <div className="bg-cont1 text-white flex flex-col justify-center items-center">
          <Button label='Start' onClick={console.log}/>
        </div>
        <div className="bg-cont2 text-white flex flex-col justify-center items-center">
          <Button label="Exit" onClick={console.log}/>
        </div>
      </nav>
    </>
  );
}

export default Home;