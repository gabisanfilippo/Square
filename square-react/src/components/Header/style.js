import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0.5rem;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 5rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    img{
        width: 2rem;
    }
    ul{
        display: flex;
        align-items: center;
    }
    .searchCartProfile{
        display: flex;
        align-items: center;
    }
    li, button{
        margin-right: 3rem;
        background-color: transparent;
        border: none;
        padding: 0.2rem;
    }
    input{
        height: 2.9rem;
        width: 15rem;
        border: none;
        padding-left: 0.5rem;
    }
    .search{
        display: flex;
        align-items: center;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }
    .search button{
        margin: 0;
        padding-right: 0.5rem;
    }
    .cart{
        margin-left: 3rem;
    }
`

