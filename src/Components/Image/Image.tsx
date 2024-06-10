import img from "@Assets/images/side-bar/image-01.jpg";
import { useState, useEffect, memo } from "react";
const Imag = (props: any) => {
  const { src, ...prop } = props;
  const [srcImage, setsrcImage] = useState(img || src);
  useEffect(() => {
    const im = new Image();
    im.src = props.src;
    im.onload = function () {
      setsrcImage(src);
    };
  }, [src]);
  return <img loading="lazy" {...prop} src={srcImage} />;
};

export default memo(Imag);
