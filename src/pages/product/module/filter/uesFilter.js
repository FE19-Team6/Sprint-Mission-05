import { useState, useEffect } from "react";

function useFilter({ onSearchChange, onSortChange }) {
  const [sort, setSort] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (e) => {
    let searchVal = e.target.value;
    setSearchKeyword(searchVal);
    setQueryParams();
  };

  useEffect(() => {
    //디바운싱
    const timer = setTimeout(() => {
      // 처음에 조건문으로 나눴었는데... 앞 뒤 빈공간이 있는지도 확인하고
      // 검색어가 있을 때나 빈 문자열일 때 모두 onSearchChange 호출
      onSearchChange(searchKeyword);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchKeyword, onSearchChange]);

  useEffect(() => {
    if (onSortChange && sort) {
      onSortChange(sort);
    }
  }, [sort, onSortChange]);

  return {
    sort,
    setSort,
    searchKeyword,
    handleSearch,
  };
}

export default useFilter;
