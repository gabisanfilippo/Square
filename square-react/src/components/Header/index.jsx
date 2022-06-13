import * as S from './style'
import {useState, useRef, useEffect} from 'react'

function Header(){
    const [classname, setClassname] = useState("menu inactive")
    const [isActive, setIsActive] = useState(false)
    const [login, setLogin] = useState(false)
    const onClick = () => {
        setIsActive(!isActive)
        console.log(isActive)
    }
    const dropdownRef = useRef(null)
    useEffect(()=>{
        if(isActive){
            setClassname("menu active")
        } else {
            setClassname("menu inactive")
        }
    },[isActive])
    

    return(
        <S.Container>
            <div>
                <h1>Square</h1>
            </div>
            <nav>
                <ul>
                    <li>Mesas</li>
                    <li>Bancos</li>
                    <li>Estantes</li>
                    <li>Sofás</li>
                    <li>Racks</li>
                    <li>Nichos</li>
                    <li>Prateleiras</li>
                </ul>
            </nav>
            <div className="searchCartProfile">
                <div className="search">
                    <input name="search" />
                    <button><img src="img/header/search.svg" alt="magnifying glass" /></button>
                </div>
                <div>
                    <button className="cart"><img src="img/header/cart.svg" alt="cart" /></button>
                    <button onClick={onClick} id="profile"><img src="img/header/profile.svg" alt="profile" /></button>
                    <nav
                        ref={dropdownRef}
                        className={classname}
                    >
                        <ul>
                            {login ? (
                                <>
                                    <li>Perfil</li>
                                    <li>Sair</li>
                                </>
                            ) : (
                                <>
                                    <li>Entrar</li>
                                    <li>Cadastre-se</li>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        </S.Container>
    )
}

export default Header