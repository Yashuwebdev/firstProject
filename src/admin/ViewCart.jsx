import { useState, useEffect } from "react"
import { BACKEND_API } from "../backendAPI";


function Viewcart() {
    let [Viewcart, setViewcart] = useState([])
    async function getcart() {
        try {
            let res = await fetch(`${BACKEND_API}/api/Viewcart`);
            let data = await res.json();
            console.log(data)
            setViewcart(data.Viewcart);

        }
        catch (error) {
            console.log(error);
        }
    }
    console.log(Viewcart)
    useEffect(() => {
        getServices()
    }, [])
    return (
        <>
            <h1 class="p-5"> <center><b> MY CART</b></center></h1>

            <div className="container">
                <div className="row">
                    {
                        Viewcart.map((cart, idx) => {
                            return (
                                <div class="col-md-4 card">
                                            <img src={cart.imgPath} class="card-img-top"  style={{height : "200px"}}  />
                                            <div class="card-body">
                                    
                                                <h5 class="card-Itemname">{cart.Itemname}</h5>
                                                <p class="card-text">{cart.description.slice(0 ,50)}...</p>
                                                <p class="card-prize">{cart.prize}</p>
                                               
                                            </div>
                                        </div>
                              
                            )
                        })
                    }
                </div>
            </div>


        </>
    )
}
export default Viewcart