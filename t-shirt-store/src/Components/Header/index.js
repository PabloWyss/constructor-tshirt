import { HeaderDiv, HeaderInsideDiv } from "./Header.styles"


const Header = () => {

    

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
                    {localStorage.getItem('Username') ? `Welcome ${localStorage.getItem('Username')}` : "Welcome User"}
                </p>
            </HeaderInsideDiv>
            <HeaderInsideDiv>
                <p>Number</p>
                <p>Cart</p>
            </HeaderInsideDiv>
        </HeaderDiv>
        
    )
}

export default Header