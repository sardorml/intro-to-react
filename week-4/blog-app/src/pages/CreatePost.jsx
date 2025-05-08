import React from "react";
import { useDispatch } from "react-redux";
import { postActions } from "../store/post-reducer";

export default function CreatePost() {
  const dispatch = useDispatch();

  function handleCreatePost(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    dispatch(postActions.createPost(data));
  }

  return (
    <div>
      <h1>Create Post</h1>
      <div className="d-flex flex-column mb-3 align-items-center">
        <form
          onSubmit={handleCreatePost}
          className="form-group w-50 d-flex flex-column gap-2"
        >
          <input
            class="form-control"
            type="text"
            name="title"
            placeholder="Title"
          ></input>
          <textarea
            name="content"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            placeholder="Post text here.."
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Submit Post
          </button>
        </form>
      </div>
    </div>
  );
}
