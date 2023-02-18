import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState({});
  const [postID, setPostID] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [submittedID, setSubmittedID] = useState(false);

  const handleInput = (event) => {
    if (submittedID) {
      setSubmittedID(false);
    }
    setPostID(event.target.value);
  };

  const handleSubmit = (event) => {
    setSubmittedID(true);
    event.preventDefault();
  };

  useEffect(() => {
    if (submittedID) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/" + postID)
        .then((response) => {
          setPost(response.data);
        })
        .catch((error) => {
          console.log(error);
          setErrorMsg("Invalid Post ID: Unable to retrieve post.");
        });
    }
  }, [submittedID, postID]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInput}
          value={postID}
          placeholder="Post ID"
        ></input>
        <button type="submit">Submit</button>
      </form>
      {submittedID && !errorMsg && (
        <div>
          <div>User ID: {post.userId}</div>
          <div>Post ID: {post.id}</div>
          <div>Title: {post.title}</div>
          <div>Body: {post.body}</div>
        </div>
      )}
      <div>{errorMsg}</div>
    </>
  );
}

export default DataFetching;
