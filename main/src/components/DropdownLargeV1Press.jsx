import { useMemo } from "react";
import PropTypes from "prop-types";

const DropdownLargeV1Press = ({
  className = "",
  pressed,
  propDisplay,
  propMinWidth,
}) => {
  const pressedStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      className={`rounded-3xs bg-white flex flex-col items-start justify-start py-4 px-[15px] text-left text-lg text-dimgray-200 font-manrope border-[1px] border-solid border-lightgray-100 ${className}`}
    >
      <div className="flex flex-row items-center justify-start gap-[12px]">
        <b className="relative leading-[18px]" style={pressedStyle}>
          {pressed}
        </b>
        <img
          className="h-6 w-6 relative"
          alt=""
          src="/icon--24px--arrowdown.svg"
        />
      </div>
    </div>
  );
};

DropdownLargeV1Press.propTypes = {
  className: PropTypes.string,
  pressed: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default DropdownLargeV1Press;
