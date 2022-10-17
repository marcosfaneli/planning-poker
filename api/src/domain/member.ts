import { Round } from "./round";

export class Member {
  constructor(private name: string){
  }

  estimate(round: Round, value: number){
    round.newEstimative(this, value)
  }
}