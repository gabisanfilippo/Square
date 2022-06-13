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
    position: fixed;
    top: 0;
    width: 97vw;
    background-color: white;
    
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
    li:hover{
        border-bottom: 2px solid #2A254B;
        cursor: pointer;
    }
    .menu.active{
        opacity: 1;
        visibility: visible;
    }
    .menu.inactive{
        opacity: 0;
    }
    .menu{
        background-color: #2A254B;
        border: 1px solid rgba(249, 249, 249, 0.15);
        position: absolute;
        top: 4rem;
        width: 11rem;
        color: white;
        padding: 0.5rem;
    }
    .menu ul{
        display: flex;
        flex-direction: column;
    }
    .menu li{
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
        margin: 0;
        margin-bottom: 0.2rem;
    }
    .menu li:hover{
        border-bottom: 2px solid rgba(249, 249, 249, 0.15);
        cursor: pointer;
    }
    #profile{
        margin: 0;
    }
`

