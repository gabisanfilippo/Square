import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 5rem;
    .features{
        display: flex;
        justify-content: space-evenly;
    }
    img{
        width: 4rem;
    }
    .feature{
        background-color: #F9F9F9;
        width: 25vw;
        padding: 2rem;
        height: 15rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .title{
        font-weight: 600;
        font-size: 2rem;
        text-align: center;
        margin-bottom: 2rem;
    }
    .text{
        font-weight: 300;
    }
    .titleFeature{
        margin-bottom: 1rem;
    }
    #check{
        padding: 1rem;
    }
    #card{
        padding: 1rem;
    }
`;