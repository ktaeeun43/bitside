import axios from 'axios';
import React, { useEffect, useState } from 'react'



function Anouncements() {
  const [Anouncements, setAnouncements] = useState([]);
  
  useEffect(() => {
    axios.get("/api/comment/getAnouncements").then((response) => {
        if (response.data.success) {
          console.log("response.data.comments", response.data.anouncements);
          setAnouncements(response.data.comments);
        } else {
          alert("Failed to get video Info");
        }
      });


  },[]);
  return (

    <>
    <div>Anouncements</div>
    </>
  )
}

export default Anouncements