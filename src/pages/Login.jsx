import { useState  , useContext} from "react"
import { useNavigate } from "react-router-dom"
import { authContext } from "../Context/AuthContextProvider"
import { BACKEND_API } from "../backendAPI"
function Login() {
    let [email, setEmail] = useState("")
    let [password, setpassword] = useState("")
    let navigate = useNavigate()
  let {setIslogin} =   useContext(authContext)
   let [showpassword, setShowPassword ] = useState(false)
    async function handelLogin() {
    
        if (email.trim() == "") {
             alert("Enter Email or password !")
             return
        }


        let res = await fetch(`${BACKEND_API}/api/Login`, {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                "content-type": "application/json",
            },
        })
        let data = await res.json()
        if (res.ok) {
            alert(data.mes)
            localStorage.setItem("userId",data.find._id)
            setIslogin(true)
        } else {
            console.log(data);
            alert(data.mes)
        }
    }
    

    return (
        

            <div class="container bg-light">
                <div class="admin">
                    

                   
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" className=" class-name mb-3 " placeholder="Enter Email "></input>
                   <div className="d-flex">
                   
                    <input value={password} onChange={(e) => { setpassword(e.target.value) }} type={showpassword ? "text" : "password"} className=" class-name mb-3" placeholder="PASSWORD "></input>
                       <span  className ="mt-4 ml-5" onClick={()=>{
                       setShowPassword(!showpassword) 
                    }}>
                        {
                            showpassword ? <><i class='fa-regular fa-eye'></i> </>  :<> <i class="fa-regular fa-eye-slash"></i> </>
                        }
                         
                    </span>
                   </div>
                    <button class="quotes quotess rounded mr-0  align-items-center " onClick={handelLogin}>login</button>
                </div>
            

        </div>
    )
}

export default Login