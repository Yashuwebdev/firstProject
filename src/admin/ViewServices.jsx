import React, { useState } from "react";
import { useEffect } from "react";
function ViewServices() {
    let [ViewServices, setViewServices] = useState([])
    async function getServices() {
        try {
            let res = await fetch("http://localhost:4001/api/ViewServices");
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

    async function deleteServices(id) {
        try {
            let res = await fetch(`http://localhost:4001/api/deleteServices/${id}`, {
                method: "delete",
            });
            let data = await res.json();
            if (res.ok) {
                alert(data.msg)
                getServices()
            
                
            }
        } catch (error) {
            console.log(error);
        }
    }
    // return <>hello</>
          return <div className="col-md-8 table-success  table-bordered table-border border-primary table-sm Color-Success">
         <h1 class="text-center p-2">VIEW SERVICES</h1>
        <table className="table table-success ">
            <tr>
                <th>Sr.No.</th> 
                <th>Img</th>
                  <th>Select Services</th>
                <th>title</th>
              
                
            
             
              <th>description</th>
                <th>Active</th>
            </tr>
            {
                ViewServices.map((c, idx) => {
                    return (<tr>
                        <td>{idx + 1}</td>
                         <td> <img src={c.imgPath}  width={100} alt="" /> </td>
                        <td>{c.selectservices}</td>
                        <td>{c.title}</td>
                       
                        
                        <td>{c.description}</td>
                        <td><button onClick={() => {
                            deleteServices(c._id);
                        }}> Delete </button>
                        </td>

                    </tr>
                    )
                }

                )}
        </table>

    </div>
}
export default ViewServices