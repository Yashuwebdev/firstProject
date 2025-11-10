import React, { useState } from "react";
import { useEffect } from "react";
import { BACKEND_API } from "../backendAPI";

function ViewBookings() {
    let [ViewBooking, setViewBooking] = useState([])
    async function getBooking() {
        try {
            let res = await fetch(`${BACKEND_API}/api/ViewBooking`);
            let data = await res.json();
            console.log(data)
            setViewBooking(data.ViewBooking);

        }
        catch (error) {
            console.log(error);
        }
    }
    console.log(ViewBooking)
    useEffect(() => {
        getBooking() 
    }, [])

    async function deleteBooking(id) {
        try {
            let res = await fetch(`${BACKEND_API}/api/deleteBooking/${id}`, {
                method: "delete",
            });
            let data = await res.json();
            if (res.ok) {
                alert(data.msg)
                getBooking()
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    return <div className="col-md-8 p-3 table-success  table-bordered table-border border-primary 
    table-sm Color-Success ">
        <h1 class="text-center p-2">VIEW BOOKING</h1>

        <table className="table table-success ">
            <tr>
                <th>SR.NO.</th>
                <th>NAME</th>
                <th>EMAIL</th>

                <th>TITLE</th>
                <th>DESCRIPTION</th>
                <th>BOOKING DATE</th>
                
                <th>ACTIVE</th>
            </tr>
            {
                ViewBooking.map((c, idx) => {
                    return (<tr>
                        <td>{idx + 1}</td>
                        <td>{c.name}</td>
                        <td>{c.email}</td>

                        <td>{c.title}</td>
                        <td>{c.description}</td>
                        <td>{c.bookingdate}</td>
                        
                        <td><button className="btn btn-danger" onClick={() => {
                            deleteBooking(c._id);
                        }}> Delete </button>
                        </td>

                    </tr>
                    )
                }

                )}
        </table>

    </div>
}
export default ViewBookings