import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { BACKEND_API } from "../backendAPI";

function MyOrder() {
    let [order, setOrder] = useState([])
    async function getOrder() {
        let userId = localStorage.getItem("userId");
        try {
            let res = await fetch(`${BACKEND_API}/api/MyOrder/${userId}`)
            let data = await res.json();
            console.log("API RESPONSE:", data);
            setOrder(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getOrder()
    }, [])
  

    return (
        <>
            {
                order.map((val, index) => {
                    return (
                        <div className="container my-4 p-4 border rounded bg-light shadow-sa" key={index}>
                            <h2 className="text-primary mb-3">ADDRESS</h2>
                            <div className="row">
                                <p><strong>Name:</strong> {val.address.name}</p>
                                <p><strong>Number:</strong> {val.address.number}</p>
                                <p><strong>Postal Code:</strong> {val.address.postalcode}</p>
                                <p><strong>State:</strong> {val.address.state}</p>
                                <p><strong>PaymentId:</strong> {val.paymentId}</p>
                                <p><strong>Payment Status:</strong> {val.paymentstatus}</p>
                                <p><strong>userId</strong> {val.address.userId}</p>
                            </div>
                            <div>
                                <div className="col-md-6">
                                    <p><strong>Totalamount:</strong> {val.totalamount}</p>
                                    <p><strong>Street No.:</strong> {val.address.streetno}</p>
                                    <p><strong>City:</strong> {val.address.city}</p>
                                    <p><strong>Country</strong> {val.address.country}</p>
                                    <p><strong>Last Name:</strong> {val.address.lastname}</p>
                                    <p><strong>Prize</strong> {val.totalAmount}</p>
                                </div>

                            </div>


                        </div>
                    );
                })
            }
        </>

    )
}

export default MyOrder
