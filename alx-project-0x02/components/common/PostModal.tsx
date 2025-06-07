import React, { useState } from "react";
import { type PostModalProps } from "@/interfaces/index"


const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    onSubmit(title, content);
    setTitle("");
    setContent("");
    onClose(); // close modal after submit
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-grey p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">Add New Post</h2>
        <input
          className="w-full p-2 border mb-2"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full p-2 border mb-2"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex justify-end space-x-2">
          <button className="bg-gray-400 text-white px-4 py-2 rounded" onClick={onClose}>
            Cancel
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
