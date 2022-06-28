import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchComments } from "../features/commentSlice";

const Comments = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);
  const comments = useSelector(state => state.comments);
  console.log(comments);
  return <div>Comments</div>;
};

export default Comments;