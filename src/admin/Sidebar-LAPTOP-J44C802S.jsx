import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <>

      <div className="col-md-4 p-5 ">
        <ul>
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

            <Link to={"AddBlog"}> AddBlogs</Link>
          
          </h5> <h5 className=" p-2">
            <i class="fa-solid fa-bars"></i>
            <Link to={"ViewAddBlog"}> ViewBlog </Link>
           
          </h5> <h5 className=" p-2">
            <i class="fa-regular fa-file-lines"></i>
            <Link to={"AddServices"}> AddServices</Link>
          
          </h5> <h5 className=" p-2">
            <i class="fa-solid fa-bars"></i>
            <Link to={"viewServices"}> ViewServices </Link>
          

          </h5> <h5 className=" p-2">

            <i class="fa-regular fa-file-lines"></i>
            <Link to={"Login"}> Login       </Link>
        
          </h5>
        </ul>

      </div>

    </>


  )
}
export default Sidebar