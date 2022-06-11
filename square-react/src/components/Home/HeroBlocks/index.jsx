import {Container} from './style'

function HeroBlocks(){
    return (
    <Container>
         <img src="img/home/heroBlocks.jpg" alt='' />
         <div className='container'>
            <div>
                <div className='title'>
                    <p>A marca de móveis do futuro,</p>
                    <p>com designs atemporais</p>
                </div>
                <button>Ver coleção</button>
            </div>
            <p className='text'>
            Uma nova era em móveis com Square, a marca brasileira de móveis industriais
            com fontes bonitas, cores de bom gosto e uma bela maneira de exibir as coisas digitalmente
            usando tecnologias web modernas.
            </p>
         </div>
    </Container>
    )
}
export default HeroBlocks