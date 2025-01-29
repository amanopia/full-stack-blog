import { useUser } from "@clerk/clerk-react";
import React from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

function Write() {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }
  if (isLoaded && !isSignedIn) {
    return <div className="">You should login</div>;
  }
  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6 ">
      <h1 className="text-cl font-light">Create a New Post</h1>
      <form className="flex flex-col gap-6  flex-1 mb-10">
        {/* ADD COVER IMAGE */}
        <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
          Add a cover Image
        </button>
        {/* ADD TITLE */}
        <input
          type="text"
          placeholder="My Awesome story"
          className="font-semibold text-4xl bg-transparent outline-none"
        />
        {/* CHOOSE CATEGORY */}
        <div className="flex gap-4 items-center">
          <label htmlFor="" className="text-sm">
            Choose a category
          </label>
          <select
            name="cat"
            id=""
            className="rounded-xl bg-white p-2 shadow-md cursor-pointer">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="search-engines">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        {/* MAIN CONTENT AREA */}
        <textarea
          name="desc"
          id=""
          placeholder="A short description"
          className="rounded-xl bg-white p-4 shadow-md"
        />
        <ReactQuill
          theme="snow"
          className="flex-1 rounded-xl bg-white shadow-md "
        />
        {/* SUBMIT BUTTON */}
        <button className="w-max p-2 text-white bg-blue-800 rounded-xl font-medium">
          Send
        </button>
      </form>
    </div>
  );
}

export default Write;
