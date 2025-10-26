import { useState } from "react";
import styled from "styled-components";
import ArrowIcon from "@/assets/image/ic_arrow_down.svg";

const SelectButtonStyled = styled.button`
  display: flex;
  width: 130px;
  height: 42px;
  padding: 12px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  background: #fff;
  cursor: pointer;
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const ArrowWrapper = styled.div`
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.2s ease;
  display: flex;
  align-items: center;
`;

const Dropdown = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 130px;
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 12px;
  background: #fff;
  z-index: 1000;
`;

const DropdownItem = styled.li`
  padding: 12px 20px;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray50};
  }

  &:first-child {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  &:last-child {
    border-bottom: none;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;

function Select({ options = [], value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <SelectButtonStyled onClick={() => setIsOpen(!isOpen)}>
        {value || "선택하세요"}
        <ArrowWrapper $isOpen={isOpen}>
          <img src={ArrowIcon} alt="arrow" width="16" height="16" />
        </ArrowWrapper>
      </SelectButtonStyled>

      {isOpen && (
        <Dropdown>
          {options.map((option, i) => (
            <DropdownItem key={i} onClick={() => handleSelect(option)}>
              {option}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </DropdownContainer>
  );
}

export default Select;
