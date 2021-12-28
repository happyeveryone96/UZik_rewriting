// LIBRARY
import styled from "styled-components";

const Button = ({ is_float, children, clickEvent, ...props }) => {
  return (
    <ButtonStyle onClick={clickEvent} {...props}>
      {children}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  color: "black",
  bgColor: "white",
  fontSize: "14px",
  padding: "12px 0px",
  cursor: "pointer",
  addstyle: () => {},
  clickEvent: () => {},
};

const ButtonStyle = styled.button`
  min-width: 40px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  border: none;
  cursor: pointer;
  ${(props) => props.addstyle()};
  align-items: ${(props) => props.alignItems};
  border-radius: ${(props) => props.borderRadius};
  &:hover {
    background: ${(props) => props.hoverBackground};
  }
`;

export default Button;
