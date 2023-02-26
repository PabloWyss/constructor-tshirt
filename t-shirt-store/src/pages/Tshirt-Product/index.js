import { useParams } from "react-router-dom";
import { Tshirts } from "../../Tshirts/TshirtsData";
import { TshirtPageDiv } from "./TshirtPage.styles";
import AddToCartButton from "../../Components/AddToCartButton";
import { TshirtPageImg } from "./TshirtPage.styles";

const TshirtProduct = () => {

    const params = useParams()

    

    return (
        <TshirtPageDiv>
            <div>
                <TshirtPageImg src={Tshirts[params.product].url}/>
            </div>
            <div>
                <h2>
                    {Tshirts[params.product].name}
                </h2>
                <h4>
                    Price: ${Tshirts[params.product].price}
                </h4>
                <h4>
                    Descrition:
                </h4>
                <p>
                    This tshirt .........
                </p>
                <AddToCartButton tshirtinfo={Tshirts[params.product]}/>
            </div>
        </TshirtPageDiv>
    )

}

export default TshirtProduct