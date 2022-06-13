import styled from "styled-components";

export const Container = styled.div`
    background-color: #2A254B;
    color: white;
    display: flex;
    width: 70vw;
    margin: auto;
    margin-bottom: 5rem;
    margin-top: 8rem;
    img{
        height: 32rem;
    }
    button{
        background: rgba(249, 249, 249, 0.15);
        border: none;
        color: white;
        padding: 1rem;
        padding-right: 2rem;
        padding-left: 2rem;
    }
    .title{
        font-size: 2rem;
        padding-top: 3rem;
        padding-bottom: 2rem;
    }
    .container{
        padding-left: 3rem;
        padding-right: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .text{
        padding-bottom: 3rem;
    }
`;