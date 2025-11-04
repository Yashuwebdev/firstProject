 import { useState , useEffect } from "react"
 import { useParams } from "react-router-dom"
function BlogUpdate(){
    
     let [imgPath, setImgPath] = useState("")
        let [title, settitle] = useState("")
        let [postby, setpostby] = useState("")
        let [poston, setposton] = useState("")
        let [description, setdescription] = useState("")
    
    let id = useParams().id

    async function getdataById() {
        try {
            let res = await fetch(`http://localhost:4001/getdatabyId/${id}`)
            let data = await res.json()
            setImgPath(data.imgPath);
            setpostby(data.postby)
            setdescription(data.description)
            settitle(data.title)
            setposton(data.poston)
            
            // setBlog(data);
        } catch (error) {
            console.log(error);

        }


    }

    useEffect(() => {
        getdataById()
    }, [])

        function submitBlog() {
            if (imgPath == "") {
                return alert("add Images ! ")
            }
            fetch("http://localhost:4001/api/Blogupdate/"+ id, {
                method: "put",
                body: JSON.stringify({ imgPath, title, postby, poston, description}),
                headers: {
                    "content-type": "application/json",
                },
            })
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    alert(data.msg);
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
    return(
        <div className="col-md-8">
        
        <h1 class="text-center p-2"> BLOGS Update</h1>
            <input type="file" onChange={handleImage} className="text-primary" />
            <input value={title} onChange={(e) => { settitle(e.target.value) }} type="text" className="class-name mb-3" placeholder="Title"></input >
            <input value={postby} onChange={(e) => { setpostby(e.target.value) }} type="text" className="class-name mb-3" placeholder="Post by"></input>
            <input value={poston} onChange={(e) => { setposton(e.target.value) }} type="date" className="class-name mb-3" placeholder="Post on "></input>
            <input value={description} onChange={(e) => { setdescription(e.target.value) }} type="text" className="class-name mb-3" placeholder="Description "></input>
            <button onClick={submitBlog} className="quotes" >  Blog update</button>

        </div >
    )
}
export default BlogUpdate