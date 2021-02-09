import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:3004/posts/${id}`).then((res) => {
      setTitle(res.data.title);
      setBody(res.data.body);
    });
  }, []);
  return (
    <div className="detail">
      <Link to="/">back Home</Link>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}

export default Detail;
