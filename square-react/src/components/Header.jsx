import styled from "styled-components";

const HeaderStyle = styled.header`
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

function Header(){
    return(
        <HeaderStyle>
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
        </HeaderStyle>
    )
}

export default Header