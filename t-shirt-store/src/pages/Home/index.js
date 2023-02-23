import Tshirt from "../../Components/Tshirt"
import { GridDiv,HomeDiv } from "./Home.styles"
import { Tshirts } from "../../Tshirts/TshirtsData"


const Home = () => {

    

    return (
        <HomeDiv>
            <GridDiv >
            {Tshirts.map((tshirt,index) => 
                    <Tshirt key={index} tshirtinfo={tshirt}/>
            )}
            </GridDiv >
        </HomeDiv> 
    )
}

export default Home