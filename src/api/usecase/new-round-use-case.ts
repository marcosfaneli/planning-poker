import { RoomRepository } from "../infra/room-repository"

export class NewRoundUseCase {
  constructor(private roomRepository: RoomRepository)
  execute(request: any) {
    const room = this.roomRepository.getRoomById(request.room)

    if (!room) throw new Error("Room not found")

    const member = room.getMemberById(request.member)

    if (!member) throw new Error("Member not exists")

    room.newRound()

    this.roomRepository.save(room)
  }
}