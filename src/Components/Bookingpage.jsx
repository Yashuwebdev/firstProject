
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../Context/AuthContextProvider";
function Bookingpage() {
    let navi =  useNavigate()
    let {islogin } =  useContext(authContext)
    let [title, settitle] = useState("")
    let [selectservices,setselectservices] =useState("")
    let [name,setname]= useState("")
    let [email,setemail]= useState("")
    let [description, setdescription] = useState("")
   let [bookingdate , setbookingdate]=useState("")

  async  function getdatabyId(){
        let userId =  localStorage.getItem("userId")
        if (userId) {
            let res =  await fetch(`http://localhost:4001/api/getdatabyId/${userId}`, {method: "get",})
            let data =  await res.json()
            setname(data.name)
            setemail(data.email)

        }else{
           navi("/")
        }
    }
    useEffect(()=>{
        getdatabyId()
        
    }, [islogin])
    console.log(islogin);
    
    function submitBooking() {
       
        fetch("http://localhost:4001/api/Bookingpage", {
            method: "post",
            body: JSON.stringify({  title, selectservices, name, description ,bookingdate  , email}),
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
<div class="container bg-light ">
        <div className=" admin color-success "> 
            <h1 class="text-center ">Booking</h1>

            
               <select  value={selectservices} onChange={(e) => { setselectservices(e.target.value) }} className="class-name mb-3">
                    <option >SELECT SERVICES</option>
                            <option value ="Business Services">Business Services </option>
                            <option value="Financial Services">Financial Services</option>
                           
                        <option value="Travel and Aviation ">Travel and Aviation </option>
                        
                            <option value="Software Research">Software Research </option>
                          
                            <option value="Quality Resourcing">Quality Resourcing </option>
                                <option value="Consumer product">Consumer product </option>
                        </select>

                                                
            <input value={name} onChange={(e) => { setname(e.target.value) }} type="text" className="class-name mb-3 d-flex" placeholder="NAME"></input>
            <input value={email} disabled onChange={(e) => { setemail(e.target.value) }} type="text" className="class-name mb-3 d-flex" placeholder="Email"></input>

            <input value={title} onChange={(e) => { settitle(e.target.value) }} type="text" className=" class-name mb-3 d-flex" placeholder="TITLE"></input>
            <input value={description} onChange={(e) => { setdescription(e.target.value) }} type="text" className=" class-name mb-3 d-flex" placeholder="DESCRIPTION "></input>
            <input value={bookingdate} onChange={(e) => { setbookingdate(e.target.value) }} type="date" className="class-name mb-3 d-flex" placeholder="BOOKING DATE "></input>
            <button onClick={submitBooking} className=" quotes quotess text-center " > BOOK NOW</button>
        </div>
</div>

    )




}
export default Bookingpage
