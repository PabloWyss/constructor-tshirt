
import { useState } from "react"
import { motionApi } from "../../axios/api";
import { addUserInfo } from "../../redux/Slcies/userSlice"
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom"

const LogIn = () => {

    const [userEmail,setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("") 
    const dispatch = useDispatch()
    const navigate = useNavigate()

    var config = {
        headers: {
            'content-Type' : 'application/json'
        }
    }

    const fetchData = async (obj) => {
        const response = await motionApi.post("backend/api/auth/token/",obj,config)
        try {
            dispatch(addUserInfo(response.data))
            navigate("/home")
          } catch (err) {
            alert("Hola")
            console.log("hola")
          } 
    }

    const handleEmailValue = (e) => {
        e.preventDefault()
        setUserEmail(e.target.value)
    }
    const handlePasswordValue = (e) => {
        e.preventDefault()
        setUserPassword(e.target.value)
        
    }
    const handleSubmitValue = (e) => {
        e.preventDefault()
        const userToGetToken = {
        
            "email": userEmail,
            "password": userPassword
            
        }

        fetchData(userToGetToken)
        
    }


    return (
        <div>
            <form onSubmit={handleSubmitValue}>
                <label htmlFor="email" >Email</label>
                <input type={"email"} value={userEmail} onChange={handleEmailValue}placeholder="email@email.com" id="email"/>
                <label htmlFor="password">Password</label>
                <input type={"password"} value={userPassword} onChange={handlePasswordValue} id="password"/>
                <button type="submit">Submit</button>
            </form>
        </div>

    )

}
export default LogIn