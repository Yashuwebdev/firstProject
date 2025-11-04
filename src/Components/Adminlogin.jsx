import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Adminlogin() {
    let [Username, setuserName] = useState("")
    let [password, setpassword] = useState("")
    let [showpassword, setShowPassword ] = useState(false)
   let  navigate =  useNavigate()
  

    function handelAdminLogin() {
            if (Username === "admin" && password ==="1234") {
                alert("adminLogin !") 
                navigate("/admin")
            }else{
                alert(" password or username Wrong !")
            }
    }
    


    return (
        <>

            <div class="container bg-light">
                <div class="admin ">
                    <label for ="pass"></label>
                    <input value={Username} onChange={(e) => { setuserName(e.target.value) }} type="text" className=" class-name  mb-3" id="pass" placeholder="USERNAME "></input>
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
                    <button class="quotes quotess rounded mr-0  align-items-center " onClick={handelAdminLogin}>Admin login</button>
                </div>
            </div>

        </>
    )
}

export default Adminlogin














