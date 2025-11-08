import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
      <div className="col-md-4 p-2 mt-5 fixe  " >
        <ul>
          <h5 className=" p-2 pt-5 " >
            <i class="fa-solid fa-grip"></i>
            <Link to={""}>  DASHBOARD</Link>

          </h5>
             <h5 className=" p-2 pt-5 " >
            <i class="fa-solid fa-grip"></i>
            <Link to={"../Contact"}>  Contact</Link>

          </h5>
          <h5 className=" p-2"   >
            <i class="fa-regular fa-user"></i>
            <Link to={"ViewContact"}> ViewContacts</Link>
          
          </h5>
          <h5 className=" p-2">

            <i class="fa-regular fa-circle-xmark  pl-4 " ></i>

            <Link to={"Addblog"}> AddBlog</Link>
          
          </h5> <h5 className=" p-2">
            <i class="fa-solid fa-bars"></i>
            <Link to={"ViewBookings"}> Viewbookings </Link>
           
          </h5> <h5 className=" p-2">
            <i class="fa-regular fa-file-lines"></i>
            <Link to={"viewAddblog"}> Viewblog</Link>
          
          </h5> <h5 className=" p-2">
            <i class="fa-solid fa-bars"></i>
            <Link to={"AddServices"}> AddServices </Link>
          

          </h5> <h5 className=" p-2">

            <i class="fa-regular fa-file-lines"></i>
            <Link to={"ViewServices"}> ViewServices        </Link>
        
          </h5>
        </ul>

      </div>

  


  )
}
export default Sidebar