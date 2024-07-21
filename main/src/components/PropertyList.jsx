import Card from "./Card";
import PropTypes from "prop-types";

const PropertyList = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[100px] box-border max-w-full text-left text-17xl text-gray-300 font-manrope lg:pb-[65px] lg:box-border mq750:pb-[42px] mq750:box-border ${className}`}
    >
      <div className="w-[1200px] flex flex-col items-start justify-start gap-[60px] max-w-full lg:gap-[30px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px] max-w-full mq750:flex-wrap">
            <h1 className="m-0 relative text-inherit tracking-[-0.72px] leading-[51px] font-extrabold font-inherit inline-block max-w-full mq450:text-3xl mq450:leading-[30px] mq1050:text-10xl mq1050:leading-[40px]">
              Featured Properties
            </h1>
            <div className="flex flex-row items-center justify-start gap-[8px] text-lg text-orangered">
              <b className="relative leading-[18px] inline-block min-w-[92px]">
                Explore All
              </b>
              <img
                className="h-6 w-6 relative"
                loading="lazy"
                alt=""
                src="/icon--24px--v-arrow--right.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10px] text-lg text-silver-100">
            <b className="flex-1 relative leading-[18px] inline-block text-gray-300 min-w-[148px] max-w-[292px]">
              Resident Property
            </b>
            <b className="flex-1 relative leading-[18px] inline-block min-w-[148px] max-w-[292px]">
              Commercial Property
            </b>
            <b className="flex-1 relative leading-[18px] inline-block min-w-[148px] max-w-[292px]">
              Industrial Property
            </b>
            <b className="flex-1 relative leading-[18px] inline-block min-w-[148px] max-w-[292px]">
              Agriculture Property
            </b>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px_22px] min-h-[1048px] max-w-full text-base">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

PropertyList.propTypes = {
  className: PropTypes.string,
};

export default PropertyList;
