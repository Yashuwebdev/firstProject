import React, { use, useEffect, useState } from "react";
import { BACKEND_API } from "../backendAPI";

function Dashboard() { 
let  [dataCount , setDataCount] = useState({})
  useEffect(()=>{
      fetch(`${BACKEND_API}/api/getno`)
      .then((res) =>  res.json())
      .then(data =>setDataCount(data))
      .catch(error => console.log(error))
  } , [])
  return (
    <div class="col-md-8 p-3 mt-4  ">
      <h1 class="text-center">DASHBOARD</h1>
      <div class="container my-5 ">
        <div className="row gap-4">
        <div class="col card text-center">
          <h3 class="">BLOGS</h3>
          <h1>{dataCount.blogno}</h1>
        </div>
        <div class="col card text-center ">
          <h3 class="">SERVICES</h3>
           <h1>{dataCount.servicesno}</h1>
        </div>
        <div class="col card text-center">
          <h3 >BOOKINGS</h3>
           <h1>{dataCount.bookingno}</h1>
        </div>
        </div>  
      </div>
    </div>
  )
}
export default Dashboard
