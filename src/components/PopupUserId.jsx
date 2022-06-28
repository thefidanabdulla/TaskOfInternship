import React from "react";
import { GrClose } from 'react-icons/gr';

const PopupUserId = ({ userId, posts }) => {
  return (
    <div className="app__popup-container">
      <div className="app__popup-overlay"></div>
      <div className="app__popup">
        <div className="app__popup-header d-flex justify-content-between">
          <p>Popup</p>
          <button>
          <GrClose />
          </button>
        </div>
        <div className="app__popup-body">
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
              {posts.map((post) =>
                post.userId === userId ? (
                  <tr key={post.id}>
                    <th scope="row">{post.id}</th>
                    <td>{post.userId}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
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

export default PopupUserId;
