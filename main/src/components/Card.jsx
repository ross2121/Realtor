import PropTypes from "prop-types";

const Card = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start min-w-[365px] max-w-full text-left text-base text-gray-300 font-manrope ${className}`}
    >
      <div className="self-stretch h-[260px] relative rounded-t-3xs rounded-b-none" />
      <div className="self-stretch rounded-t-none rounded-b-3xs bg-snow flex flex-col items-start justify-start py-7 px-[19px] border-[1px] border-solid border-mistyrose">
        <div className="self-stretch flex flex-col items-start justify-start gap-[27px]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
            <img
              className="h-6 w-6 relative"
              loading="lazy"
              alt=""
              src="/icon--map-2.svg"
            />
            <div className="flex-1 relative leading-[29px] font-semibold">
              2861 62nd Ave, Oakland, CA 94605
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[21px] text-dimgray-200">
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
              <div className="w-[152px] flex flex-row items-center justify-start gap-[12px]">
                <img className="h-5 w-5 relative" alt="" src="/icon-.svg" />
                <div className="flex-1 relative leading-[16px] font-semibold">
                  3 Bed Room
                </div>
              </div>
              <div className="flex flex-row items-center justify-start py-0 pr-[74px] pl-0 gap-[12px]">
                <img className="h-5 w-5 relative" alt="" src="/icon--1.svg" />
                <div className="relative leading-[16px] font-semibold inline-block min-w-[46px]">
                  1 Bath
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
              <div className="w-[152px] flex flex-row items-center justify-start gap-[12px]">
                <img className="h-5 w-5 relative" alt="" src="/icon--2.svg" />
                <div className="flex-1 relative leading-[16px] font-semibold">
                  1,032 sqft
                </div>
              </div>
              <div className="flex flex-row items-center justify-start py-0 pr-[71px] pl-0 gap-[12px]">
                <img
                  className="h-5 w-5 relative"
                  alt=""
                  src="/iocn--menuimage.svg"
                />
                <div className="relative leading-[16px] font-semibold inline-block min-w-[49px]">
                  Family
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[31px] text-5xl mq450:flex-wrap mq450:gap-[15px]">
            <button className="cursor-pointer [border:none] py-4 px-6 bg-gray-300 flex-[0.6933] rounded-3xs flex flex-row items-start justify-start box-border min-w-[101px] whitespace-nowrap hover:bg-dimgray-300 mq450:flex-1">
              <div className="flex-1 relative text-base leading-[16px] font-semibold font-manrope text-white text-center">
                View Details
              </div>
            </button>
            <b className="flex-1 relative tracking-[-0.48px] leading-[33px] inline-block min-w-[101px] whitespace-nowrap mq450:text-lgi mq450:leading-[26px]">
              $649,900
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
};

export default Card;
