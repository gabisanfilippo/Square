import * as S from './style'

function Footer(){
    return(
        <S.Container>
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
        </S.Container>
    )
}
export default Footer