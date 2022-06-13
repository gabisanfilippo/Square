import {Container} from './style'

function Budget(){
    return(
        <Container>
            <div className='container'>
                <div>
                    <p className='title'>Tudo começou com uma pequena ideia</p>
                    <p>
                        Uma marca global com origens locais, 
                        nossa história começou em uma pequena 
                        garagem no suldeste do Brasil em meados de 2021
                    </p>
                </div>
                <button>Peça seu orçamento</button>
            </div>
            <div>
                <img src="img/home/budget.jpg" alt="estante com plantas no estilo industrial" />
            </div>
        </Container>
    )
}
export default Budget