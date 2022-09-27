import { Round } from "./round";

export class Member {
  constructor(private name){
  }

  estimate(round: Round, value: number){
    round.estimate(this, value)
  }
}