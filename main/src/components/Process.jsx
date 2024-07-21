import { useMemo } from "react";
import PropTypes from "prop-types";

const Process = ({
  className = "",
  iconSearch,
  search,
  yourLocation,
  propHeight,
  propPadding,
  propPadding1,
}) => {
  const process01Style = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding,
    };
  }, [propHeight, propPadding]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div
      className={`h-[200px] flex-1 rounded-xl bg-linen flex flex-col items-start justify-center pt-0 px-[30px] pb-0 box-border min-w-[211px] text-left text-9xl text-gray-300 font-manrope ${className}`}
      style={process01Style}
    >
      <div
        className="self-stretch flex flex-col items-start justify-start pt-[2513.9px] px-0 pb-0 gap-[20px] lg:pt-[1062px] lg:box-border mq750:pt-[690px] mq750:box-border"
        style={frameDivStyle}
      >
        <img
          className="w-[30px] h-[30px] relative"
          loading="lazy"
          alt=""
          src={iconSearch}
        />
        <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.56px] leading-[37.8px] font-extrabold font-inherit mq450:text-3xl mq450:leading-[30px]">
          <p className="m-0">{search}</p>
          <p className="m-0">{yourLocation}</p>
        </h2>
      </div>
    </div>
  );
};

Process.propTypes = {
  className: PropTypes.string,
  iconSearch: PropTypes.string,
  search: PropTypes.string,
  yourLocation: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propPadding: PropTypes.any,
  propPadding1: PropTypes.any,
};

export default Process;
