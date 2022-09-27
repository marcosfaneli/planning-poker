import { RoomRepository } from "../infra/repository/room-repository"

export class NewUserEstimateUseCase {
  constructor(private roomRepository: RoomRepository) { }
  execute(request: any) {
    const room = this.roomRepository.getRoomById(request.room)

    if (!room) throw new Error("Invalid room")

    const member = room.getMemberById(request.member)

    if (!member) throw new Error("Invalid member")

    member.estimate(room.activeRound, request.value)

    this.roomRepository.save(room)
  }
}