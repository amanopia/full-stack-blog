import React from "react";
import Image from "./Image.jsx";
import { Link } from "react-router";
function PostListItem() {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        {" "}
        <Image
          src="postImg.jpeg"
          className={" rounded-2xl object-cover"}
          w="735"
        />
      </div>
      <div className="flex flex-col gap-4 xl:w-2/3">
        <div className="flex gap-4 text-sm flex-col ">
          <Link to="/test" className="text-4xl font-semibold">
            Learn about rashi and planetary transits in the month of June
          </Link>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">Aman Verma</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
        </div>
        {/* description */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          perspiciatis possimus odit accusamus non sunt, repellat excepturi
          necessitatibus facere optio blanditiis...
        </p>
        <Link
          href="/test"
          className="text-sm text-blue-800  underline underline-offset-4">
          Read more
        </Link>
      </div>
      {/* details */}
    </div>
  );
}

export default PostListItem;
