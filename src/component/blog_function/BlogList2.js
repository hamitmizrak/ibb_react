import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// FUNCTION
// Hook: Class component yerine function componentti kullanmaya denir
// useNavigate: Yönlendirme(redirect)
// useState(): o anlık veriyi göstersin
// useEffect(): CDM gibi veri takibini sağlar.
export default function BlogList2() {

  // Redirect
  let navigate = useNavigate();

  // STATE
  const [MockApi, setMockApi] = useState([]);

  // useEffect
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

  // UPDATE
  const setUpdateBlogData = (data) => {
    let { id, header, content } = data;
    localStorage.setItem("id", id);
    localStorage.setItem("header", header);
    localStorage.setItem("content", content);
  }

  // VIEW
  const setViewBlogData = (id) => {
    localStorage.setItem("view_id",id);
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
  } //end getBlogData

  // DELETE
  const blogDelete = (id) => {
    if (window.confirm("Silmek istediğinziden emin misiniz ?")) {
      axios.delete(`https://64de4c64825d19d9bfb26b0b.mockapi.io/api/v1/blog/react_project/${id}`)
        .then(() => {
          getBlogData();
          navigate("/blog/list2")
        })
        .catch((err) => {
          console.error(err);
        })
    } else {
      window.alert("Silinmedi !!!")
    }
  } //end blogDelete

  // RETURN
  return (
    <React.Fragment>
      <h1 className="text-center display-4 text-uppercase mt-5">Blog List</h1>
      <Link to="/blog/create2" className="btn btn-outline-primary mb-3" >Blog Ekle</Link>
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
                    <button type="button" onClick={() => setUpdateBlogData(temp)}><i className="fa-solid fa-pen-nib text-primary text-center" ></i></button>
                  </Link>
                </td>

                <td>
                  <Link to="/blog/view2">
                    <button type="button" onClick={() => setViewBlogData(temp.id)}><i className="fa-solid fa-binoculars text-warning text-center"></i></button>
                  </Link>
                </td>

                {/* DELETE */}
                <td>
                  <button type="button" onClick={() => blogDelete(temp.id)}><i className="fa-solid fa-trash text-danger text-center"></i></button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </React.Fragment>
  )
}
