// LIBRARY
import React from 'react';

// STYLE
import styled from 'styled-components';

const Input = ({
  id,
  name,
  multiple,
  type,
  placeholder,
  value,
  changeEvent,
  keyPress,
  ...props
}) => {
  return (
    <InputStyle
      id={id}
      name={name}
      multiple
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={changeEvent}
      onKeyPress={keyPress}
      {...props}
    />
  );
};

const InputStyle = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  background: white;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border: 1px solid #718093;
  border-radius: ${(props) => props.radius};
  box-shadow: ${(props) => props.shadow};
  font-size: ${(props) => props.fontSize};
  ${(props) => props.addstyle()}
  &:focus {
    color: black;
    background: white;
    outline: none;
    &::placeholder {
      color: black;
    }
    &::-webkit-input-placeholder {
      color: black;
    }
    &:-ms-input-placeholder {
      color: black;
    }
  }
  &::placeholder {
    color: lightgray;
  }
  &::-webkit-input-placeholder {
    color: lightgray;
  }
  &:-ms-input-placeholder {
    color: lightgray;
  }
`;

Input.defaultProps = {
  width: '100%',
  padding: '6px 0',
  color: 'black',
  bgColor: 'none',
  fontSize: '14px',
  type: 'text',
  addstyle: () => {},
  changeEvent: () => {},
  keyPress: () => {},
};

export default Input;
