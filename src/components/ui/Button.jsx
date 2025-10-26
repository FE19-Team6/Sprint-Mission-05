import styled from "styled-components";

const ButtonStyled = styled.button`
  display: flex;
  height: 42px;
  padding: 12px 23px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;

  ${({ variant, theme }) =>
    variant === "primary" &&
    `
    background-color: ${theme.colors.primary100};
    color: white;
    border: none;
    
    &:hover {
      background-color: ${theme.colors.primary300};
    }
  `}
`;

function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  ...props
}) {
  return (
    <ButtonStyled variant={variant} type={type} onClick={onClick} {...props}>
      {children}
    </ButtonStyled>
  );
}

export default Button;
