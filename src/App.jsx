import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import Adminlogin from "./Components/Adminlogin"
import AdminLayout from "./admin/AdminLayout"
import ViewContact from "./admin/ViewContact"
import AddBlog from "./admin/AddBlog"
import ViewAddBlog from "./admin/ViewAddBlog"
import AddServices from "./admin/AddServices"
import ViewServices from "./admin/ViewServices"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import AuthContextProvider from "./context/AuthContextProvider"
import Services from "./Components/Services"
import Bookingpage from "./Components/Bookingpage"
import ViewBookings from "./admin/ViewBookings"
import Dashboard from "./admin/Dashboard"
import BlogDetails from "./Components/Blogdetails"
import BlogUpdate from "./admin/BlogUpdate"

function App() {

    return (
        <>
            <BrowserRouter>
                <AuthContextProvider>
                    <Routes>
                        <Route path="/" element={<Layout></Layout>}>
                            <Route index element={<Home></Home>}></Route>
                            <Route path="about" element={<About></About>}></Route>
                            <Route path="contact" element={<Contact></Contact>}></Route>
                            <Route path="Services" element={<Services></Services>}></Route>
                            <Route path="blog" element={<Blog></Blog>}></Route>
                            <Route path="blog/:idx" element={<BlogDetails></BlogDetails>}></Route>
                            <Route path="Adminlogin" element={<Adminlogin></Adminlogin>}></Route>
                            <Route path="Signup" element={<Signup></Signup>}></Route>
                            <Route path="Login" element={<Login></Login>}></Route>
                            <Route path="Bookingpage" element={<Bookingpage></Bookingpage>}></Route>

                        </Route>

                        <Route path="admin" element={<AdminLayout></AdminLayout>} >
                            <Route index element={<Dashboard></Dashboard>}></Route>
                            <Route path="viewContact" element={<ViewContact></ViewContact>}></Route>
                            <Route path="addblog" element={<AddBlog />}></Route>
                            <Route path="viewAddBlog" element={<ViewAddBlog></ViewAddBlog>}></Route>
                            <Route path="viewServices" element={<ViewServices></ViewServices>}></Route>
                            <Route path="AddServices" element={<AddServices></AddServices>}></Route>
                            <Route path="ViewBookings" element={<ViewBookings></ViewBookings>}></Route>
                            <Route path="blog_update/:id" element={<BlogUpdate></BlogUpdate>}></Route>
                        </Route>
                    </Routes>
                </AuthContextProvider>
            </BrowserRouter>

        </>
    )
}


export default App