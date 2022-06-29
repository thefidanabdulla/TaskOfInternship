import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchUsers } from "../features/userSlice";
import Pagination from "./Pagination";

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const darkMode = useSelector(state => state.darkMode.darkMode)
  const users = useSelector((state) => state.users.users);
  const lang = useSelector ((state) => state.lang.lang)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className={`app__users app__container ${darkMode ? "bg-dark" : ""} `}>
      <h1 className={`text-xxl ${darkMode ? "text-white" : ""} `}> {lang === 'az' ? 'İstifadəçilər' : 'Users'}</h1>
      <table className="table">
        <thead>
          <tr>
            <th className={` ${darkMode ? "text-white" : ""} `}  scope="col">#</th>
            <th className={` ${darkMode ? "text-white" : ""} `}  scope="col"> {lang === 'az' ? 'Ad' : 'FullName'}</th>
            <th className={` ${darkMode ? "text-white" : ""} `}  scope="col"> {lang === 'az' ? 'İstifadəçi adı' : 'UserName'}</th>
            <th className={` ${darkMode ? "text-white" : ""} `}  scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((user) => (
            <tr key={user.id}>
              <th className={` ${darkMode ? "text-white" : ""} `}  scope="row">{user.id}</th>
              <td className={` ${darkMode ? "text-white" : ""} `} >{user.name}</td>
              <td className={` ${darkMode ? "text-white" : ""} `} >{user.username}</td>
              <td className={` ${darkMode ? "text-white" : ""} `} >{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination itemsPerPage={itemsPerPage} totalItems={users.length} paginate={paginate} />
    </div>
  );
};

export default Users;
