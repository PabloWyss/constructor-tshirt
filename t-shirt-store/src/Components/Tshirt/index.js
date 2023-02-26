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
        <ImageWithInfoDiv onMouseLeave={handleStopHoverOverImg}>
            <TshirtImg alt="Tshirt" src={prop.tshirtinfo.url} 
            onClick={handleClickTshirt}
            onMouseEnter={handleHoverOverImg}
            />
            {hoverOver && 
            <OverImageDiv>
                <InfoTshirtDiv onClick={handleClickTshirt}>
                <p>More Info:</p>
                </InfoTshirtDiv>
            </OverImageDiv>}
            <AddToCartButton tshirtinfo={prop.tshirtinfo}/>
        </ImageWithInfoDiv>
    )
}

export default Tshirt