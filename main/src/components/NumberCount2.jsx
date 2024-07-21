import { useMemo } from "react";
import PropTypes from "prop-types";

const NumberCount2 = ({
  className = "",
  icon,
  m,
  ownedFrom,
  propertiesTransactions,
  propLeft,
}) => {
  const icon2Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={`h-[213px] w-[225px] flex flex-col items-start justify-start gap-[18px] text-left text-27xl text-gray-300 font-manrope ${className}`}
    >
      <div className="w-[60px] h-[60px] relative flex items-center justify-center">
        <img
          className="w-full h-full object-contain absolute left-[0px] top-[30px] [transform:scale(2)]"
          loading="lazy"
          alt=""
          src={icon}
          style={icon2Style}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
        <b className="self-stretch relative tracking-[-0.92px] leading-[65px] font-extrabold mq450:text-9xl mq450:leading-[39px] mq1050:text-18xl mq1050:leading-[52px]">
          {m}
        </b>
        <div className="relative text-xl tracking-[-0.4px] leading-[28px] font-semibold text-slategray mq450:text-base mq450:leading-[22px]">
          <p className="m-0">{ownedFrom}</p>
          <p className="m-0">{propertiesTransactions}</p>
        </div>
      </div>
    </div>
  );
};

NumberCount2.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  m: PropTypes.string,
  ownedFrom: PropTypes.string,
  propertiesTransactions: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
};

export default NumberCount2;
