import {Container} from './style'

function Listings(){
    return(
        <Container>
            <div className='card'>
                <div>
                    <img src="img/products/estante-rack.jfif" alt='Estante com Rack integrada'/>
                </div>
                <div>
                    <p className='title'>Estante com Rack integrada</p>
                    <p className='text'>R$5000.00</p>
                </div>
            </div>
            <div className='card'>
                <div>
                    <img src="img/products/divisor-ambientes.jpg" alt='Estante Separadora de Ambientes'/>
                </div>
                <div>
                    <p className='title'>Estante Separadora de Ambientes</p>
                    <p className='text'>R$5000.00</p>
                </div>
            </div>
            <div className='card'>
                <div>
                    <img src="img/products/nicho-tetris.png" alt='Estante Nicho Tetris'/>
                </div>
                <div>
                    <p className='title'>Estante Nicho Tetris</p>
                    <p className='text'>R$5000.00</p>
                </div>
            </div>
            <div className='card'>
                <div>
                    <img src="img/products/prateleira-banheiro.jfif" alt='Prateleira'/>
                </div>
                <div>
                    <p className='title'>Prateleira</p>
                    <p className='text'>R$5000.00</p>
                </div>
            </div>
        </Container>
    )
}
export default Listings