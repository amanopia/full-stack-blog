import React from "react";
import Comment from "./Comment";
function Comments() {
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="underline text-gray-500 text-xl">Comments</h1>
      <div className="flex items-center gap-8 w-full justify-between">
        <textarea
          placeholder="write a comment..."
          className="w-full p-4 rounded-xl"
        />
        <button className="bg-blue-800 px-4 py-3 text-white font-medium rounded-xl cursor-pointer">
          Send
        </button>
      </div>

      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}

export default Comments;
