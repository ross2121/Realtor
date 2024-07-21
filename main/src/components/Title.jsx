import PropTypes from "prop-types";

const Title = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-17xl text-gray-300 font-manrope ${className}`}
    >
      <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.72px] leading-[51px] font-extrabold font-inherit mq450:text-3xl mq450:leading-[30px] mq1050:text-10xl mq1050:leading-[40px]">{`Real Estate News & Blogs`}</h1>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px] max-w-full text-lg text-dimgray-100">
        <div className="flex-1 rounded-3xs bg-white box-border overflow-hidden flex flex-row items-center justify-start py-3 px-[15px] min-w-[292px] max-w-full border-[1px] border-solid border-lightgray-100 mq450:gap-[98px]">
          <div className="h-8 flex-1 flex flex-row items-center justify-between py-0 px-0 box-border max-w-full gap-[20px]">
            <input
              className="w-[162px] [border:none] [outline:none] font-semibold font-manrope text-lg bg-[transparent] h-[33px] relative leading-[32.4px] text-dimgray-100 text-left inline-block p-0"
              placeholder="Enter your address"
              type="text"
            />
            <img
              className="h-6 w-6 relative"
              alt=""
              src="/icon--24px--search-11.svg"
            />
          </div>
        </div>
        <div className="flex-1 rounded-3xs bg-white box-border flex flex-col items-start justify-start py-4 px-[15px] min-w-[292px] max-w-full border-[1px] border-solid border-lightgray-100">
          <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[12px]">
            <b className="w-[321.3px] relative leading-[18px] font-bold inline-block shrink-0 max-w-[calc(100%_-_36px)]">
              Category
            </b>
            <img
              className="h-6 w-6 relative"
              alt=""
              src="/icon--24px--arrowdown1.svg"
            />
          </div>
        </div>
        <div className="flex-1 rounded-3xs bg-white box-border flex flex-col items-start justify-start py-4 px-[15px] min-w-[292px] max-w-full border-[1px] border-solid border-lightgray-100">
          <div className="self-stretch flex flex-row items-center justify-start gap-[12px] max-w-full">
            <b className="flex-1 relative leading-[18px] inline-block max-w-[calc(100%_-_36px)]">
              Popular
            </b>
            <img
              className="h-6 w-6 relative"
              alt=""
              src="/icon--24px--arrowdown1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Title.propTypes = {
  className: PropTypes.string,
};

export default Title;
