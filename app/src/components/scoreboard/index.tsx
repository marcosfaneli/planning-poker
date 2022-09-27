import styled from "styled-components"
import { CardResult } from "../../types"

const Scoreboard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

const Score = styled.div`
    border: 4px solid #000;
    border-radius: .4rem .4rem 0 0;
    border-bottom: none !important;
    margin: .4rem .8rem .4rem 0;
    padding: .2rem;
    text-align: center;
    width: 4rem;
`

const Value = styled.div`
    font-size: 1.6rem;
    font-weight: bold;
`

type Props = {
    cards: CardResult[]
}

export function ScoreboardCardComponent({ cards }: Props) {

    return (<Scoreboard>
        {cards.map((card, index) => (
                <Score key={index}>
                    <div>{card.count} {card.count > 1 ? 'votos' : 'voto'}</div>
                    <Value>{card.index}</Value>
                </Score>
            ))}
    </Scoreboard>)
}