import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoomContextProvider } from "./contexts/room-context";
import { CreateRoom } from "./pages/create-room";
import { Poker } from "./pages/poker";

function App() {
  return (
    <RoomContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateRoom />} />
          <Route path="/room/create" element={<CreateRoom />} />
          <Route path="/room/:id" element={<Poker />} />
        </Routes>
      </BrowserRouter>
    </RoomContextProvider>
  );
}

export default App;
