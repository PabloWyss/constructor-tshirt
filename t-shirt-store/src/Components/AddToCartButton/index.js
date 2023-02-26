import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/Slcies/cartSlice"
import { AddCartButtonStyle } from "../Tshirt/Tishirt.styles"

const AddToCartButton = (prop) => {

    const dispatch = useDispatch()

    const handleAddCartButton = () => {
        dispatch(addToCart(prop.tshirtinfo))

    }

    return (
        <AddCartButtonStyle onClick={handleAddCartButton}> Add to Cart</AddCartButtonStyle>
    )
}

export default AddToCartButton