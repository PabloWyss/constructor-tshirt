import { TshirtImg } from "./Tishirt.styles"

const Tshirt = (prop) => {

    console.log(prop.tshirtinfo.url)


    return (
        <div>
            <TshirtImg alt="Tshirt" src={prop.tshirtinfo.url}/>
        </div>
    )
}

export default Tshirt