import PropTypes from "prop-types";

const FindAppointment = ({ className = "" }) => {
  return (
    <div
      className={`w-[1200.1px] flex flex-row flex-wrap items-start justify-start gap-[85px] max-w-full text-left text-17xl text-gray-300 font-manrope lg:gap-[42px] mq750:gap-[21px] mq750:overflow-x-auto ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-[101px] px-0 pb-0 box-border min-w-[362px] max-w-full mq450:pt-[66px] mq450:box-border mq450:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[60px] mq750:gap-[30px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.72px] leading-[50.4px] font-extrabold font-inherit mq450:text-3xl mq450:leading-[30px] mq1050:text-10xl mq1050:leading-[40px]">{`Simple & easy way to find your dream Appointment`}</h1>
            <div className="self-stretch relative text-lg leading-[32.4px] text-dimgray-200">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. In a free hour, when our power of choice is untrammelled
              and when nothing prevents our being able to do what we like best,
              every pleasure is to be welcomed.
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-4 px-6 bg-gray-300 rounded-3xs flex flex-row items-start justify-start whitespace-nowrap hover:bg-dimgray-300">
            <div className="relative text-base leading-[16px] font-semibold font-manrope text-white text-left inline-block min-w-[90px]">
              Get Started
            </div>
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start gap-[20px] min-w-[547px] max-w-full">
        <div className="h-[561px] flex-1 flex flex-col items-start justify-start gap-[16px] shrink-0 [debug_commit:1de1738]">
          <div className="self-stretch flex-1 relative rounded-3xs" />
          <div className="self-stretch h-[218px] relative rounded-3xs" />
        </div>
        <div className="h-[561px] flex-1 flex flex-col items-start justify-start gap-[16px] shrink-0 [debug_commit:1de1738]">
          <div className="self-stretch h-[218px] relative rounded-3xs" />
          <div className="self-stretch flex-1 relative rounded-3xs" />
        </div>
      </div>
    </div>
  );
};

FindAppointment.propTypes = {
  className: PropTypes.string,
};

export default FindAppointment;
