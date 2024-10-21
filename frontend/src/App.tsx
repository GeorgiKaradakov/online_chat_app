import { Routes, Route  } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Chat from "./pages/Chat.js";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/chat_room/:room_id" element={<Chat />}/>
      </Routes>
  )
}

export default App;
