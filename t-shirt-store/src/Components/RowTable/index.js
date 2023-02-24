import { useDispatch } from "react-redux"
import { addItem, removeItem,removeItemFromList  } from "../../redux/Slcies/cartSlice"

const RowTable = (prop) => {
    
    const dispatch = useDispatch()
    const handleAddButton = (e) => {
        e.preventDefault()
        dispatch(addItem(prop.keys))
    }
    const handleRemoveButton = (e) => {
        e.preventDefault()
        dispatch(removeItem(prop.keys))
    }
    const handleRemoveItemButton = (e) => {
        e.preventDefault()
        dispatch(removeItemFromList(prop.keys))

    }



    return (
        <tbody>
            <tr>
                <td>{prop.keys}</td>
                <td>{`$${prop.cartInfo.price}`}</td>
                <td>{prop.cartInfo.count}</td>
                <td>{`$${prop.cartInfo.count * prop.cartInfo.price}`}</td>
                <td>
                    <button onClick={handleAddButton}>
                        +
                    </button>
                    <button onClick={handleRemoveButton}>
                        -
                    </button>
                    <button onClick={handleRemoveItemButton}>
                        Remove Item
                    </button>
                </td>
            </tr>
        </tbody>
    )
}

export default RowTable