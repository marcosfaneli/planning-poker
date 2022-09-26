import { Room } from "../domain/room";

export class RoomRepository {
  getRoomById(id: string) {
    return new Room();
  }

  save(room: Room) {
    
  }
}