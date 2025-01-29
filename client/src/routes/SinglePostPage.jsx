import React from "react";
import Image from "../components/Image";
import { Link } from "react-router";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

function SinglePostPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* details */}
      <div className="flex gap-8">
        <div className="flex flex-col lg:w-3/5">
          <h1 className="text-xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </h1>
          <div className="flex items-center text-gray-400 gap-2 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">Aman Verma</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            natus architecto earum repellendus quaerat illo eaque in ipsa, eius
            minima cum facilis sint placeat voluptatum consequuntur cupiditate
            aspernatur dolorum pariatur?
          </p>
        </div>
        <div className="hidden lg:block w-2/5 ">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify w-3/4">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus qui doloremque, numquam quod exercitationem,
            voluptatibus dignissimos voluptatum recusandae optio tempora,
            laudantium natus praesentium aliquid impedit doloribus. Quisquam
            deserunt mollitia nemo?
          </p>{" "}
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus qui doloremque, numquam quod exercitationem,
            voluptatibus dignissimos voluptatum recusandae optio tempora,
            laudantium natus praesentium aliquid impedit doloribus. Quisquam
            deserunt mollitia nemo? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Vitae aperiam ipsum, consequatur debitis enim
            nobis cum atque. Porro sequi quidem tenetur possimus quaerat,
            suscipit ipsam consectetur veritatis inventore molestiae nesciunt!
          </p>{" "}
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus qui doloremque, numquam quod exercitationem,
            voluptatibus dignissimos voluptatum recusandae optio tempora,
            laudantium natus praesentium aliquid impedit doloribus. Quisquam
            deserunt mollitia nemo?
          </p>{" "}
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus qui doloremque, numquam quod exercitationem,
            voluptatibus dignissimos voluptatum recusandae optio tempora,
            laudantium natus praesentium aliquid impedit doloribus. Quisquam
            deserunt mollitia nemo?
          </p>{" "}
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus qui doloremque, numquam quod exercitationem,
            voluptatibus dignissimos voluptatum recusandae optio tempora,
            laudantium natus praesentium aliquid impedit doloribus. Quisquam
            deserunt mollitia nemo?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus qui doloremque, numquam quod exercitationem,
            voluptatibus dignissimos voluptatum recusandae optio tempora,
            laudantium natus praesentium aliquid impedit doloribus. Quisquam
            deserunt mollitia nemo?
          </p>{" "}
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus qui doloremque, numquam quod exercitationem,
            voluptatibus dignissimos voluptatum recusandae optio tempora,
            laudantium natus praesentium aliquid impedit doloribus. Quisquam
            deserunt mollitia nemo?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus qui doloremque, numquam quod exercitationem,
            voluptatibus dignissimos voluptatum recusandae optio tempora,
            laudantium natus praesentium aliquid impedit doloribus. Quisquam
            deserunt mollitia nemo?
          </p>{" "}
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus qui doloremque, numquam quod exercitationem,
            voluptatibus dignissimos voluptatum recusandae optio tempora,
            laudantium natus praesentium aliquid impedit doloribus. Quisquam
            deserunt mollitia nemo?
          </p>{" "}
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus qui doloremque, numquam quod exercitationem,
            voluptatibus dignissimos voluptatum recusandae optio tempora,
            laudantium natus praesentium aliquid impedit doloribus. Quisquam
            deserunt mollitia nemo?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus qui doloremque, numquam quod exercitationem,
            voluptatibus dignissimos voluptatum recusandae optio tempora,
            laudantium natus praesentium aliquid impedit doloribus. Quisquam
            deserunt mollitia nemo?
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max top-8 sticky w-1/4">
          <h1 className=" mb-4 text-sm font-medium">Author</h1>
          <div className="flex gap-4 text-sm items-center">
            <Image
              src="userImg.jpeg"
              className="w-12 h-12 rounded-full object-cover"
              w="48"
              h="48"
            />
            <Link>John Doe</Link>
          </div>

          <p className="mt-4 text-sm mb-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <div className="flex gap-2">
            <Link>
              <Image src="instagram.svg" />
            </Link>
            <Link>
              <Image src="facebook.svg" />
            </Link>
          </div>

          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2">
            <Link className="underline" to="/posts?cat=posts">
              All
            </Link>
            <Link className="underline" to="/posts?cat=web-design">
              Web Design
            </Link>
            <Link className="underline" to="/posts?cat=development">
              Development
            </Link>
            <Link className="underline" to="/posts?cat=database">
              Database
            </Link>
            <Link className="underline" to="/posts?cat=seo">
              Search Engines
            </Link>
            <Link className="underline" to="/posts?cat=marketing">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search></Search>
        </div>
      </div>
      {/* COMMENTS SECTION */}
      <Comments></Comments>
    </div>
  );
}

export default SinglePostPage;
