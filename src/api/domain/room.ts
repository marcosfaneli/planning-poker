import { Member } from "./member"
import { Round } from "./round"

export class Room {
  private rounds: Round[]
  private opened: boolean
  private members: Member[]
  private activeRound: Round

  open(private owner: Member, private name: string) {
    this.rounds = []
    this.members = []
    this.members.push(owner)
    this.opened = true
  }

  ingress(member: Member) {
    if (!this.open) throw new Error("Room is closed")

    this.members.push(member)
  }

  close(){
    this.opened = false
  }

  newRound() {
    if (!this.open) throw new Error("Room is closed")

    const roundNew = new Round(this, this.rounds + 1)
    roundNew.start()
    this.activeRound = roundNew
    this.rounds.push(roundNew)
  }
}