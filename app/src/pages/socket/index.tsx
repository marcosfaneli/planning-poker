import React from "react";
import { io } from "socket.io-client";

const urlApi = "http://localhost:8080";
const socket = io(urlApi);

export function PageServer() {
  const id = Math.floor(Math.random() * 100);

  React.useEffect(() => {}, []);

  const sendPing = () => {
    socket.emit("sending message", {
      id: id,
      message: "uahca",
    });
  };

  return (
    <div>
      <button onClick={sendPing}>Send ping</button>
    </div>
  );
}
