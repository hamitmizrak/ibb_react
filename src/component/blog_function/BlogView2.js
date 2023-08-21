import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Function
export default function BlogView2() {

  // Redirect
  let navigate=useNavigate();

  // State
  const [viewApi,setViewApi ]=useState([]);
  const [id, setID] = useState(null);

  // Effect
  useEffect(()=>{ // 
    setID(localStorage.getItem("view_id"));
    axios.get(`https://64de4c64825d19d9bfb26b0b.mockapi.io/api/v1/blog/react_project/${id}`)
    .then((response)=>{
      console.log(response.data);
      //console.log(response.status);
      setViewApi(response.data)
    })
    .catch((err)=>{console.error(err);});
  });

  return (
    <div>
      <br /><br /><br /><br /><br />
      {localStorage.getItem("view_id")}
      <br />
      {viewApi.header}
      <br />
      {viewApi.content}
    </div>
  )
}
