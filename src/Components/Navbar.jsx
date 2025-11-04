import { Link } from "react-router-dom"
import { useContext } from "react";
import { authContext } from "../Context/AuthContextProvider"
function Navbar() {

    let { islogin, setIslogin } = useContext(authContext)
    return (
        <>
            <div class="navBack ">
                <div class="container p-2 a ">
                    <div class="d-flex gap-4 p-2 align-items-center">
                        <p class="m-0 text-white ">We are leading consultant firm!</p>
                        <select class="bg-light">
                            <option>English </option>
                            <li><hr class="dropdown-divider" />  </li>
                            <option>German </option>
                            <li><hr class="dropdown-divider" />  </li>
                            <option>French</option>
                            <li><hr class="dropdown-divider" />  </li>
                            <option>Spanish</option>
                            <li><hr class="dropdown-divider" />  </li>
                            <option>Italian</option>
                        </select>
                        <div>
                            <p class=" p-3 m-2 ">
                                <i class="fa-brands fa-facebook-f color-success c"> </i>
                                <i class="fa-brands fa-twitter c "></i>
                                <i class="fa-brands fa-pinterest c "></i>
                                <i class="fa-brands fa-linkedin-in c "></i></p>
                        </div>
                    </div>

                </div>
            </div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light  fixed">
                <div class="container-fluid class ">
                    <a class="navbar-brand" href="#"><img src="yashika react.png" alt="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNavDropdown">
                        <b><ul class="navbar-nav mx-auto abc  ">
                            <div class="d-flex p-4">

                                <li class="nav-item ">
                                    <Link class="nav-link" to="/" >
                                        HOME
                                    </Link>

                                </li>
                                <li className="nav-item">
                                    <a class="nav-link ">
                                        /
                                    </a>
                                </li>


                                <li class="nav-item">
                                    <Link class="nav-link" to="about">ABOUT</Link>
                                </li>
                                <li className="nav-item">
                                    <a class="nav-link ">
                                        /
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="Services">SERVICES</Link>
                                </li>



                                {/* 
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    SERVICE
                                </a>

                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">SERVICE VERSION ONE  </a></li>
                                    <li><hr class="dropdown-divider" />  </li>
                                    <li><a class="dropdown-item" href="#">SERVICE VERSION TWO </a></li>
                                    <li><hr class="dropdown-divider" />  </li>
                                    <li><a class="dropdown-item" href="#">SERVICE DETIALS </a></li>
                                </ul>
                            </li> */}

                                <li className="nav-item">
                                    <a class="nav-link ">
                                        /
                                    </a>
                                </li>


                                <li class="nav-item">
                                    <Link class="nav-link" to="Blog">BLOG</Link>

                                </li>
                                <li className="nav-item">
                                    <a class="nav-link ">
                                        /
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="contact">CONTACT</Link>
                                </li>
                                <li className="nav-item">
                                    <a class="nav-link ">
                                        /
                                    </a>
                                </li>


                                   

                                <li class="nav-item">
                                    <Link class="nav-link" to="adminlogin">ADMINLOGIN</Link>
                                </li>
                                <li className="nav-item">
                                    <a class="nav-link ">
                                        /
                                    </a>
                                </li>

                                {
                                    islogin ? (
                                        <>
                                          
                                                <li class="nav-item">
                                    <Link class="nav-link" to="Bookingpage">BOOKING</Link>
                                </li>
                                <li className="nav-item">
                                    <a class="nav-link ">
                                        /
                                    </a>
                                </li>
  <li class="nav-item">
                                                <button class="nav-link" onClick={() => {
                                                    localStorage.removeItem("userId")
                                                    setIslogin(false)
                                                }}>LOGOUT</button>
                                            </li>

                                        </>
                                    ) : (<>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="Signup">SIGNUP</Link>
                                        </li>
                                        <li className="nav-item">
                                            <a class="nav-link ">
                                                /
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="Login">LOGIN</Link>
                                        </li>


                                    </>)
                                }
                            </div>


                        </ul></b>



                    </div>
                </div>

            </nav>

        </>
    )
}
export default Navbar