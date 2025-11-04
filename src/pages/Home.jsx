import Oursoltution from "../Components/Oursolution"
import Services from "../Components/Services"
import Latestnews from "../Components/Latestnews"
import Contact from "./Contact"
import Hero from "../Components/Hero"
import { useEffect, useState } from "react"
// import Adminlogin from "../Components/adminlogin"


function Home() {
    let [count, setCount] = useState(0)
    let [dataCount, setDataCount] = useState({blogno : 10})

    useEffect(() => {
        fetch("http://localhost:4001/api/getno")
            .then((res) => res.json())
            .then(data => setDataCount(data))
            .catch(error => console.log(error))

        if (dataCount.blogno) {
            setTimeout(() => {
                if (count < dataCount?.blogno) {
                    setCount(count + 1)
                }
            }, 100)
        }
    }, [count])

    return (
        <>
            <Hero text={"HOME"}></Hero>
            <div class="picture d-flex  align-items-center  justify-content-left  position-relative">
                <div>
                    <h5 class="content " >The government they survive artical of fortune </h5>
                    <h1 class="bold"> <b> HIGH-QUALITY MARKET EXPERIENCES</b></h1>
                    <button class="btn  m-left-70px "><b>ABOUT US {count}</b> </button>
                </div>
            </div>
            <div className="container1" >
                <div className="container p-5 m-3 ">
                    <div className="row">
                        <div className="col-md-5">
                            <h1>Provide solutions for the realiable growth</h1>
                        </div>
                        <div className="col-md-6">
                            <h6 class="p-4">A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by the government they survive
                                as soldiers of fortune to ever wondered the east side to a deluxe apartment.</h6>
                        </div>
                        <div className="col-md-1">
                            <button class="btn2 rounded quotess mb-2">FREE QUOTES</button>
                        </div>
                    </div>
                </div>
            </div>
            <Oursoltution></Oursoltution>
            {/* <Services></Services> */}
            <div className="text-center p-5 backgroundimage">
                <h1 class="provide"><b> We provide high quality services & innovative
                    <br />solutions for the realiable growth </b></h1>
                <div class=""> <button class="quotes rounded">  <b> GET A QUOTES </b></button>  </div>
            </div>

            <Latestnews></Latestnews>



            {/* <Contact></Contact> */}




        </>
    )
}
export default Home