import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchComments } from "../features/commentSlice";

const Comments = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);
  const comments = useSelector(state => state.comments.comments);
  return (
    <div className="app__users container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">postId</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr key={comment.id}>
              <th scope="row">{comment.id}</th>
              <td>{comment.postId}</td>
              <td>{comment.name}</td>
              <td>{comment.email}</td>
              <td>{comment.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Comments;