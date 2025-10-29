import { useState, type ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import ArrowIcon from "@/assets/image/ic_arrow_down.svg";

interface SelectProps extends ComponentPropsWithoutRef<"select"> {
  value: string;
  options: string[];
  // 내가 구현한건 진짜 select가 아니고 커스텀이여서 React.ChangeEvent같은 이벤트 객체가 없다
  // 그래서 onChange 사용 불가
  onValueChange: (value: string) => void;
}

const Select = ({ options = [], value, onValueChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    onValueChange(option);
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
};

export default Select;

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

const ArrowWrapper = styled.div<{ $isOpen: boolean }>`
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
