import { memo } from "react";
import { Link } from "react-router-dom";

function Button2(props: any) {
  const { title, link } = props;
  return (
    <Link to={link} className="tf-button style-1">
      {title}
      <span className="icon-keyboard_arrow_right"></span>
    </Link>
  );
}

export default memo(Button2);
