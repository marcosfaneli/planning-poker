import { Room } from "../domain/room"
import { Member } from "../domain/member"

export class RequestMapper {
  static toMember(request: any): Member {
    return new Member(request.name)
  }

  static extractOwnerRoom(request: any): Member {
    return new Member(request.owner)
  }

  static toRoom(request: any, owner: Member): Room {
    return new Room(owner, request.roomName, request.id);
  }
}