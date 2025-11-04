import { useState } from "react"

function Signup() {
    let [name, setname] = useState("")
    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")
        let [showpassword, setShowPassword ] = useState(false)
    function handelsignup() {
        fetch("http://localhost:4001/api/sign", {
            method: "post",
            body: JSON.stringify({ name, email, password }),
            headers: {
                "content-type": "application/json",
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }




    return (
        <>

            <div class="container bg-light">
                <div class="admin">

                    <input value={name} onChange={(e) => { setname(e.target.value) }} type="text" className=" class-name mb-3 " placeholder="NAME "></input>
                   <input value={email} onChange={(e) => { setemail(e.target.value) }} type="text" className=" class-name mb-3 " placeholder="EMAIL "></input>
                      <div className="d-flex">

                    <input value={password} onChange={(e) => { setpassword(e.target.value) }}  type={showpassword ? "text" : "password"} className=" class-name mb-3" placeholder="PASSWORD "></input>
                      <span  className ="mt-4 ml-5" onClick={()=>{
                       setShowPassword(!showpassword) 
                    }}>
                        {
                            showpassword ? <><i class='fa-regular fa-eye'></i> </>  :<> <i class="fa-regular fa-eye-slash"></i> </>
                        }
                         
                    </span>
                  </div>
                    <button class="quotes quotess rounded mr-0  align-items-center " onClick={handelsignup}>SIGNUP</button>
                </div>
            </div>

        </>
    )
}

export default Signup