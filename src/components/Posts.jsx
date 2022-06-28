import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchPosts } from "../features/postSlice";

const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const posts = useSelector(state => state.posts);
  console.log(posts);
  return <div>Posts</div>;
};

export default Posts;