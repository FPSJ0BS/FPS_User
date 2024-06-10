
import { memo } from "react";
import Dropdown from "react-dropdown";
const pageSize = [
  {
    value: "10",
    label: "10 Per Page",
  },
  {
    value: "20",
    label: "20 Per Page",
  },
  {
    value: "30",
    label: "30 Per Page",
  },
];
function SortBuy({ setFilter, filter }: any) {

 
  return (
    <div className="group-select">
      <Dropdown
        options={pageSize}
        className="react-dropdown sort-buy"
        value={pageSize[0]}
        onChange={(value) => {
          setFilter({
            ...filter,
            limit: Number(value.value),
            page: 0,
          });
        }}
        placeholder="Select Salary"
      />
    </div>
  );
}

export default memo(SortBuy);
