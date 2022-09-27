import { Room } from "../domain/room"

export class RoomRepository {
  private static data: Room[] = []

  getRoomById(id: string) {
    return RoomRepository.data.find((p: Room) => p.id === id);
  }

  save(room: Room) {
    this.delete(room)
    RoomRepository.data.push(room)
  }

  delete(room: Room) {
    const data = RoomRepository.data.map((r: Room) => r.id !== room.id)
    RoomRepository.data = data
  }
}