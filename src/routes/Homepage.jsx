import React from "react";
import { Link } from "react-router";
function Home() {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMB */}
      <div className="flex gap-4 items-center">
        <Link to="/">Home</Link>
        <span>•</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex">
        <div className="">
          <h1 className="text-grey-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="mt-8 text-md md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur ratione aliquam
          </p>
        </div>
        {/* animated button */}
        <Link to="/write">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest">
            <path
              fill="none"
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75,75 0 1, 1 150, 0 a 75, 75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset={"0%"}>
                Write your story
              </textPath>
              <textPath href="#circlePath" startOffset={"50%"}>
                Share your idea
              </textPath>
            </text>
          </svg>
          <button className="bg-blue-800 rounded-full flex items-center justify-center"></button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
