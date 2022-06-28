import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchComments } from "../features/commentSlice";
import Pagination from "./Pagination";

const Comments = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);
  const comments = useSelector(state => state.comments.comments);
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = comments.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div  className={`app__users app__container ${darkMode ? "bg-dark" : ""} `}>
      <h1 className={`text-xxl ${darkMode ? "text-white" : ""} `}>Comments</h1>
      <table className="table">
        <thead>
          <tr>
            <th className={` ${darkMode ? "text-white" : ""} `} scope="col">#</th>
            <th className={` ${darkMode ? "text-white" : ""} `} scope="col">postId</th>
            <th className={` ${darkMode ? "text-white" : ""} `} scope="col">Name</th>
            <th className={` ${darkMode ? "text-white" : ""} `} scope="col">Email</th>
            <th className={` ${darkMode ? "text-white" : ""} `} scope="col">Body</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((comment) => (
            <tr key={comment.id}>
              <th  className={` ${darkMode ? "text-white" : ""} `} scope="row">{comment.id}</th>
              <td className={` ${darkMode ? "text-white" : ""} `} >{comment.postId}</td>
              <td className={` ${darkMode ? "text-white" : ""} `} >{comment.name}</td>
              <td className={` ${darkMode ? "text-white" : ""} `} >{comment.email}</td>
              <td className={` ${darkMode ? "text-white" : ""} `} >{comment.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination itemsPerPage={itemsPerPage} totalItems={comments.length} paginate={paginate} />
    </div>
  );
};

export default Comments;