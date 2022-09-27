import { CardInformation } from "../types";

const cards: CardInformation[] = [
    {id: "card1", name: "Fulano", value: 1},
    {id: "card2", name: "Beltrano", value: 2},
    {id: "card3", name: "Ciclano", value: 3},
    {id: "card4", name: "Fulano", value: 5},
    {id: "card5", name: "Beltrano", value: 8},
    {id: "card6", name: "Ciclano", value: 3},
    {id: "card7", name: "Fulano", value: 8},
    {id: "card8", name: "Beltrano", value: 3},
    {id: "card9", name: "Ciclano", value: 5},
]

export function getCards() {
    return cards
}