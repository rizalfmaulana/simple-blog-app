import axios from "axios";
import React, { useState, useEffect } from "react";
import Post from "./Post";

function Blog() {
  const [post, setPost] = useState({
    userId: 1,
    id: 1,
    title: "",
    body: "",
  });

  const [pos, setPos] = useState([]);

  const fetchAPI = () => {
    axios.get("http://localhost:3004/posts").then((res) => {
      setPos(res.data);
    });
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const handleInput = (event) => {
    const { name, value } = event.target;
    let timeStamp = new Date().getTime();
    post.id = timeStamp;
    setPost((prevValue) => {
      return { ...prevValue, [name]: value };
    });
    console.log(post);
  };

  const handleDelete = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      fetchAPI();
    });
  };

  const handlePost = () => {
    setPos((prevValue) => {
      return [...prevValue, post];
    });
  };
  return (
    <div className="blog-page">
      <h1>Create Post</h1>
      <div className="form-add-post">
        <input
          value={post.title}
          name="title"
          placeholder="title"
          onChange={handleInput}
        />
        <textarea
          value={post.body}
          name="body"
          placeholder="content"
          onChange={handleInput}
        />
        <button onClick={handlePost}>Save</button>
      </div>
      <div className="blogs">
        {pos.map((item) => {
          return <Post key={item.id} {...item} handleDelete={handleDelete} />;
        })}
      </div>
    </div>
  );
}

export default Blog;
