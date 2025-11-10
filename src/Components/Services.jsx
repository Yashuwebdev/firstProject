import { useState, useEffect } from "react"
import { BACKEND_API } from "../backendAPI";


function Services() {
    let [ViewServices, setViewServices] = useState([])
    async function getServices() {
        try {
            let res = await fetch(`${BACKEND_API}/api/ViewServices`);
            let data = await res.json();
            console.log(data)
            setViewServices(data.ViewServices);

        }
        catch (error) {
            console.log(error);
        }
    }
    console.log(ViewServices)
    useEffect(() => {
        getServices()
    }, [])
    return (
        <>
            <h1 class="p-5"> <center><b>OUR SERVICES</b></center></h1>

            <div className="container">
                <div className="row">
                    {
                        ViewServices.map((blog, idx) => {
                            return (
                                <div class="col-md-4 card">
                                            <img src={blog.imgPath} class="card-img-top"  style={{height : "200px"}}  />
                                            <div class="card-body">
                                                <h5 class="card-postby">{blog.selectservices}</h5>
                                                <h5 class="card-title">{blog.title}</h5>
                                                <p class="card-text">{blog.description.slice(0 ,50)}...</p>
                                                <p class="card-poston">{blog.poston}</p>
                                               
                                            </div>
                                        </div>
                                // <div key={idx} className="col-md-4 text-center p-4">
                                //     <img src={val.imgPath} width={"100%"} alt="" />
                                //     <h1>{val.selectservices}</h1>
                                //     <h3 >{val.title}</h3>
                                //     <p>{val.description}</p>
                                // </div>
                            )
                        })
                    }
                </div>
            </div>


        </>
    )
}
export default Services