import { Routes, Route  } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Chat from "./pages/Chat.js";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/chat_room" element={<Chat roomName="example room name"/>}/>
      </Routes>
  )
}

export default App;
