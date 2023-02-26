import { HeaderDiv, HeaderInsideDiv,CartImg,DivCartNumber,NumberCount,HeaderLinks  } from "./Header.styles"
import { useNavigate } from "react-router-dom"
import { useSelector} from "react-redux"
import { useState } from "react"
import { useEffect } from "react"






const Header = () => {

    const navigate = useNavigate()
    const totalRequest = useSelector((store) => store.cart.cartList )
    const keysObject = Object.keys(totalRequest)
    const [countNumChange,setCountNumChange] = useState(false)

    useEffect(()=>{
        handleChangeNum(countNumChange)
    },[keysObject.length])

    const handleChangeNum = (e) => {
        setCountNumChange(!e)
    }
    
    
    const handleClickCart = () => {
        if(localStorage.getItem("Token")){
            navigate("/cart")
        } else {
            navigate("/logIn")
        }
    }

    const handleLogIn = (e) => {
        e.preventDefault()
        navigate("/logIn")
    }
    const handleLHomeClick = (e) => {
        e.preventDefault()
        navigate("/")
    }
    const handleLogOut = (e) => {
        e.preventDefault()
        navigate("/")
        localStorage.removeItem("Token")
        localStorage.removeItem("UserName")
    }


    return (
        <HeaderDiv>
            <HeaderInsideDiv >
                <img src="hola.png" alt="logo"/>
                <h3>
                    My Cool Tshirts
                </h3>
            </HeaderInsideDiv>
            <HeaderInsideDiv>
                <p>
                    {localStorage.getItem('UserName') ? 
                    `Welcome ${localStorage.getItem('UserName')}` : 
                    "Welcome User"}
                </p>
            </HeaderInsideDiv>
            <HeaderInsideDiv>
                <HeaderLinks onClick={handleLHomeClick}>
                    Home
                </HeaderLinks>
                <DivCartNumber>
                    <NumberCount completed={countNumChange}>{keysObject.length}</NumberCount>
                    <CartImg onClick={handleClickCart} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </CartImg>
                </DivCartNumber>
               
                {localStorage.getItem("Token") ? 
                <HeaderLinks onClick={handleLogOut}>Log Out</HeaderLinks> :
                <HeaderLinks onClick={handleLogIn}>Log In</HeaderLinks>}
            </HeaderInsideDiv>
        </HeaderDiv>
        
    )
    
}

export default Header