import { Member } from "./member"
import { Round } from "./round"

export class Room {
  private _id: string
  private rounds: Round[]
  private opened: boolean
  private members: Member[]
  private activeRound: Round | undefined

  constructor(private owner: Member, private name: string, id: string) {
    this._id = id
    this.rounds = []
    this.members = []
    this.members.push(owner)
    this.opened = true
    this.activeRound = undefined
  }

  get id() {
    return this._id;
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