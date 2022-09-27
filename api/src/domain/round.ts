import { Member } from "./member"
import { Room } from "./room"

export class Round {
  private timeStart: Date
  private timeEnd: Date
  private opened: boolean
  private estimatives: Map<Member, number>
  constructor(private room: Room, private index: number) {
    this.opened = true
    this.estimatives = new Map();
  }
  
  start(){
    this.timeStart = new Date()
  }

  finish() {
    this.timeEnd = new Date()
  }

  newEstimative(member: Member, value) {
    this.estimatives.set(member, value)
  }
}