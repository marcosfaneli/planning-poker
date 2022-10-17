import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RoomContextType, useRoomContext } from "../../contexts/room-context";

const Home = styled.div`
  max-width: 32rem;
  margin: 0.8rem auto;
  padding: 0.8rem 0 0.8rem 0.8rem;
  background-color: #fff;
  border-radius: 0.8rem;
  text-align: center;
`;

const Input = styled.input`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 0.4rem;
  font-size: 1.2rem;
  border-radius: 0.4rem;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 0.4rem;
  font-size: 1.2rem;
  border-radius: 0.4rem;
  margin: 0.4rem;
  width: 8rem;
`;

export function CreateRoom() {
  let navigate = useNavigate();

  const { createRoom } = useRoomContext() as RoomContextType;

  const [roomName, setRoomName] = React.useState("");
  const [userName, setUserName] = React.useState("");

  const handleChangeRoom = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(event.target.value);
  };

  const handleChangeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleClick = () => {
    const id = createRoom({ room: roomName, userName });
    navigate(`/room/${id}`);
  };

  return (
    <Home>
      <label htmlFor="user">User</label>
      <Input
        name="user"
        type="text"
        value={userName}
        onChange={handleChangeUser}
      />
      <label htmlFor="room">Sala</label>
      <Input
        name="room"
        type="text"
        value={roomName}
        onChange={handleChangeRoom}
      />
      <Button onClick={handleClick}>Criar Sala</Button>
    </Home>
  );
}
