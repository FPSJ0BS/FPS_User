import React, { useState, useEffect, useMemo, useRef, memo } from "react";
import { FixedSizeList as List } from "react-window";

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: Option[];
  setSearchJob: any;
  searchJob: any;
  style?: React.CSSProperties;
}

const CustomSelectTwo: React.FC<CustomSelectProps> = ({
  options,
  searchJob,
  setSearchJob,
  style,
}) => {
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
  const [isDropDown, setIsDropDown] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  
 
  const [selectIndex, setSelectIndex] = useState<any>(null);
  const btnRef = useRef<any>();
  const _data = useMemo(() => {
    if (!options) {
      return [];
    }
    let d: any = Array.from(new Set(options.map((d: any) => d.name)));
    return (
      d?.map((item, index: number) => ({ value: index + 1, label: item })) || []
    );
  }, [options]);
  useEffect(() => {
    filterOptions();
  }, [searchValue]);

  useEffect(() => {
    setSearchValue(searchJob?.name || "");
  }, [searchJob]);

  const filterOptions = () => {
    const filtered = _data.filter((option: any) =>
      option?.label?.toLowerCase()?.includes(searchValue?.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSelectOption = (option: Option) => {
    setSearchJob(option.label);
    setIsDropDown(false);
    // setFilteredOptions(_data);
    setSearchValue(option?.label);
    console.log('option', option);
    
  };

  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => {
    const option = filteredOptions[index];

    
    return (
      <div
        style={style}
        onClick={(e) => {
          e.stopPropagation();
          handleSelectOption(option);
          setSelectIndex(option.value);
          setIsDropDown(false);
          setFilteredOptions(_data);
        }}
        className={`select-row ${option.value === selectIndex && "active"}`}
      >
        {option.label}
      </div>
    );
  };
  useEffect(() => {
    setFilteredOptions(_data);
    const closeDropdown = (e: any) => {
      if (!btnRef?.current?.contains(e.target)) {
        setIsDropDown(false);
        setFilteredOptions(_data);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, [_data]);

  useEffect(() => {
    const closeDropdown = (e: any) => {
      if (!btnRef?.current?.contains(e.target)) {
        setSearchJob(searchValue);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, [searchValue]);
  const height = Math.min(filteredOptions.length * 50, 220);
  return (
    <div
      ref={btnRef}
      style={{ position: "relative", width: "100%" }}
      onFocus={() => {
        setIsDropDown(!isDropDown);
        setFilteredOptions(_data);
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={handleInputChange}
        style={style ? style : { width: "100%", border: "none", color: "#000" }}
      />
      {isDropDown && (
        <List
          height={height}
          itemCount={filteredOptions.length}
          itemSize={30}
          width={"100%"}
          style={{
            position: "absolute",
            top: "100%",
            backgroundColor: "#fff",
            borderRadius: "5px",
            zIndex: "1000",
            lineHeight:'1.4em',
          }}
        >
          {Row}
        </List>
      )}
    </div>
  );
};

export default memo(CustomSelectTwo);
