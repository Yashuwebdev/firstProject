
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function BlogDetails() {

    let [blog, setBlog] = useState({})
    let id = useParams().idx

    async function getdataById() {
        try {
            let res = await fetch(`http://localhost:4001/getdatabyId/${id}`)
            let data = await res.json()
            setBlog(data);
        } catch (error) {
            console.log(error);

        }


    }

    useEffect(() => {
        getdataById()
    }, [])

    return (
        <>
            <div className="container " >
                <div className="row p-4">
                    <div className="col-md-4">

                    <img src={blog.imgPath} alt="" style={{ height: "200px", width: "300px" }} />
                    <p class="card-poston">{blog.poston}</p>

                    <h5 class="card-postby">{blog.postby}</h5>
                    <h5 class="card-title">{blog.title}</h5>
                    </div>
                    <div className="col-md-8">
                        <p class="card-text">{blog.description}</p>
                    </div>



                </div>
            </div>

        </>
    )
}
export default BlogDetails