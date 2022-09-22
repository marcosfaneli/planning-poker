import CardComponent from "../card"
import { getCards } from "../../services/card-service"
import { CardInformation, CardResult } from "../../types"
import React from "react";
import styled from "styled-components"
import { ScoreboardCardComponent } from "../scoreboard";

const Table = styled.div`
    max-width: 32rem;
    margin: .8rem auto;
    padding: .8rem 0 .8rem .8rem;
    background-color: #fff;
    border-radius: .8rem;
    text-align: center;
`

const ListCards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

const Button = styled.button`
    background-color: #fff;
    border: 1px solid #ccc;
    padding: .4rem;
    font-size: 1.2rem;
    border-radius: .4rem;
    margin: .4rem;
    width: 8rem;
`

export function TableComponent() {

    const [cards, setCards] = React.useState<CardInformation[]>([])
    const [results, setResults] = React.useState<CardResult[]>([])
    const [turned, setTurned] = React.useState<boolean>(false)

    React.useEffect(() =>
        setCards(getCards())
    , [])

    const turn = () => {
        setTurned(true)
        const res = cards
            .reduce((acc: CardResult[], curr: CardInformation) => {
                const card = acc.find(c => c.index === curr.value)

                if (card) {
                    card.count += 1
                    return acc
                }

                acc.push({index: curr.value, count: 1})
                
                return acc
            }, [])
            .sort((a: CardResult, b: CardResult) => b.count - a.count)

        setResults(res)
    }

    const newRound = () => {
        setResults([])
        setTurned(false)
    }

    return (
        <Table>
            <ListCards>
                {cards.map((card, index) => <CardComponent key={index} card={card} turned={turned}/>)}
            </ListCards>
            {!turned && <Button onClick={turn}>Toggle</Button>}
            {turned && <Button onClick={newRound}>New Turn</Button>}
            <ScoreboardCardComponent cards={results} />
        </Table>
    )
}