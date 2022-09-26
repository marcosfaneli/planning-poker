import { RequestMapper } from "../application/request-mapper"
import { RoomRepository } from "../infra/room-repository"

export class NewRoundUseCase {
  constructor(private roomRepository: RoomRepository)
  execute(request: any) {
    const room = this.roomRepository.getRoomById(request.room)

    if (!room) throw new Error("Room not found")

    const member = room.getMemberById(request.member)

    const member = RequestMapper.toMember(request)

    room.ingress(member)

    this.roomRepository.save(room)
  }
}