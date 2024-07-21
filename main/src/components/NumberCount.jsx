import { useMemo } from "react";
import PropTypes from "prop-types";

const NumberCount = ({
  className = "",
  icon,
  k,
  propertysForBuySellSucces,
  propAlignSelf,
  propHeight,
  propLeft,
  propAlignSelf1,
}) => {
  const numberCount02Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      height: propHeight,
    };
  }, [propAlignSelf, propHeight]);

  const icon1Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const propertysForBuyStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  return (
    <div
      className={`self-stretch w-[225px] shrink-0 flex flex-col items-start justify-start gap-[18px] text-left text-27xl text-gray-300 font-manrope ${className}`}
      style={numberCount02Style}
    >
      <div className="w-[60px] h-[60px] relative flex items-center justify-center">
        <img
          className="w-full h-full object-contain absolute left-[0px] top-[30px] [transform:scale(2)]"
          alt=""
          src={icon}
          style={icon1Style}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
        <div className="self-stretch relative tracking-[-0.92px] leading-[65px] font-extrabold mq450:text-9xl mq450:leading-[39px] mq1050:text-18xl mq1050:leading-[52px]">
          {k}
        </div>
        <div
          className="relative text-xl tracking-[-0.4px] leading-[28px] font-semibold text-slategray mq450:text-base mq450:leading-[22px]"
          style={propertysForBuyStyle}
        >
          {propertysForBuySellSucces}
        </div>
      </div>
    </div>
  );
};

NumberCount.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  k: PropTypes.string,
  propertysForBuySellSucces: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propHeight: PropTypes.any,
  propLeft: PropTypes.any,
  propAlignSelf1: PropTypes.any,
};

export default NumberCount;
