// src/components/PostCard.js
import React, { useState } from 'react';
import { FaThumbsUp, FaCommentAlt } from 'react-icons/fa';

const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(0); // State for likes
  const [comments, setComments] = useState([]); // State for comments
  const [commentInput, setCommentInput] = useState(''); // State for comment input

  const handleLike = () => {
    setLikes(likes + 1); // Increment likes
  };

  const handleCommentChange = (e) => {
    setCommentInput(e.target.value); // Update comment input
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    if (commentInput.trim()) {
      setComments([...comments, commentInput]); // Add new comment
      setCommentInput(''); // Clear input
    }
  };

  return (
    <div className="bg-[#2C3141] rounded-lg p-4 mb-6 shadow-lg">
      <h2 className="text-white text-xl font-bold">{post.title}</h2>
      <p className="text-gray-300 mb-2">{post.content}</p>

      {/* Images */}
      {post.images && post.images.length > 0 && (
        <div className="flex gap-2 mb-4">
          {post.images.map((img, index) => (
            <img key={index} src={img} alt="Post" className="w-32 h-32 object-cover rounded-md" />
          ))}
        </div>
      )}

      <div className="flex justify-between text-gray-400">
        {/* Like Button */}
        <button className="flex items-center gap-1" onClick={handleLike}>
          <FaThumbsUp /> {likes} Likes
        </button>

        {/* Comment Button */}
        <button className="flex items-center gap-1">
          <FaCommentAlt /> {comments.length} Comments
        </button>
      </div>

      {/* Comment Input */}
      <form onSubmit={handleCommentSubmit} className="mt-4">
        <input
          type="text"
          value={commentInput}
          onChange={handleCommentChange}
          placeholder="Add a comment..."
          className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600"
        />
        <button type="submit" className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md">
          Post
        </button>
      </form>

      {/* Display Comments */}
      {comments.length > 0 && (
        <div className="mt-4 text-gray-300">
          <h3 className="font-semibold">Comments:</h3>
          <ul className="list-disc pl-5">
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PostCard;
