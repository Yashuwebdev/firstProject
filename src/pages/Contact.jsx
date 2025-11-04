import { useState } from "react"
import Hero from "../Components/Hero"
function Contact() {
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [contact, setContact] = useState("")
    let [message, setMessage] = useState("")
    let [services, setServices] = useState("")

    function hadelSubmit() {
        if (name == "") {
            return alert("Enter name ")
        }
        fetch("http://localhost:4001/api/contact", {
            method: "post",
            body: JSON.stringify({ name, email, contact, message, services }),
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

    return (
        <>
            <Hero text={"Contacts"}></Hero>
            <div className="mb-3">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55540.637387426395!2d74.98920695629018!3d29.537052574584038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39114db0893d723d%3A0xc51125be998c4f95!2sSirsa%2C%20Haryana!5e0!3m2!1sen!2sin!4v1757673899920!5m2!1sen!2sin" width="100%" height="450"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <h1 class="text-center"> <b> GET IN TOUCH</b></h1>
            <p class="text-center">A tale of a fateful trip that started from this tropic port aboard this tiny ship today stillers</p>
            <div class="container">
                <div class="row p-2 ">
                    <div class="col-md-5 p-5">
                        <img src="22.jpg" width={"130%"} />
                    </div>
                        <div class="col-md-6 p-5">
                    {/* <form> */}
                            <div class="row">
                                <div class="col-md-6  pt-5 m-0">
                                    <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" className="class-name mb-3" placeholder="name* "></input>
                                    <input value={contact} onChange={(e) => { setContact(e.target.value) }} type="number" className="class-name mb-3" placeholder="phone*"></input>
                                </div>
                                <div class="col-md-6  pt-5 m-0">
                                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" className="class-name mb-3" placeholder="Email*"></input>
                                    <input value={services} onChange={(e) => { setServices(e.target.value) }} type="text" className="class-name mb-3" placeholder="Choose Services?*"></input>
                                </div>
                                <textarea name="" id="" value={message} onChange={(e) => { setMessage(e.target.value) }} className="class-name mb-3" placeholder="Message*" ></textarea>
                                <button class="quotes quotess rounded " onClick={hadelSubmit}> 
                                    send message</button>
                            </div>
                    {/* </form> */}
                        </div>





                        
                </div>
            </div>
        </>

    )



}
export default Contact