import { HeaderDiv, HeaderRightDiv  } from "./Header.styles"

const Header = () => {

    return (
        <HeaderDiv>
            <HeaderRightDiv>
                <img src="hola.png"/>
                <h3>
                    My Cool Tshirts
                </h3>

            </HeaderRightDiv>
            <p>

            </p>
            <HeaderRightDiv>
                <p>Number</p>
                <p>Cart</p>
            </HeaderRightDiv>
        </HeaderDiv>
        
    )
}

export default Header