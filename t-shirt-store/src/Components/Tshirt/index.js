import { TshirtImg,InfoTshirtDiv,OverImageDiv,ImageWithInfoDiv } from "./Tishirt.styles"
import { useNavigate } from "react-router-dom";
import AddToCartButton from "../AddToCartButton";
import { useState } from "react";


const Tshirt = (prop) => {

    const [hoverOver,setHoverOver] = useState(false)
    const navigate = useNavigate()
    

    const handleClickTshirt = () => {
        navigate(`/tshirt/${prop.tshirtinfo.name}`)
    }
    const handleHoverOverImg = (e) => {
        e.preventDefault()
        setHoverOver(true)
    }
    const handleStopHoverOverImg = (e) => {
        e.preventDefault()
        setHoverOver(false)
    }


    return (
        <ImageWithInfoDiv>
            <TshirtImg alt="Tshirt" src={prop.tshirtinfo.url} 
            onClick={handleClickTshirt}
            onMouseEnter={handleHoverOverImg}
            onMouseLeave={handleStopHoverOverImg}/>
            {/* {hoverOver &&  */}
            <OverImageDiv>
                <InfoTshirtDiv>
                <p>Price: ${prop.tshirtinfo.price}</p>
                <p>More info</p>
                <AddToCartButton tshirtinfo={prop.tshirtinfo}/>
                </InfoTshirtDiv>
            </OverImageDiv>
            
        </ImageWithInfoDiv>
    )
}

export default Tshirt