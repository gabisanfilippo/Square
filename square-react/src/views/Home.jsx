import HeroBlocks from "../components/Home/HeroBlocks"
import Features from "../components/Home/Features"
import Listings from "../components/Home/Listings"
import Budget from "../components/Home/Budget"

function Home(){
    return(
        <section>
            <HeroBlocks/>
            <Features/>
            <Listings/>
            <Budget/>
        </section>
    )
}
export default Home