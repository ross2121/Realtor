import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[100px] box-border max-w-full text-left text-9xl text-gray-300 font-manrope mq750:pb-[65px] mq750:box-border ${className}`}
    >
      <div className="w-[1440px] flex flex-col items-end justify-start gap-[25px] max-w-full">
        <div className="w-[885px] flex flex-row items-start justify-end py-0 px-[215px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq1050:pl-[107px] mq1050:pr-[107px] mq1050:box-border">
          <div className="flex-1 flex flex-col items-start justify-start max-w-full mq450:gap-[25px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[73px] mq450:gap-[36px]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[203px]">
                  <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.56px] leading-[38px] font-extrabold font-inherit mq450:text-3xl mq450:leading-[30px]">
                    Taylor Wilson
                  </h2>
                  <div className="self-stretch relative text-lg leading-[33px] font-semibold">
                    Product Manager - Static Mania
                  </div>
                </div>
                <img
                  className="h-[51px] w-[69px] relative object-contain"
                  loading="lazy"
                  alt=""
                  src="/shape.svg"
                />
              </div>
              <h3 className="m-0 self-stretch relative text-5xl leading-[39.6px] font-semibold font-inherit text-dimgray-200 mq450:text-lgi mq450:leading-[32px]">{`Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last. `}</h3>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-[215px] gap-[270px] text-lg text-gray-200 mq450:gap-[67px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1050:flex-wrap mq1050:gap-[135px] mq1050:pl-[107px] mq1050:pr-[107px] mq1050:box-border">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--24px--v-arrow--left.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <b className="relative leading-[18px] inline-block min-w-[79px]">
                Previews
              </b>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px] text-orangered">
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <b className="relative leading-[18px] inline-block min-w-[42px]">
                Next
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
      <textarea
        className="[border:none] bg-gainsboro-200 h-[344px] w-auto [outline:none] flex-1 relative rounded-lg max-w-full ml-[-1225px]"
        rows={17}
        cols={23}
      />
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
