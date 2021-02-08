import React from "react";
import { Card } from "react-bootstrap";

function Post({ title, body, handleDelete, id }) {
  //   let random = Math.floor(Math.random() * 100) + 1;

  return (
    <div className="container">
      <a className="blog" target="_blank" href="#">
        <img src="https://picsum.photos/id/1/200/300" />
        <div>
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
      </a>
      <div>
        <button onClick={() => handleDelete(id)}>Delete</button>
        <button onClick={() => handleDelete(id)}>Update</button>
      </div>
    </div>
  );
}

export default Post;
