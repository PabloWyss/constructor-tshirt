
import { useState } from "react"
import { motionApi } from "../../axios/api";
import { addUserInfo } from "../../redux/Slcies/userSlice"
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { LoginP  } from "./Login.styles";

const LogIn = () => {

    const [userEmail,setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("") 
    const [errorMessage, serErrorMessage] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    var config = {
        headers: {
            'content-Type' : 'application/json'
        }
    }

    const fetchData = async (obj) => {
        try {
            const response = await motionApi.post("backend/api/auth/token/",obj,config)
            dispatch(addUserInfo(response.data))
            localStorage.setItem('Token', response.data.access);
            localStorage.setItem('UserName', response.data.user.first_name);
            navigate(-1)
        } catch (err) {
            serErrorMessage("Please add a correct email and password")
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
            {errorMessage ?
            <LoginP>{errorMessage}</LoginP> :
            <p></p>}
            <form onSubmit={handleSubmitValue}>
                <div>
                    <label htmlFor="email" >Email</label>
                    <input type={"email"} value={userEmail} onChange={handleEmailValue}placeholder="email@email.com" id="email"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type={"password"} value={userPassword} onChange={handlePasswordValue} id="password"/>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>

    )

}
export default LogIn