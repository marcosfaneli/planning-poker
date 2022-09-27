import { RequestMapper } from "../application/request-mapper"
import { RoomRepository } from "../infra/repository/room-repository"

export class IngressRoomUseCase {
  constructor(private roomRepository: RoomRepository) { }
  execute(request: any) {
    const room = this.roomRepository.getRoomById(request.room)

    if (!room) throw new Error("Room not found")

    if (room.getMemberById(request.member)) return

    const member = RequestMapper.toMember(request)

    room.ingress(member)

    this.roomRepository.save(room)
  }
}