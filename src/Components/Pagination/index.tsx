import { memo } from "react";
import ReactPaginate from "react-paginate";
type IProps = {
  current: number;
  pageSize: number;
  total: number;
  onChange: (page: number) => void;
};

function Pagination({ current, total, onChange }: IProps) {
  return (
    <>
      <ReactPaginate
        containerClassName="pagination-job padding"
        activeClassName="current"
        breakLabel="..."
        nextLabel={<i className="icon-keyboard_arrow_right"></i>}
        previousLabel={
          <i className="icon-keyboard_arrow_left" aria-disabled></i>
        }
        onPageChange={(e) => onChange(e.selected)}
        pageRangeDisplayed={1}
        pageCount={total}
        renderOnZeroPageCount={null}
        activeLinkClassName="current"
        forcePage={current}
      />
    </>
  );
}

export default memo(Pagination);
