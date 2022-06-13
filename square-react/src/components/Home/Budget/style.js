import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 60vw;
    height: 32rem;
    color: white;
    margin: auto;
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
        width: 15rem;
    }
    .container{
        background-color: #2A254B;
        margin-right: 2rem;
        padding: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .title{
        font-size: 2rem;
        padding-top: 3rem;
        padding-bottom: 2rem;
    }
`;