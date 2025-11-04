import { useState } from "react"

function Footer() {
    let [a, setA] = useState(112)
    function addno() {
        setA(a + 1)
    }


    return (
        <>
            <div class="container2  py-5 ">
                <div class="container footer">
                    <div class="row">
                        <div class="col-md-3">
                            <h4 > <b>ABOUT OUR CONSULTING  </b></h4>
                            {/* <button onClick={addno}>add</button> */}
                            <p class="pt-3">That started from this tropic port aboard this tiny ship today still want by theam
                                government they survive on up to thetre east side to a deluxe as soldiers of artics fortune.</p>
                            <p> Any Queries : (+1) 234 567 900</p>

                        </div>

                        <div class="col-md-3 ">
                            <h4> <b>RECENT POST </b></h4>
                            <div class="mt-5 ">
                                <div class="row align-items-center">
                                    <div class="col-md-4 ">
                                        <img src="1.jpg" class = "img-hover" /></div>
                                    <div class="col-md-8">
                                        <p class="pl-2 pt-0">Till wanted by theam govern they survive as soldiers.</p>
                                        <span class="pl-2">feb 06,2018</span>

                                    </div>
                                    {/* <p class="input-name"></p> */}
                                    <hr />


                                </div>
                                <div class="row align-items-center">
                                    <div class="col-md-4 ">
                                        <img src="u.jpg" />
                                    </div>
                                    <div class="col-md-8">
                                        <p>world don't move to beat of just one drum.</p>
                                        <span class="pl-2">feb 06,2018 </span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-3 ">
                            <h4><b>SOLUTIONS</b></h4>
                            <ul type="circle" class="p-3">
                                <div class="p-2">
                                    <li >Travel And Aviation</li>
                                    <li>Travel And Aviation</li>
                                    <li>Travel And Aviation</li>
                                    <li>Travel And Aviation</li>
                                    <li>Travel And Aviation</li>
                                    <li>Travel And Aviation</li>
                                </div>
                            </ul>
                        </div>
                        <div class="col-md-3  ">
                            <h4><b>NEWSLETTER</b></h4>
                            <div class="p-4">
                                <input type="text" className="input-name" placeholder="name*"></input>

                                <input type="text" placeholder="email*" class="mt-3 input-name"></input>

                                <button class="quotes subscribe rounded"><b> SUBSCRIBE</b></button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>




        </>
    )
}
export default Footer 