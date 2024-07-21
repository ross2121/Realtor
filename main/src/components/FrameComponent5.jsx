import TextFieldLargeWithIcon from "./TextFieldLargeWithIcon";
import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[100px] box-border max-w-full text-left text-27xl text-gray-300 font-manrope mq450:pb-[42px] mq450:box-border mq1050:pb-[65px] mq1050:box-border ${className}`}
    >
      <div className="flex-1 bg-floralwhite overflow-hidden flex flex-row items-start justify-start py-[50px] pr-0 pl-[120px] box-border gap-[100px] max-w-full lg:flex-wrap lg:pl-5 lg:pr-5 lg:box-border mq450:gap-[25px] mq450:pt-[21px] mq450:pb-[21px] mq450:box-border mq750:gap-[50px] mq1050:pt-8 mq1050:pb-8 mq1050:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[40px] min-w-[396px] max-w-full mq750:gap-[20px] mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.92px] leading-[64.4px] font-extrabold font-inherit mq450:text-9xl mq450:leading-[39px] mq1050:text-18xl mq1050:leading-[52px]">
              <p className="m-0">Find a perfect property</p>
              <p className="m-0">Where you'll love to live</p>
            </h1>
            <div className="self-stretch relative text-xl leading-[36px] text-dimgray-200 mq450:text-base mq450:leading-[29px]">
              We helps businesses customize, automate and scale up their ad
              production and delivery.
            </div>
          </div>
          <div className="self-stretch rounded-2xl bg-white flex flex-col items-start justify-start p-6 box-border max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border">
            <form className="m-0 self-stretch flex flex-col items-center justify-start gap-[38px] max-w-full mq750:gap-[19px]">
              <div className="flex flex-row items-center justify-center py-0 px-0 gap-[16px] mq750:flex-wrap">
                <button className="cursor-pointer [border:none] py-4 px-[71px] bg-gray-400 rounded-3xs flex flex-row items-center justify-center hover:bg-dimgray-300">
                  <b className="relative text-lg leading-[18px] inline-block font-manrope text-white text-left min-w-[33px]">
                    Buy
                  </b>
                </button>
                <button className="cursor-pointer [border:none] py-4 px-[71px] bg-gainsboro-100 rounded-3xs flex flex-row items-center justify-center hover:bg-silver-200">
                  <b className="relative text-lg leading-[18px] inline-block font-manrope text-gray-300 text-left min-w-[33px]">
                    Sell
                  </b>
                </button>
                <button className="cursor-pointer [border:none] py-4 px-[67px] bg-gainsboro-100 rounded-3xs flex flex-row items-center justify-center hover:bg-silver-200">
                  <b className="relative text-lg leading-[18px] inline-block font-manrope text-gray-300 text-left min-w-[42px]">
                    Rent
                  </b>
                </button>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
                  <div className="self-stretch rounded-3xs bg-white box-border overflow-hidden flex flex-col items-start justify-start py-3 px-[15px] max-w-full border-[1px] border-solid border-lightgray-100">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[14px] max-w-full">
                      <input
                        className="w-[calc(100%_-_20px)] [border:none] [outline:none] font-semibold font-manrope text-lg bg-[transparent] h-[33px] flex-1 relative leading-[32.4px] text-dimgray-100 text-left inline-block min-w-[150px] max-w-[calc(100%_-_34px)] p-0"
                        placeholder="City/Street"
                        type="text"
                      />
                      <img
                        className="h-5 w-5 relative"
                        alt=""
                        src="/icon--20px--map.svg"
                      />
                    </div>
                  </div>
                  <TextFieldLargeWithIcon />
                  <TextFieldLargeWithIcon />
                </div>
                <button className="cursor-pointer [border:none] py-[21px] px-6 bg-gray-300 self-stretch rounded-3xs flex flex-row items-start justify-start box-border max-w-full hover:bg-dimgray-300">
                  <b className="flex-1 relative text-lg leading-[18px] inline-block font-manrope text-white text-center max-w-full">
                    Search
                  </b>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[98.5px] px-0 pb-0 box-border min-w-[396px] max-w-full mq750:pt-16 mq750:box-border mq750:min-w-full">
          <div className="self-stretch h-[503px] flex flex-row items-start justify-start py-0 px-0 box-border max-w-full">
            <div className="self-stretch w-[686px] relative [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] shrink-0 [debug_commit:1de1738] max-w-[113%]" />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
