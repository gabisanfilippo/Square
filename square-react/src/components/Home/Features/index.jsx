import {Container} from './style'

function Features(){
    return(
        <Container>
            <p className='title'>O que diferencia nossa marca</p>
            <div className='features'>
                <div className='feature'>
                    <img src="img/home/delivery.svg" alt="delivery" />
                    <p className='titleFeature'>Dia seguinte como padrão</p>
                    <p className='text'>Encomende antes das 15h e começamos a fazer o seu pedido no dia seguinte</p>
                </div>
                <div className='feature'>
                    <img src="img/home/check.svg" alt="check" id='check' />
                    <p className='titleFeature'>Feito por verdadeiros artesãos</p>
                    <p className='text'>Produtos artesanais feitos com verdadeira paixão e artesanato</p>
                </div>
                <div className='feature'>
                    <img src="img/home/card.svg" alt="card" id='card' />
                    <p className='titleFeature'>Preços imbatíveis</p>
                    <p className='text'>Para nossos materiais e qualidade você não encontrará melhores preços em nenhum lugar</p>
                </div>
                <div className='feature'>
                    <img src="img/home/custom.svg" alt="custom" id='custom' />
                    <p className='titleFeature'>Projetos personlizáveis</p>
                    <p className='text'>Faça um orçamento conosco e criamos o móvel perfeito para você</p>
                </div>
            </div>
        </Container>
    )
}

export default Features