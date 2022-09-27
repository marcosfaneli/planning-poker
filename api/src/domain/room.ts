import { v4 as uuidv4 } from "uuid"

import { Member } from "./member"
import { Round } from "./round"

export class Room {
  private id: string;
  private rounds: Round[]
  private opened: boolean
  private members: Member[]
  private activeRound: Round | undefined

  constructor(private owner: Member, private name: string, id: string) {
    this.id = uuidv4().toString()
    this.rounds = []
    this.members = []
    this.members.push(owner)
    this.opened = true
    this.activeRound = undefined
  }

  ingress(member: Member) {
    if (!this.opened) throw new Error("Room is closed")

    this.members.push(member)
  }

  close() {
    this.opened = false
  }

  newRound() {
    if (!this.opened) throw new Error("Room is closed")

    const roundNew = new Round(this, this.rounds.length + 1)
    roundNew.start()
    this.activeRound = roundNew
    this.rounds.push(roundNew)
  }
}