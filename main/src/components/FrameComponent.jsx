import Blog from "./Blog";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[100px] box-border max-w-full text-left text-17xl text-white font-manrope lg:pb-[65px] lg:box-border mq750:pb-[42px] mq750:box-border ${className}`}
    >
      <div className="flex-1 bg-gray-300 flex flex-col items-center justify-start py-[120px] px-5 box-border gap-[60px] max-w-full lg:pt-[78px] lg:pb-[78px] lg:box-border mq750:gap-[30px] mq750:pt-[51px] mq750:pb-[51px] mq750:box-border">
        <div className="w-[1200px] flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.72px] leading-[51px] font-extrabold font-inherit inline-block min-w-[210px] max-w-full mq450:text-3xl mq450:leading-[30px] mq1050:text-10xl mq1050:leading-[40px]">{`News & Consult`}</h1>
          <div className="flex flex-col items-start justify-start pt-[13.5px] px-0 pb-0 text-lg text-orangered">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <b className="relative leading-[18px] inline-block min-w-[92px]">
                  Explore All
                </b>
              </div>
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/icon--24px--v-arrow--right.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[1200px] flex flex-col items-start justify-start gap-[120px] max-w-full text-5xl lg:gap-[60px] mq750:gap-[30px]">
          <div className="w-[1200px] overflow-x-auto flex flex-row items-start justify-start gap-[24px] max-w-full">
            <Blog easyToAmbitiousDIYProject="9 Easy-to-Ambitious DIY Projects to Improve Your Home" />
            <Blog easyToAmbitiousDIYProject="Serie Shophouse Launch In July, Opportunity For Investors" />
            <Blog easyToAmbitiousDIYProject="Looking for a New Place? Use This Time to Create Your Wishlist" />
          </div>
          <div className="self-stretch rounded-3xs bg-silver-300 flex flex-col items-center justify-center py-10 px-0 box-border max-w-full text-center text-9xl text-gray-300">
            <div className="w-[1000px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[30px] max-w-full">
              <div className="w-[600px] flex flex-col items-center justify-start gap-[10px] max-w-full">
                <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.56px] leading-[38px] font-extrabold font-inherit mq450:text-3xl mq450:leading-[30px]">
                  For Recent Update, News.
                </h2>
                <div className="self-stretch relative text-lg leading-[32.4px]">
                  We helps businesses customize, automate and scale up their ad
                  production and delivery.
                </div>
              </div>
              <div className="w-[600px] flex flex-row flex-wrap items-start justify-start gap-[8px] max-w-full">
                <input
                  className="w-full [border:none] [outline:none] bg-gray-100 h-12 flex-1 rounded-3xs flex flex-row items-start justify-start pt-[13px] px-4 pb-3 box-border font-manrope font-semibold text-sm text-dimgray-200 min-w-[300px] max-w-full"
                  placeholder="Enter your Email"
                  type="text"
                />
                <button className="cursor-pointer [border:none] py-4 px-6 bg-gray-300 rounded-3xs flex flex-row items-start justify-start hover:bg-dimgray-300">
                  <div className="relative text-base leading-[16px] font-semibold font-manrope text-white text-left inline-block min-w-[78px]">
                    Subscribe
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
