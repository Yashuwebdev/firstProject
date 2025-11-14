
import React, { useState } from "react";
import { BACKEND_API } from "../backendAPI";

function AddProduct() {
    let [imgPath, setImgPath] = useState("")
    let [Itemname, setItemname] = useState("")
    let [prize, setprize] = useState("")
   
    let [description, setdescription] = useState("")


    function submitProduct() {
        if (imgPath == "") {
            return alert("add Images ! ")
        }
        fetch(`${BACKEND_API}/api/AddProduct`, {
            method: "post",
            body: JSON.stringify({ imgPath, title, prize,  description }),
            headers: {
                "content-type": "application/json",
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    async function handleImage(e) {
        try {
            let img = e.target.files[0];
            let form = new FormData();
            form.append("file", img);
            form.append("upload_preset", "images");
            let res = await fetch("https://api.cloudinary.com/v1_1/df1pxdkxi/image/upload", {
                method: "post",
                body: form
            })
            let data = await res.json();
            console.log(data);
            
            setImgPath(data.secure_url);
        } catch (error) {
            console.log(error);
        }

    }

    return (

        <div className="col-md-8 p-5 mt-5  bg-info"> 
            <h1 class="text-center p-2">ADD PRODUCTS</h1>
            <input type="file" onChange={handleImage} className="text-primary" />
            <input value={Itemname} onChange={(e) => { setItemname(e.target.value) }} type="text" className="class-name mb-3" placeholder="Item name "></input >
            <input value={prize} onChange={(e) => { setprize(e.target.value) }} type="number" className="class-name mb-3" placeholder="price"></input>
            <input value={description} onChange={(e) => { setdescription(e.target.value) }} type="text" className="class-name mb-3" placeholder="Description "></input>
            <button onClick={submitProduct} className="quotes" > Add Product</button>
        </div>


    )




}
export default AddProduct
