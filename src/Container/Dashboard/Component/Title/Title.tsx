import { memo } from "react";


const Title = ({title}:{title:string}) => {
  return <h2 className="main-title">{title}</h2>;
}

export default memo(Title);