import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchPosts } from "../features/postSlice";
import Pagination from "./Pagination";
import { GrClose } from "react-icons/gr";
import { fetchComments } from "../features/commentSlice";
const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchComments());
  }, [dispatch]);
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const posts = useSelector((state) => state.posts.posts);
  const lang = useSelector((state) => state.lang.lang);
  const comments = useSelector((state) => state.comments.comments);
  const [togglePopupUser, settogglePopupUser] = useState(false);
  const [togglePopupComment, settogglePopupComment] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [userId, setUserId] = useState("");
  const [postId, setPostId] = useState("");
  const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const openPopupByUserId = (userIdForPopup) => {
    settogglePopupUser(true);
    setUserId(userIdForPopup);
  };
  const openPopupByPostId = (postIdForPopup) => {
    settogglePopupComment(true);
    setPostId(postIdForPopup);
  };
  const PopupUserId = ({ userId, posts }) => {
    return (
      <div className="app__popup-container">
        <div
          className="app__popup-overlay"
          onClick={() => settogglePopupUser(false)}
        ></div>
        <div  className={` app__popup ${darkMode ? 'dark' : ''}`}>
          <div className="app__popup-header d-flex justify-content-between">
            <p className={`${darkMode ? 'text-white' : ''}`}>Popup</p>
            <button
              className="app__popup-btn"
              onClick={() => settogglePopupUser(false)}
            >
              <GrClose />
            </button>
          </div>
          <div className="app__popup-body">
            <table className="table">
              <thead>
                <tr>
                  <th  className={` ${darkMode ? 'text-white' : ''}`} scope="col">#</th>
                  <th  className={` ${darkMode ? 'text-white' : ''}`} scope="col">UserId</th>
                  <th  className={` ${darkMode ? 'text-white' : ''}`} scope="col"> {lang === 'az' ? 'Başlıq' : 'Title'}</th>
                  <th  className={` ${darkMode ? 'text-white' : ''}`} scope="col">{lang === 'az' ? 'Kontent' : 'Body'}</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) =>
                  post.userId === userId ? (
                    <tr key={post.id}>
                      <th className={` ${darkMode ? 'text-white' : ''}`} scope="row">{post.id}</th>
                      <td className={` ${darkMode ? 'text-white' : ''}`}>{post.userId}</td>
                      <td className={` ${darkMode ? 'text-white' : ''}`}>{post.title}</td>
                      <td className={` ${darkMode ? 'text-white' : ''}`}>{post.body}</td>
                    </tr>
                  ) : null
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const PopupPostId = ({ postId }) => {
    return (
      <div className="app__popup-container">
        <div
          className="app__popup-overlay"
          onClick={() => settogglePopupComment(false)}
        ></div>
        <div className={` app__popup ${darkMode ? 'dark' : ''}`}>
          <div className="app__popup-header d-flex justify-content-between">
            <p className={`${darkMode ? 'text-white' : ''}`}>Popup</p>
            <button
              className="app__popup-btn"
              onClick={() => settogglePopupComment(false)}
            >
              <GrClose />
            </button>
          </div>
          <div className="app__popup-body">
            <table className="table">
              <thead>
                <tr>
                  <th className={` ${darkMode ? 'text-white' : ''}`} scope="col">#</th>
                  <th className={` ${darkMode ? 'text-white' : ''}`} scope="col">postId</th>
                  <th className={` ${darkMode ? 'text-white' : ''}`} scope="col">{lang === 'az' ? 'Ad' : 'Name'}</th>
                  <th className={` ${darkMode ? 'text-white' : ''}`} scope="col">Email</th>
                  <th className={` ${darkMode ? 'text-white' : ''}`} scope="col"> {lang === 'az' ? 'Kontent' : 'Body'}</th>
                </tr>
              </thead>
              <tbody>
                {comments.map((comment) =>
                  comment.postId === postId ? (
                    <tr key={comment.id}>
                      <th className={` ${darkMode ? 'text-white' : ''}`} scope="row">{comment.id}</th>
                      <td className={` ${darkMode ? 'text-white' : ''}`}>{comment.postId}</td>
                      <td className={` ${darkMode ? 'text-white' : ''}`}>{comment.name}</td>
                      <td className={` ${darkMode ? 'text-white' : ''}`}>{comment.email}</td>
                      <td className={` ${darkMode ? 'text-white' : ''}`}>{comment.body}</td>
                    </tr>
                  ) : null
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {togglePopupUser ? <PopupUserId userId={userId} posts={posts} /> : null}
      {togglePopupComment ? <PopupPostId postId={postId} /> : null}
      <div
        className={`app__users app__container ${darkMode ? "bg-dark" : ""} `}
      >
        <h1 className={`text-xxl ${darkMode ? "text-white" : ""} `}>{lang === 'az' ? 'Postlar' : 'Posts'}</h1>
        <table className="table">
          <thead>
            <tr>
              <th className={` ${darkMode ? "text-white" : ""} `} scope="col">
                #
              </th>
              <th className={` ${darkMode ? "text-white" : ""} `} scope="col">
                UserId
              </th>
              <th className={` ${darkMode ? "text-white" : ""} `} scope="col">
                {lang === 'az' ? 'Başlıq' : 'Title'}
              </th>
              <th className={` ${darkMode ? "text-white" : ""} `} scope="col">
                {lang === 'az' ? 'Kontent' : 'Body'}
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((post) => (
              <tr key={post.id}>
                <th className={` ${darkMode ? 'text-white' : ''} `} scope="row">
                  <button
                    onClick={() => openPopupByPostId(post.id)}
                    className={` app__popup-btn ${darkMode ? 'text-white' : ''} `}
                  >
                    {post.id}
                  </button>
                </th>
                <td >
                  <button
                    onClick={() => openPopupByUserId(post.userId)}
                    className={` app__popup-btn ${darkMode ? 'text-white' : ''} `}
                  >
                    {post.userId}
                  </button>
                </td>
                <td className={` ${darkMode ? 'text-white' : ''} `}>{post.title}</td>
                <td className={` ${darkMode ? 'text-white' : ''} `}>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={posts.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Posts;
