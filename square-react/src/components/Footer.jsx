import styled from "styled-components";

const FooterStyle = styled.footer`
    background-color: #2A254B;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 3rem;
    margin-top: 5rem;
    img{
        width: 3rem;
        margin-right: 3rem;
    }
    .line{
        border-left: 2px solid white;
        height: 5rem;
    }
    h3{
        margin-bottom: 1.5rem;
    }
    li{
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }
`

function Footer(){
    return(
        <FooterStyle>
            <div>
                <h3>Categorias</h3>
                <ul>
                    <li>Mesas</li>
                    <li>Bancos</li>
                    <li>Estantes</li>
                    <li>Sofás</li>
                    <li>Racks</li>
                </ul>
            </div>
            <div>
                <h3>Square</h3>
                <ul>
                    <li>Sobre nós</li>
                    <li>Vagas</li>
                    <li>Contate-nos</li>
                    <li>Privacidade</li>
                    <li>Políticas de Devolução</li>
                </ul>
            </div>
            <div className="line">
            </div>
            <div>
                <img src="img/footer/instagram.svg" alt="" />
                <img src="img/footer/facebook.svg" alt="" />
            </div>
        </FooterStyle>
    )
}
export default Footer