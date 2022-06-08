import * as S from './style'

function Header(){
    return(
        <S.Container>
            <div>
                <h1>Square</h1>
            </div>
            <div>
                <ul>
                    <li>Mesas</li>
                    <li>Bancos</li>
                    <li>Estantes</li>
                    <li>Sofás</li>
                    <li>Racks</li>
                </ul>
            </div>
            <div className="searchCartProfile">
                <div className="search">
                    <input name="search" />
                    <button><img src="img/header/search.svg" alt="magnifying glass" /></button>
                </div>
                <div>
                    <button className="cart"><img src="img/header/cart.svg" alt="cart" /></button>
                    <button><img src="img/header/profile.svg" alt="profile" /></button>
                </div>
            </div>
        </S.Container>
    )
}

export default Header