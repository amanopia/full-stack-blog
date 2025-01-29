import React from "react";
import Image from "./Image";
function Comment() {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image
          src="userImg.jpeg"
          className="w-10 h-10 rounded-full object-cover"
          w="40"
        />
        <span className="font-medium">John Doe</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>
      <div className="mt-4 text-sm">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          pariatur ea fugiat iusto sint optio aliquam provident quibusdam veniam
          architecto, ipsam distinctio odio possimus id officiis autem
          perspiciatis cumque perferendis.
        </p>
      </div>
    </div>
  );
}

export default Comment;
