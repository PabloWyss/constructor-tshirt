import Tshirt from "../../Components/Tshirt"
import { GridDiv,HomeDiv } from "./Home.styles"
import { Tshirts } from "../../Tshirts/TshirtsData"


const Home = () => {

    const tshirtsNames = Object.keys(Tshirts)


    return (
        <HomeDiv>
            <GridDiv >
            {tshirtsNames.map((tshirt,index) => 
                    <Tshirt key={index} tshirtinfo={Tshirts[tshirt]}/>
            )}
            </GridDiv >
        </HomeDiv> 
    )
}

export default Home