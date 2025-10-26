import styled from "styled-components";

const InputStyled = styled.input`
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

function Input({
  type,
  placeholder,
  onCange,
  value,
  disabled,
  name,
  id,
  ...props
}) {
  return (
    <InputStyled
      type={type}
      placeholder={placeholder}
      onCange={onCange}
      value={value}
      disabled={disabled}
      name={name}
      id={id}
      {...props}
    />
  );
}

export default Input;
