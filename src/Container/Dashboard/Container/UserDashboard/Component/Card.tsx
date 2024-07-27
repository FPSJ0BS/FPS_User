import { memo } from "react";
import { useNavigate } from "react-router-dom";

interface ICard {
  Icon: JSX.Element;
  title: string;
  total: any;
  navigatePath:string
}
const Card = ({ Icon, title, total, navigatePath }: ICard) => {
  const navigate = useNavigate();
  return (
    <div className=" col-lg-3 col-6 cursor-pointer" onClick={() => navigate(navigatePath)}>
      <div className="dash-card-one bg-white border-30 position-relative mb-15">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div className="icon rounded-circle d-flex align-items-center justify-content-center order-sm-1 bg-black">
            {Icon}
          </div>
          <div className="order-sm-0">
            <div className="value fw-500">{total}</div>
            <span>{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Card);
