import React from "react";

const PostList= ({ posts }) => {
    return (
      <div>
      <h2>Blog Posts</h2>
      {posts.length > 0 ? (
        <ul className="list-group">
          {posts.map((post) => (
            <li key={post.id} className="list-group-item">
              <h5>{post.title}</h5>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts available</p>
      )}
    </div>
    )
   };

export default PostList;