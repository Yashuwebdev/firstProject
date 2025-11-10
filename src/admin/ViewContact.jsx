import React, { useState } from "react";
import { useEffect } from "react";
import { BACKEND_API } from "../backendAPI";

function ViewContact() {
    let [allContact, setAllContact] = useState([])
    async function getContact() {
        try {
            let res = await fetch(`${BACKEND_API}/api/allContact`);
            let data = await res.json();
            console.log(data)
            setAllContact(data.allContact);

        }
        catch (error) {
            console.log(error);
        }
    }
    console.log(allContact)
    useEffect(() => {
        getContact()
    }, [])

    async function deleteContact(id) {
        try {
            let res = await fetch(`${BACKEND_API}/api/deleteContact/${id}`, {
                method: "delete",
            });
            let data = await res.json();
            if (res.ok) {
                alert(data.msg)
                getContact()
            }
        } catch (error) {
            console.log(error);
        }
    }



    return <div className="col-md-8">
    
        <table className="table ">
            <tr>
                <th>Sr.No.</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Message</th>
                <th>Email</th>
                <th>Active</th>
            </tr>
            {
                allContact.map((c, idx) => {
                    return (<tr>
                        <td>{idx + 1}</td>
                        <td>{c.name}</td>
                        <td>{c.contact}</td>
                        <td>{c.message}</td>
                        <td>{c.email}</td>
                        <td><button onClick={() => {
                            deleteContact(c._id);
                        }}> Delete </button>
                        </td>

                    </tr>
                    )
                }

                )}
        </table>

    </div>

}
export default ViewContact