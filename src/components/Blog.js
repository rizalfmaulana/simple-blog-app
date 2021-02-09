import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";

function Blog(props) {
  const [post, setPost] = useState({
    userId: 1,
    id: 1,
    title: "",
    body: "",
  });

  const postAPI = () => {
    axios.post("http://localhost:3004/posts", post).then((res) => {
      setPost({ ...post, title: "", body: "" });
    });
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    let timeStamp = new Date().getTime();
    post.id = timeStamp;
    setPost((prevValue) => {
      return { ...prevValue, [name]: value };
    });
    console.log(post);
  };

  const handlePost = () => {
    postAPI();
  };
  return (
    <div className="blog-page">
      <h1>Create Post</h1>
      <div className="form-add-post">
        <input
          value={post.title}
          name="title"
          placeholder="Title"
          onChange={handleInput}
        />
        <textarea
          value={post.body}
          name="body"
          placeholder="Content..."
          rows="10"
          onChange={handleInput}
        />
        <button onClick={handlePost}>Save</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    blog: state.blog,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBlog: (value) => dispatch({ type: "POST", value: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
