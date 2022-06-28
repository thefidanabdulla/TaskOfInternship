import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchPosts } from "../features/postSlice";
import Pagination from "./Pagination";

const Posts = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const posts = useSelector(state => state.posts.posts);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="app__users container">
      <h1 className="text-xxl">Posts</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">UserId</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((post) => (
            <tr key={post.id}>
              <th scope="row">{post.id}</th>
              <td>{post.userId}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination itemsPerPage={itemsPerPage} totalItems={posts.length} paginate={paginate} />
    </div>
  );
};

export default Posts;