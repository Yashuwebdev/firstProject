let express = require("express")
let cors = require("cors")
let mongoose = require("mongoose")
let app = express()
let bcrypt = require("bcrypt")
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("server Start")
})
let contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    message: {
        type: String,
    },
    contact: {
        type: String,
    },
    services: {
        type: String,
    }
})
let Contact = mongoose.model("Contact", contactSchema);

app.post("/api/contact", async (req, res) => {
    let data = req.body
    console.log(data);

    try {
        await Contact.create(data)
        res.status(200).json({ mes: "data save !" })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ mes: "server error !" })
    }
})

let AddBlogSchema = mongoose.Schema({

    imgPath: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    postby: {
        type: String,
    },
    poston: {
        type: String,
    },
    description: {
        type: String,
    }

})
let AddBlog = mongoose.model("AddBlog", AddBlogSchema);

app.post("/api/AddBlog", async (req, res) => {
    let data = req.body
    console.log((data));

    try {
        await AddBlog.create(data)
        res.status(200).json({ mes: "data save !" })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ mes: "server error !" })
    }
})


let AddServicesSchema = mongoose.Schema({
    imgPath: {
        type: String,
    },

    title: {
        type: String,
        required: true,
    },

    selectservices: {
        type: String,
    },
    description: {
        type: String,
    }

})


let AddServices = mongoose.model("AddServices", AddServicesSchema);

app.post("/api/AddServices", async (req, res) => {
    let data = req.body
    console.log((data));
    try {
        await AddServices.create(data)
        res.status(200).json({ mes: "data save !" })


    }
    catch (error) {
        console.log(error)
        res.status(500).json({ mes: "server error !" })
    }
})







app.get("/api/allContact", async (req, res) => {
    // console.log("hello")
    try {
        let allContact = await Contact.find()
        res.status(200).json({ allContact })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Server Start" })

    }
}
)

app.delete("/api/deleteContact/:id", async (req, res) => {
    let _id = req.params.id;
    try {
        await Contact.findOneAndDelete({ _id });
        res.status(200).json({ msg: "Delete Contact !" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ mes: "Server Error" });
    }

})




app.get("/api/ViewBlog", async (req, res) => {
    // console.log("hello")
    try {
        let ViewBlog = await AddBlog.find()
        res.status(200).json({ ViewBlog })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Server Start" })

    }
}
)

app.delete("/api/deleteBlog/:id", async (req, res) => {
    let _id = req.params.id;
    try {
        await AddBlog.findOneAndDelete({ _id });
        res.status(200).json({ msg: "Delete Blog !" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ mes: "Server Error" });
    }
})


app.get("/api/ViewServices", async (req, res) => {

    try {
        let ViewServices = await AddServices.find()
        res.status(200).json({ ViewServices })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Server Start" })

    }
}
)

app.delete("/api/deleteServices/:id", async (req, res) => {
    let _id = req.params.id;
    try {
        await AddServices.findOneAndDelete({ _id });
        res.status(200).json({ msg: "Delete Service !" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ mes: "Server Error" });
    }
})


let bookingpageSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,

    },

    email: {
        type: String,
    },

    title: {
        type: String,
    },
    bookingdate: {
        type: String,
    },
    selectservices: {
        type: String,
    },
    description: {
        type: String,
    }

})
let bookingpage = mongoose.model("bookingpage", bookingpageSchema);

app.post("/api/bookingpage", async (req, res) => {
    let data = req.body
    console.log((data));

    try {
        await bookingpage.create(data)
        res.status(200).json({ mes: "data save !" })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ mes: "server error !" })
    }
})


app.get("/api/ViewBooking", async (req, res) => {
    // console.log("hello")
    try {
        let ViewBooking = await bookingpage.find()
        res.status(200).json({ ViewBooking })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Server Start" })

    }
}
)
app.delete("/api/deleteBooking/:id", async (req, res) => {
    let _id = req.params.id;
    try {
        await bookingpage.findOneAndDelete({ _id });
        res.status(200).json({ msg: "Delete Booking !" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ mes: "Server Error" });
    }
})

let SignSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },

})
let Sign = mongoose.model("Sign", SignSchema);
app.post("/api/sign", async (req, res) => {
    let data = req.body


    try {
        let salt = await bcrypt.genSalt()
        let newpassword = await bcrypt.hash(data.password, salt)
        data.password = newpassword
        await Sign.create(data)
        res.status(200).json({ mes: "data save !" })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ mes: "server error !" })
    }
})



app.post("/api/Login", async (req, res) => {
    let data = req.body


    try {
        let find = await Sign.findOne({ email: data.email })
        if (!find) {
            return res.status(400).json({ mes: "Email not found  !" })
        }
        let match = await bcrypt.compare(data.password, find.password)
        if (!match) {
            return res.status(400).json({ mes: "Email not found  !" })
        }
        res.status(200).json({ mes: " LOGIN ", find })
    } catch (error) {

        console.log(error);
        res.status(500).json({ mes: "server error !" })
    }


})

app.get("/api/getdatabyId/:id", async (req, res) => {
    try {
        let userId = req.params.id
        let data = await Sign.findOne({ _id: userId })
        console.log(data);
        res.status(200).json({ name: data.name, email: data.email })

    } catch (error) {
        console.log(error);
        res.status(500).json({ mes: "server error !" })
    }
})

app.get("/api/getno", async (req, res) => {
    try {
        let blogno = await AddBlog.countDocuments()
        let servicesno = await AddServices.countDocuments()
        let bookingno = await bookingpage.countDocuments()

        res.status(200).json({ blogno, servicesno, bookingno })
    } catch (error) {
        console.log(error);
        res.status(500).json({ mes: "server error !" })
    }
})


app.get("/getdatabyId/:id", async (req, res) => {
    let _id = req.params.id
    try {
        let blog = await AddBlog.findOne({ _id })
        res.status(200).json(blog)
    } catch (error) {
        console.log(error);
        res.status(500).json({ mes: "server error !" })
    }
})

app.put("/api/Blogupdate/:id" , async (req ,res) => {
    try {
       let _id =   req.params.id
       let data =  req.body
    
        await AddBlog.findOneAndUpdate({_id},data  )
       res.status(200).json({msg : "blog Update"})
        
    } catch (error) {
         console.log(error);
        res.status(500).json({ mes: "server error !" })
    }
})

mongoose.connect("mongodb://127.0.0.1:27017/project")
    .then(() => {
        app.listen(4001, () => {
            console.log("server start !");
        });
    })

    .catch((error) => {
        console.log(error)

    })