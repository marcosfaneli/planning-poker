import React, { ReactNode } from "react";
import { io } from "socket.io-client";
import { v4 as uuid } from "uuid";

const urlApi = "http://localhost:8080";
const socket = io(urlApi);

type Props = {
  children?: ReactNode;
};

type Room = {
  name: string;
  id: string;
};

export type RoomContextType = {
  sendMessage: (msg: string) => void;
  createRoom: (name: string) => string;
  selectRoom: (room: Room) => void;
};

export const RoomContext = React.createContext<RoomContextType | null>(null);

export const RoomContextProvider = ({ children }: Props) => {
  const sendMessage = (msg: string) => {
    socket.emit("sending_message", { msg });
  };

  const createRoom = (name: string) => {
    const room = { id: uuid(), name };
    socket.emit("create_room", { ...room });
    return room.id;
  };

  const selectRoom = (room: Room) => {
    socket.emit("select_room", { room });
  };

  return (
    <RoomContext.Provider value={{ sendMessage, createRoom, selectRoom }}>
      {children}
    </RoomContext.Provider>
  );
};

export const useRoomContext = () => React.useContext(RoomContext);
