import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchUsers } from "../features/userSlice";

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const users = useSelector(state => state.users);
  console.log(users);
  return <div>Users</div>;
};

export default Users;
