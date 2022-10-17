import { Socket } from "socket.io"
import { RequestMapper } from "../../application/request-mapper"
import { RoomRepository } from "../repository/room-repository"
import { io } from "./http"

const roomRepository = new RoomRepository()

io.on("connection", (socket: Socket) => {
  console.log(socket.id)

  socket.on("create_room", data => {
    console.log(data)
    const owner = RequestMapper.extractOwnerRoom(data)
    const room = RequestMapper.toRoom(data, owner)
    console.log(room)
    roomRepository.save(room)
  })
})
