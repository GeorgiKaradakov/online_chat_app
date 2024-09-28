import Button from "../components/ButtonChat.tsx";

const openPP = () => {
  console.log("clicked")
};

function Home(){
  return (
    <>
      <Button onClick={openPP()} text="create" className="w-1/3 h-24"/>
    </>
  );
}

export default Home;
