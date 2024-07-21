import Process from "./Process";
import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[100px] box-border max-w-full text-left text-17xl text-gray-300 font-manrope mq750:pb-[65px] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start py-0 px-[120px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[60px] mq750:pr-[60px] mq750:box-border">
        <div className="self-stretch flex flex-row items-center justify-center gap-[24px] max-w-full lg:flex-wrap">
          <div className="flex-[0.8299] rounded-xl bg-antiquewhite flex flex-col items-start justify-center py-[72px] px-[50px] box-border min-w-[382px] max-w-full lg:flex-1 mq450:pt-[47px] mq450:pb-[47px] mq450:box-border mq750:pl-[25px] mq750:pr-[25px] mq750:box-border mq750:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[50px] mq750:gap-[25px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.72px] leading-[50.4px] font-extrabold font-inherit mq450:text-3xl mq450:leading-[30px] mq1050:text-10xl mq1050:leading-[40px]">{`Simple & easy way to find your dream Appointment`}</h1>
                <div className="self-stretch relative text-lg leading-[32.4px]">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}</div>
              </div>
              <button className="cursor-pointer [border:none] py-4 px-6 bg-gray-300 rounded-3xs flex flex-row items-start justify-start whitespace-nowrap hover:bg-dimgray-300">
                <div className="relative text-base leading-[16px] font-semibold font-manrope text-white text-left inline-block min-w-[90px]">
                  Get Started
                </div>
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[382px] max-w-full text-9xl lg:flex-1 mq750:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[24px] mq750:flex-wrap">
              <Process
                iconSearch="/icon--search.svg"
                search="Search "
                yourLocation="your location"
              />
              <Process
                iconSearch="/eye.svg"
                search="Visit "
                yourLocation="Appointment"
                propHeight="unset"
                propPadding="12px 30px"
                propPadding1="50px 0px 0px"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[24px] mq750:flex-wrap">
              <Process
                iconSearch="/icon--wallet.svg"
                search="Get your "
                yourLocation="dream house"
                propHeight="200px"
                propPadding="0px 30px 0px"
                propPadding1="2401.9px 0px 0px"
              />
              <Process
                iconSearch="/icon--happy.svg"
                search="Enjoy your "
                yourLocation="Appointment"
                propHeight="200px"
                propPadding="0px 30px 0px"
                propPadding1="2401.9px 0px 0px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
