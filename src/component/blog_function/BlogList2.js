import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// FUNCTION
export default function BlogList2() {

  // Redirect
  let navigate = useNavigate();

  // STATE
  const [MockApi, setMockApi] = useState([]);

  useEffect(() => {
    axios.get("https://64de4c64825d19d9bfb26b0b.mockapi.io/api/v1/blog/react_project")
      .then((response) => {
        //navigate("/blog/list2")
        console.log(response.data);
        setMockApi(response.data)
      })
      .catch((err) => {
        console.error(err);
      })
  }) //end useEffect

  // Blog Object Set/Get
  // SET
  const setBlogData = (data) => {
    let { id, header, content } = data;
    localStorage.setItem("Blog_List_ID", id);
    localStorage.setItem("Blog_List_HEADER", header);
    localStorage.setItem("Blog_List_CONTENT", content);
  }

  // GET
  const getBlogData = () => {
    axios.get("https://64de4c64825d19d9bfb26b0b.mockapi.io/api/v1/blog/react_project")
      .then((response) => {
        //navigate("/blog/list2")
        //console.log(response.data);
        setMockApi(response.data)
      })
      .catch((err) => {
        console.error(err);
      })
  }

  // DELETE
  const blogDelete = (id) => {
    axios.delete(`https://64de4c64825d19d9bfb26b0b.mockapi.io/api/v1/blog/react_project/${id}`)
      .then(() => {
        getBlogData();
        navigate("/blog/list2")
      })
      .catch((err) => {
        console.error(err);
      })
  }

  // RETURN
  return (
    <React.Fragment>
      <h1 className="text-center display-4 text-uppercase mt-5">Blog List</h1>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>HEADER</th>
            <th>CONTENT</th>
            <th>DATE</th>
            <th>PICTURE</th>
            <th>GÜNCELLE</th>
            <th>GÖSTER</th>
            <th>SİL</th>
          </tr>
        </thead>
        <tbody>
          {
            MockApi.map((temp) =>
              <tr key={temp.id}>
                <td>{temp.id}</td>
                <td>{temp.header}</td>
                <td>{temp.content}</td>
                <td>{temp.createdAt}</td>
                <td>{temp.avatar}</td>
                {/* UPDATE */}
                <td>
                  <Link to="/blog/update2">
                    <button type="button" onClick={() => setBlogData(temp)}><i className="fa-solid fa-pen-nib text-primary text-center" ></i></button>
                  </Link>
                </td>

                <td>
                  <Link to="/blog/view2">
                    <button type="button" onClick={() => setBlogData(temp)}><i  className="fa-solid fa-binoculars text-warning text-center"></i></button>
                  </Link>
                </td>

                {/* DELETE */}
                <td>
                  <button type="button" onClick={() => blogDelete(temp.id)}><i   className="fa-solid fa-trash text-danger text-center"></i></button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </React.Fragment>
  )
}
