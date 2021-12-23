// LIBRARY
import React from "react";
import { FadeLoader } from "react-spinners";
import PropTypes from "prop-types";

// STYLE
import './index.scss'

const Spinner = (props: any) => {
  const visible = props.visible;

  return (
    <>
      {!visible ? (
        <div className="spinner">
          <FadeLoader color="rgba(251,216,134,1);" />
        </div>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
};

// Spinner.propTypes = {
//   visible: PropTypes.bool,
// };

export default Spinner;
