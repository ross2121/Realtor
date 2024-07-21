import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1200px] flex flex-row flex-wrap items-start justify-start gap-[157px] max-w-full text-left text-17xl text-gray-300 font-manrope lg:gap-[78px] mq450:gap-[20px] mq750:gap-[39px] ${className}`}
    >
      <div className="h-[589px] flex-1 relative [filter:drop-shadow(-50px_50px_0px_#fd650b)] rounded-3xs min-w-[339px] max-w-full mq450:min-w-full" />
      <div className="flex-1 flex flex-col items-start justify-start pt-[59.5px] px-0 pb-0 box-border min-w-[339px] max-w-full mq450:min-w-full mq750:pt-[39px] mq750:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[60px] max-w-full mq750:gap-[30px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.72px] leading-[50.4px] font-extrabold font-inherit mq450:text-3xl mq450:leading-[30px] mq1050:text-10xl mq1050:leading-[40px]">
                Best rated host on popular rental sites
              </h1>
              <div className="self-stretch relative text-lg leading-[32.4px] text-dimgray-200">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. In a free hour, when our power of choice is
                untrammelled.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full text-lg">
              <div className="self-stretch flex flex-row items-center justify-start gap-[14px] max-w-full">
                <input
                  className="border-snow accent-snow cursor-pointer m-0 h-6 w-6 relative"
                  checked={true}
                  type="radio"
                  name="radioGroup-1"
                />
                <div className="flex-1 relative leading-[33px] font-semibold inline-block max-w-[calc(100%_-_38px)]">
                  Find excellent deals
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[14px] max-w-full">
                <input
                  className="cursor-pointer m-0 h-6 w-6 relative"
                  type="radio"
                />
                <div className="flex-1 relative leading-[33px] font-semibold inline-block max-w-[calc(100%_-_38px)]">{`Friendly host & Fast support`}</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[14px] max-w-full">
                <input
                  className="cursor-pointer m-0 h-6 w-6 relative"
                  type="radio"
                />
                <div className="flex-1 relative leading-[33px] font-semibold inline-block max-w-[calc(100%_-_38px)]">
                  Secure payment system
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-4 px-6 bg-gray-300 rounded-3xs flex flex-row items-start justify-start whitespace-nowrap hover:bg-dimgray-300">
            <div className="relative text-base leading-[16px] font-semibold font-manrope text-white text-left inline-block min-w-[86px]">
              Learn more
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
