import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

function Post(props) {
  const fetchAPI = () => {
    axios
      .get("http://localhost:3004/posts?_sort=id&_order=desc")
      .then((res) => {
        props.onBlog(res.data);
      });
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const handleDelete = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      fetchAPI();
    });
  };

  return (
    <div className="blog-page">
      <h1>Blog</h1>
      {
        <div className="blogs">
          {props.blog.map((item) => {
            return (
              <div className="container" key={item.id}>
                <Link className="blog" to={`/post/${item.id}`}>
                  <img src="https://picsum.photos/id/1/200/300" />
                  <div>
                    <h1>{item.title}</h1>
                    <p>{`${item.body.substring(0, 100)}...`}</p>
                  </div>
                </Link>
                <div className="button-container">
                  <button>Update</button>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      }
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

export default connect(mapStateToProps, mapDispatchToProps)(Post);
