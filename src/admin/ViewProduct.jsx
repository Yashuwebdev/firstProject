import React, { useState } from "react";
import { useEffect } from "react";
import { BACKEND_API } from "../backendAPI";

function ViewProduct() {
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

    async function deleteProduct(id) {
        try {
            let res = await fetch(`${BACKEND_API}/api/deleteProduct/${id}`, {
                method: "delete",
            });
            let data = await res.json();
            if (res.ok) {
                alert(data.msg)
                getProduct()
            
                
            }
        } catch (error) {
            console.log(error);
        }
    }
   
          return <div className="col-md-8 table-success  table-bordered table-border border-primary table-sm Color-Success">
         <h1 class="text-center p-2">VIEW PRODUCT</h1>
        <table className="table table-success ">
            <tr>
                <th>Sr.No.</th> 
                <th>Img</th>
                
                <th>title</th>
              
                
            
             
              <th>prize</th>
                <th>Active</th>
            </tr>
            {
                ViewProduct.map((c, idx) => {
                    return (<tr>
                        <td>{idx + 1}</td>
                         <td> <img src={c.imgPath}  width={100} alt="" /> </td>
                        
                        <td>{c.title}</td>
                       <td>{c.prize}</td>
                        
                        <td>{c.description}</td>
                        <td><button onClick={() => {
                            deleteProduct(c._id);
                        }}> Delete </button>
                        </td>

                    </tr>
                    )
                }

                )}
        </table>

    </div>
}
export default ViewProduct