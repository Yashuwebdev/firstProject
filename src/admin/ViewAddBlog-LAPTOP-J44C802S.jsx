import React, { useState } from "react";
import { useEffect } from "react";
import { BACKEND_API } from "../backendAPI";

function ViewAddBlog() {
    let [ViewBlog, setViewBlog] = useState([])
    async function getBlog() {
        try {
            let res = await fetch(`${BACKEND_API}/api/ViewBlog`);
            let data = await res.json();
            console.log(data)
            setViewBlog(data.ViewBlog);

        }
        catch (error) {
            console.log(error);
        }
    }
    console.log(ViewBlog)
    useEffect(() => {
        getBlog()
    }, [])

    async function deleteBlog(id) {
        try {
            let res = await fetch(`${BACKEND_API}/api/deleteBlog/${id}`, {
                method: "delete",
            });
            let data = await res.json();
            if (res.ok) {
                alert(data.msg)
                getBlog()
            }
        } catch (error) {
            console.log(error);
        }
    }
    // return <>hello</>
    return <div className="col-md-8 p-3 table-success  table-bordered table-border border-primary table-sm Color-Success">
        <h1 class="text-center p-2">VIEW BLOGS</h1>

        <table className="table table-success ">
            <tr>
                <th>Sr.no.</th>
                <th>Title</th>
                <th>Imagepath</th>
                <th>Postby</th>
                <th>Poston</th>
                <th>Description</th>
                <th>Active</th>
            </tr>
            {
                ViewBlog.map((c, idx) => {
                    return (<tr>
                        <td>{idx + 1}</td>
                        <td>{c.title}</td>
                        <td>{c.imgPath}</td>
                        <td>{c.postby}</td>
                        <td>{c.poston}</td>
                        <td>{c.description}</td>
                        <td><button className="btn btn-danger" onClick={() => {
                            deleteBlog(c._id);
                        }}> Delete </button>
                        </td>

                    </tr>
                    )
                }

                )}
        </table>

    </div>
}
export default ViewAddBlog
