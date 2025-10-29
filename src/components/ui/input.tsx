import type { ComponentPropsWithoutRef } from "react";
import { styled } from "styled-components";

//props 타입설정
//개선사항 : label, error추가
interface InputProps extends ComponentPropsWithoutRef<"input"> {}

const Input = (props: InputProps) => {
  return <InputStyled {...props} />;
};

const InputStyled = styled("input")`
  display: flex;
  width: 325px;
  height: 42px;
  padding: 9px 20px 9px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border: none;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.gray100};
`;

export default Input;
