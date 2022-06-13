import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 5rem;
    img{
        width: 20rem;
        height: 20rem;
        margin-bottom: 1rem;
    }
    .title{
        font-weight: 500;
    }
    .card{
        width: 20rem;
    }
    .title:hover{
        border-bottom: 2px solid #2A254B;
        cursor: pointer;
    }
`;