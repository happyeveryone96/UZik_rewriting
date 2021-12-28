// LIBRARY
import { FadeLoader } from "react-spinners";

// STYLE
import './index.scss'

const Spinner = (props) => {
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

export default Spinner;
