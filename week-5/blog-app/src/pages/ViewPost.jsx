import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectPostById } from "../store/postSlice";

export default function ViewPost() {
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, postId));

  return (
    <>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </>
  );
}
