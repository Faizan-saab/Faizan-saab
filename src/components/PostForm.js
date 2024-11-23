import React, { useState } from 'react';
import axios from 'axios';

const PostForm = ({ onPostAdded })=> {
    const [title,setTitle] = useState ('');
    const [content, setContent] = useState ('');
    const [message,setMessage] = useState ('');
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        axios
        .post('http://localhost:8000/api/posts/', { title, content })
        .then((response) => {
            onPostAdded(response.data);
            setTitle('');
            setContent('');
            setMessage('Post created successfully!');
            setTimeout(() => setMessage(""), 3000);
        })
        .catch((error) => setMessage("Failed to create post. Please try again", error));
    };

    return(
        <div className='post-form'> 
        <h2>Create a New Post</h2>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                />
                <label>content:</label>
                <textarea
                value={ content }
                onChange={ (e) => setContent(e.target.value)}
                required
                />
            <button type='submit'>Create Post</button>
        </form>
        </div>
    );
};

export default PostForm;