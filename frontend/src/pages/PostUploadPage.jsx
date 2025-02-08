// PostUploadPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../Store/postSlice';
import { IoCamera } from 'react-icons/io5'; // Camera icon from react-icons
import { FaUpload } from 'react-icons/fa'; // Upload icon from react-icons

const PostUploadPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const imageURLs = files.map((file) => URL.createObjectURL(file));
    setImages(imageURLs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      title,
      content,
      images,
      userId: 'someUserId', // Replace with actual user ID
    };
    dispatch(addPost(postData));
    setTitle('');
    setContent('');
    setImages([]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-4">
      <div className="bg-gray-900 shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-white mb-4">Upload a Post</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post Title"
            required
            className="mb-4 p-3 border rounded border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Post Content"
            required
            className="mb-4 p-3 border rounded border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label className="mb-4 flex items-center cursor-pointer">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="hidden"
            />
            <span className="flex items-center justify-center border-2 border-blue-500 rounded p-2 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300">
              <IoCamera className="mr-2" />
              Choose Images
            </span>
          </label>
          {images.length > 0 && (
            <div className="mb-4 flex flex-wrap">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Uploaded Preview ${index + 1}`}
                  className="w-1/3 mb-2 rounded border border-gray-700"
                />
              ))}
            </div>
          )}
          <button
            type="submit"
            className="flex items-center justify-center p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            <FaUpload className="mr-2" />
            Upload Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostUploadPage;
