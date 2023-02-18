import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState({});
  const [postID, setPostID] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [submittedID, setSubmittedID] = useState("");

  useEffect(() => {
    if (submittedID && postID != "") {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${submittedID}`)
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
      <div>
        <input
          type="text"
          onChange={(event) => setPostID(event.target.value)}
          value={postID}
          placeholder="Post ID"
        ></input>
        <button onClick={setSubmittedID(postID)}>Fetch Post</button>
      </div>
      {!errorMsg && (
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
