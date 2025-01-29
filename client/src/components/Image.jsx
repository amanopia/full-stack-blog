import React from "react";
import { IKImage } from "imagekitio-react";
function Image({ src, className, w, h, ...props }) {
  console.log(src);
  return (
    <IKImage
      transformation={[{ width: w, height: h }]}
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={src}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      {...props}
      className={className}
    />
  );
}

export default Image;
