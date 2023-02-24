import { useSelector } from "react-redux";
import { CartTableTitle,CartTableFooter,CartTable,CartPage  } from "./Cart.styles";
import { useNavigate } from "react-router-dom";
import RowTable from "../../Components/RowTable";

const Cart = () => {

    const cartInfo = useSelector((store) => store.cart.cartList)

    const cartKeys = Object.keys(cartInfo)
    const navigate = useNavigate()

    let total = 0
    cartKeys.forEach((product)=>{
        total += cartInfo[product].count*cartInfo[product].price
    })
    
    const HondleGoBackToOrders = () => {
        navigate("/")
    }


    
    return (
        <CartPage>
            <CartTable>
                <CartTableTitle >
                    <tr>
                        <th>Name</th>
                        <th>Price per unit</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th></th>
                    </tr>
                </CartTableTitle >
                {cartKeys.map((key,index)=>{
                    return (
                        <RowTable key={index} keys={key} cartInfo={cartInfo[key]}/>
                    )
                })

                }
                <CartTableFooter >
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Total Price:</th>
                        <th>{`$${total}`}</th>
                        <th></th>
                    </tr>
                </CartTableFooter >
            </CartTable>
            <button onClick={HondleGoBackToOrders}>
                Go back To orders
            </button>
        </CartPage>
        
    )

}

export default Cart