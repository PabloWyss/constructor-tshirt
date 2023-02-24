import { TshirtImg,InfoTshirtDiv,AddCartBurton } from "./Tishirt.styles"
import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/Slcies/cartSlice";


const Tshirt = (prop) => {

    const dispatch = useDispatch()

    const handleAddCartButton = () => {
        dispatch(addToCart(prop.tshirtinfo))

    }

    return (
        <div>
            <TshirtImg alt="Tshirt" src={prop.tshirtinfo.url}/>
            <InfoTshirtDiv>
                <p>Price: ${prop.tshirtinfo.price}</p>
                <AddCartBurton onClick={handleAddCartButton}>Add to Cart</AddCartBurton>
            </InfoTshirtDiv>
        </div>
    )
}

export default Tshirt