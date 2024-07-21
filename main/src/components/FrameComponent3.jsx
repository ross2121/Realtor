import NumberCount1 from "./NumberCount1";
import NumberCount from "./NumberCount";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`h-[413px] flex flex-row items-start justify-start pt-0 px-0 pb-[100px] box-border max-w-full text-left text-27xl text-gray-300 font-manrope mq450:pb-[65px] mq450:box-border ${className}`}
    >
      <div className="self-stretch bg-snow flex flex-col items-start justify-start py-[50px] px-[120px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[60px] mq750:pr-[60px] mq750:box-border">
        <div className="w-[1200px] flex-1 overflow-x-auto flex flex-row items-start justify-between gap-[20px] max-w-full">
          <NumberCount1
            icon="/icon.svg"
            m="$15.4M"
            ownedFrom="Owned from"
            propertiesTransactions="Properties transactions"
          />
          <NumberCount
            icon="/icon-1.svg"
            k="25K+"
            propertysForBuySellSucces={`Properties for Buy & sell Successfully`}
          />
          <NumberCount1
            icon="/icon-2.svg"
            m="500"
            ownedFrom="Daily completed "
            propertiesTransactions="transactions"
            propLeft="15px"
          />
          <NumberCount
            icon="/icon-2.svg"
            k="600+"
            propertysForBuySellSucces="Reagular Clients"
            propAlignSelf="unset"
            propHeight="185px"
            propLeft="15px"
            propAlignSelf1="stretch"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
