import {CardInformation } from '../../types'
import styled from 'styled-components'

const Card = styled.div`
    border: 4px solid #8df;
    background-color: azure;
    color: #8af;
    border-radius: .4rem;
    margin: .4rem .8rem .4rem 0;
    padding: .4rem;
    text-align: center;
    width: 4rem;
    height: 6rem;
    font-weight: bold;
`

const Value = styled.div`
    font-size: 2rem;
    vertical-align: middle;
`

type Props = { 
    card: CardInformation
    turned: boolean
}

export default function CardComponent({ card, turned }: Props){
    return (
        <Card>
            {card.name}
            {turned && <Value>{card.value}</Value>}
        </Card>
    )
}