import Button from "@/components/ui/Button";
import Input from "@/components/ui/input";
import Select from "@/components/ui/Select";
import useFilter from "@/pages/product/module/filter/uesFilter";
import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 24px;
  width: 100%;

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }

  h2 {
    margin-bottom: 0;
  }
`;

const SearchInput = styled(Input)`
  margin-left: auto;
  flex: 1;
  max-width: 400px;
`;

const RegisterButton = styled(Button)`
  white-space: nowrap;
`;

const SortSelect = styled(Select)`
  min-width: 120px;
`;

function Filter({ onSearchChange, onSortChange }) {
  const { sort, setSort, searchKeyword, handleSearch } = useFilter({
    onSearchChange,
    onSortChange,
  });

  return (
    <FilterContainer>
      <h2>전체 상품</h2>
      <SearchInput
        type="text"
        placeholder="검색할 상품을 입력해주세요"
        onChange={handleSearch}
        value={searchKeyword}
      />
      <RegisterButton type="button">상품 등록하기</RegisterButton>
      <SortSelect
        options={["최신순", "좋아요순"]}
        value={sort}
        onChange={setSort}
      />
    </FilterContainer>
  );
}

export default Filter;
