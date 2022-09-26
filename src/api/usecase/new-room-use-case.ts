import { RequestMapper } from "../application/request-mapper"
import { RoomRepository } from "../infra/room-repository"

export class NewRoomUseCase {
  constructor(private roomRepository: RoomRepository)
  execute(request: any) {
    const owner = RequestMapper.extractOwnerRoom(request)
    const room = RequestMapper.toRoom(request, owner)

    this.roomRepository.save(room)
  }
}