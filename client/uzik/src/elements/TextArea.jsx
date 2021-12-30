// LIBRARY
import React, { useRef, useEffect, useCallback } from "react";

// STYLE
import styled from "styled-components";

const TextArea = ({ is_auto, value, placeholder, changeEvent, keyPress, onInput, ...props }) => {
  const ref = useRef(null);

  // textarea의 높이 자동 조절
  const handleResizeHeight = useCallback(() => {
    if (ref === null || ref.current === null) {
      return;
    }
    ref.current.style.height = '12px';
    ref.current.style.height = ref.current.scrollHeight + "px";
  }, []);

  useEffect(() => {
    if (ref === null || ref.current === null) {
      return;
    }
    ref.current.style.height = "12px";
    ref.current.style.height = ref.current.scrollHeight + "px";
  }, []);
  if (is_auto) {
    return (
      <TextAreaStyle
        value={value}
        placeholder={placeholder}
        onChange={changeEvent}
        onKeyPress={keyPress}
        ref={ref}
        onInput={handleResizeHeight}
        {...props}
      />
    );
  } else {
    return (
      <TextAreaStyle
        value={value}
        placeholder={placeholder}
        onChange={changeEvent}
        onKeyPress={keyPress}
        {...props}
      />
    );
  }
};

const TextAreaStyle = styled.textarea`
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.bgColor};
  color: black;
  font-size: ${(props) => props.fontSize};
  border: 1px solid #718093;
  border-radius: ${(props) => props.radius};
  padding: ${(props) => props.padding};
  ${(props) => props.addstyle()};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: lightgray;
  }
`;

TextArea.defaultProps = {
  width: "100%",
  height: "100px",
  bgColor: "none",
  color: "black",
  padding: "6px 3px 3px 3px",
  radius: "12px",
  fontSize: "12px",
  keyPress: () => {},
  changeEvent: () => {},
  addstyle: () => {},
};

export default TextArea;