import { Member } from "./member"
import { Room } from "./room"

export class Round {
  private timeStart: Date | undefined
  private timeEnd: Date | undefined
  private opened: boolean
  private estimatives: Map<Member, number>
  constructor(private room: Room, private index: number) {
    this.opened = true
    this.estimatives = new Map()
    this.timeStart = undefined
    this.timeEnd = undefined
  }
  
  start(){
    this.timeStart = new Date()
  }

  finish() {
    this.timeEnd = new Date()
  }

  newEstimative(member: Member, value: number) {
    this.estimatives.set(member, value)
  }
}