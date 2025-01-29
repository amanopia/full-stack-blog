import React, { useState } from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";

function PostListPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1 className="mb-8 text-2xl">Development Blog</h1>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="text-white p-2 bg-blue-800 rounded-2xl md:hidden text-small mb-4">
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex gap-8">
        <div className="">
          <PostList />
        </div>
        <div className="">
          <SideMenu></SideMenu>
        </div>
      </div>
    </div>
  );
}

export default PostListPage;
