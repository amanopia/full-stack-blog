import React from "react";
import { IKImage } from "imagekitio-react";
function Image({ src, className, ...props }) {
  console.log(src);
  return (
    <div>
      <IKImage
        urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
        path={src}
        className={className}
        loading="lazy"
        lqip={{ active: true, quality: 20 }}
        {...props}
      />
    </div>
  );
}

export default Image;
