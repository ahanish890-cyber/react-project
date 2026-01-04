import React, { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data)) 
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  

  return (
    <div className="posts-content">
      {posts.length === 0 ? (
        <p>Loading posts...</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="post border mb-3" >
          

          
            <div className="d-flex align-items-center p-2">
              <img
                src={post.user.profile_pic}
                alt="Profile"
                width="40"
                height="40"
                className="rounded-circle me-2"
              />
              <strong id="username">{post.user.username}</strong>
              <div id="hrs" className="mx-1"><span></span>22h</div>
            </div>

            
            <img src={post.image} alt="Post" className=" border rounded" />

            <div id="actions" className="p-2">
              <i className="bx bx-heart me-3"></i>
              <i className="bx bx-message-rounded"></i>
              <i className="bx bx-bookmark ms-auto"></i> 
            </div>
        <div>
              <strong className="ms-2 ">{post.likes} likes</strong>
        </div>
            <div className="caption">
              <strong>{post.user.username}</strong> {post.caption}
            </div>

          </div>
        ))
      )}
    </div>
  );
}

export default Posts;

