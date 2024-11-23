import React, { useState, useEffect} from "react";
import PostForm from "./PostForm";
import axios from "axios";
import PostList from "./PostList";

const ParentComponent = () => {
    const [posts, setPosts] = useState ([]);

    useEffect(() => {
      axios
        .get("http://localhost:8000/api/posts/")
        .then((response) => setPosts(response.data))
        .catch((error) => console.log("Error fetching posts:", error));
    },[]);



 const handlePostAdded = (newPost) => {
    setPosts((prevPost) => [newPost, ...prevPost]);

    }



return (
    <div>
        <h2>Blog Posts</h2>
        <PostForm onPostAdded={handlePostAdded}/>
        <PostList posts = {posts}/> 
    </div>
);
};

export default ParentComponent;