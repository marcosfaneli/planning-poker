import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = styled.div`
    max-width: 32rem;
    margin: .8rem auto;
    padding: .8rem 0 .8rem .8rem;
    background-color: #fff;
    border-radius: .8rem;
    text-align: center;
`

const Input = styled.input`
    background-color: #fff;
    border: 1px solid #ccc;
    padding: .4rem;
    font-size: 1.2rem;
    border-radius: .4rem;
    width: 100%;
    box-sizing: border-box;
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

export function HomePage(){
    let navigate = useNavigate()

    const [name, setName] = React.useState("")

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handleClick = () => {
        navigate("/poker")
    }
    
    return (
        <Home>
            <div>Sala</div>
            <Input type="text" value={name} onChange={handleChangeName} />
            <Button onClick={handleClick}>Criar Sala</Button>
        </Home>
    )
}