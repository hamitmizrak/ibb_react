
// rfc
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// FUNCTION
export default function BlogCreate2() {

  // Redirect
  let navigate = useNavigate();

  // STATE
  const [header, setHeader] = useState('');
  const [content, setContent] = useState('');

  // POST
  const postBlog = () => {
    axios.post("https://64de4c64825d19d9bfb26b0b.mockapi.io/api/v1/blog/react_project", {
      header, content
    })
      .then(() => {
        navigate("/blog/list2")
      })
      .catch((err) => {
        console.error(err);
      })
  }

  // RETURN
  return (
    <React.Fragment>
      <br /><br /><br /><br /><br />
      <form>
        <div className="form-group mb-4">
          <label>Header</label>
          <input
            type="text"
            className="form-control"
            placeholder="Header"
            required={true}
            autoFocus={true}
            onChange={(event) => { setHeader(event.target.value) }}
          />
        </div>


        <div className="form-group mb-4">
          <label>Content</label>
          <input
            type="text"
            className="form-control"
            placeholder="content"
            required={true}
            autoFocus={false}
            onChange={(event) => { setContent(event.target.value) }}
          />
        </div>

        <button className='btn btn-primary' onClick={postBlog} type="submit">Blog Ekle</button>
        <br /><br />
      </form>
    </React.Fragment>
  )
}
