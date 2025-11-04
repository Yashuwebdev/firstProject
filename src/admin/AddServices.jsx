
import React, { useState } from "react";
function AddServices() {
    let [imgPath, setImgPath] = useState("")
    let [title, settitle] = useState("")
    let [selectservices, setselectservices] = useState("")
    let [description, setdescription] = useState("")


    function submitServices() {
        if (imgPath == "") {
            return alert("add Images ! ")
        }
        fetch("http://localhost:4001/api/AddServices", {
            method: "post",
            body: JSON.stringify({ title, selectservices, description, imgPath }),
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

        <div className="col-md-7 p-5 mt-5 bg-info">
            <h1 class="text-center p-3">ADD SERVICES</h1>
            <input type="file" onChange={handleImage} className="text-primary p-1"/>
                <select  value={selectservices} onChange={(e) => { setselectservices(e.target.value) }} className="class-name mb-3">
                    <option >Select Services </option>
                            <option value ="Business Services">Business Services </option>
                            <option value="Financial Services">Financial Services</option>
                           
                        <option value="Travel and Aviation ">Travel and Aviation </option>
                        
                            <option value="Software Research">Software Research </option>
                          
                            <option value="Quality Resourcing">Quality Resourcing </option>
                                <option value="Consumer product">Consumer product </option>
                        </select>
            <input value={title} onChange={(e) => { settitle(e.target.value) }} type="text" className="class-name mb-3" placeholder="Title"></input >


            {/* <input value={selectservices} onChange={(e) => { setselectservices(e.target.value) }} type="select" className="class-name mb-3" placeholder="Select Services "/> */}
             
            <input value={description} onChange={(e) => { setdescription(e.target.value) }} type="text" className="class-name mb-3" placeholder="Description "></input>
            <button onClick={submitServices} className="quotes" > Add Services</button>
        </div>


    )




}
export default AddServices