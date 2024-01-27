import styled from 'styled-components'

import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;  
`

export const ToDoList = styled.div`
    background: #fff;
    padding: 2rem 1rem;
    border-radius: 5px;

    ul {
        padding: 0;
        margin-top: 40px;
    }
`

export const Input = styled.input`
    border-radius: 5px;
    border: 2px solid rgba(209, 211, 212, 0.40);
    height: 40px;
    margin-right: 20px;
    width: 380px;
`

export const Button = styled.button`
    border-radius: 5px;
    background: #8052EC;
    color: #FFF;
    font-size: 17px;
    font-weight: 900;
    line-height: 2.5px; 
    height: 40px;
    border: none;
    color: #FFF;
    width: 130px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`

export const ListItem = styled.div`
    background: ${(props) => props.isFinished ? '#E8FF8B' : '#E4E4E4'};
    box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, 0.20);
    border-radius: 5px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 0 20px;
    width: 500px;

    li {
        list-style: none;
    }
`

export const Trash = styled(FcEmptyTrash)`
    cursor: pointer;
`

export const Check = styled(FcCheckmark)`
    cursor: pointer;
`

export const H3 = styled.h3 `
    color: #919191;
    font-weight: 200;
    text-align: center;
`