
import { Link } from "react-router-dom";
import Hero from "../Components/Hero"
import { useState, useEffect } from "react";
function Blog() {
    let [ViewBlog, setViewBlog] = useState([])
    async function getBlog() {
        try {
            let res = await fetch("http://localhost:4001/api/ViewBlog");
            let data = await res.json();
            console.log(data)
            setViewBlog(data.ViewBlog);

        }
        catch (error) {
            console.log(error);
        }
    }
    console.log(ViewBlog)
    useEffect(() => {
        getBlog()
    }, [])
    return (
        <>
            <Hero text={"BLOG"}></Hero>

            <div class="container">

                <div class="row ">
                    <div class="col-md-12 p-3 pt-5 mt-3">

                        <div className="row">
                            {
                                ViewBlog.map((blog) => {
                                    return (
                                        <div class="col-md-4 card">
                                            <img src={blog.imgPath} class="card-img-top img-hover"  />
                                            <div class="card-body">
                                                <h5 class="card-postby">{blog.postby}</h5>
                                                <h5 class="card-title">{blog.title}</h5>
                                                <p class="card-text">{blog.description.slice(0 ,50)}...</p>
                                                <p class="card-poston">{blog.poston}</p>
                                                <Link to={`/blog/${blog._id}`} class="btn btn-primary">Go somewhere</Link>
                                            </div>
                                        </div>




                                    )
                                })
                            }
                        </div>


                    </div>
                    {/* <div class="col-md-4 p-3 pt-5 mt-3">
                        <input type="text" className="input-name" placeholder="search "></input>
                        <h4 class="p-2 ml-4">Categories</h4>
                        <ul type="circle">
                            <li>Travel and Aviation</li>
                            <li> Business Services </li>
                            <li>Consumer Products</li>
                            <li>financial Services</li>
                            <li>Software Research </li>

                            <h4 class="p-2"> Recent Posts</h4>
                            <div class="row">
                                <div class="col-md-3 p-2 ">
                                    <img src="6.jpg"></img>
                                </div>
                                <div class="col-md-6 ">
                                    <p> World don't move to beat of just one drum. </p>
                                    <p>5 minutes ago</p>
                                </div>
                                <div class="smaldiv"></div>
                            </div>
                            <div class="row">
                                <div class="col-md-3 p-2">
                                    <img src="7.jpg"></img>
                                </div>
                                <div class="col-md-6">
                                    <p> Be right for you may not be right for some. </p>
                                    <p>2 days ago</p>
                                </div>
                                <div class="smaldiv"></div>
                                <div class="row">
                                    <div class="col-md-3 p-2">
                                        <img src="8.jpg"></img>
                                    </div>
                                    <div class="col-md-6">
                                        <p> World don't move to beat of just one drum. </p>
                                        <p>1 month ago</p>
                                    </div>
                                    <div class="smaldiv"></div>
                                </div>


                            </div>
                        </ul>

                    </div> */}
                </div>

            </div>
        </>
    )
}
export default Blog 