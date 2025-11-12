import React, { useState } from "react";
import { useEffect } from "react";
import { BACKEND_API } from "../backendAPI";

function AllProduct() {
    let [ViewProduct, setViewProduct] = useState([])
    async function getProduct() {
        try {
            let res = await fetch(`${BACKEND_API}/api/ViewProduct`);
            let data = await res.json();
            console.log(data)
            setViewProduct(data.ViewProduct);
        }
        catch (error) {
            console.log(error);
        }
    }
    console.log(ViewProduct)
    useEffect(() => {
        getProduct()
    }, [])



    return <div className="col-md-12 table-success p-3 table-bordered table-border border-primary table-sm Color-Success">
        <h1 class="text-center p-2">VIEW PRODUCT</h1>
        <div className="container">
            <div className="row">
                {
                    ViewProduct.map((c, idx) => {
                        return (
                            <div class="card col-md-3">
                                <img src={c.imgPath} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{c.title}</h5>
                                    <h6> PRIZE : {c.prize}</h6>
                                    <p class="card-text">{c.description}</p>
                                    <button class="btn btn-primary">Add to cart </button>
                                </div>
                            </div>
                        )
                    }
                    )}
            </div>
        </div>




    </div>
}
export default AllProduct