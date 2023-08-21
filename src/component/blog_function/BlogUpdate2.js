import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

// FUNCTION
export default function BlogUpdate2() {

  // REDIRECT
  let navigate = useNavigate();

  // STATE
  const [id, setID] = useState(null);
  const [header, setHeader] = useState('');
  const [content, setContent] = useState('');

  // useEffect
  useEffect(() => {
    setID(localStorage.getItem('id'));
    setHeader(localStorage.getItem('header'));
    setContent(localStorage.getItem('content'));
  }, []);


  // API SERVICES
  const blogApiUpdate = async (event) => {
    // Browser sen dur bir şey yapma
    event.preventDefault();

    const blogDto = { header, content };
    console.log(blogDto);

      const response=await axios.put("https://64de4c64825d19d9bfb26b0b.mockapi.io/api/v1/blog/react_project/" + id,blogDto)
      //const response = await axios.put(`https://64de4c64825d19d9bfb26b0b.mockapi.io/api/v1/blog/react_project/${id}`,blogDto)
      if (response.status == 200) {
        navigate("/blog/list2")
      }

    // try {
    
    // } catch (err) {
    //   console.error(err);
    // }
  } //end blogApiUpdate


  // RETURN
  return (
    <React.Fragment>
      <br /><br /><br /><br />
      {/* <form onSubmit={blogApiUpdate}> */}
      <p className="display-4">{id}</p>
      <form>
        <div className="form-group mb-4">
          <label>Header</label>
          <input
            type="text"
            className="form-control"
            placeholder="Header"
            required={true}
            autoFocus={true}
            value={header}
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
            value={content}
            onChange={(event) => { setContent(event.target.value) }}
          />
        </div>

        <button
          className='btn btn-primary mt-3'
          onClick={blogApiUpdate}
          type="submit">Blog Güncelle</button>
        <br /><br />
      </form>
    </React.Fragment>
  )
}
