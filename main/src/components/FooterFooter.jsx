import PropTypes from "prop-types";

const FooterFooter = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-white flex flex-col items-center justify-center py-20 px-5 box-border max-w-full text-left text-xl text-orangered font-marko-one mq750:pt-[52px] mq750:pb-[52px] mq750:box-border ${className}`}
    >
      <div className="w-[1200px] flex flex-col items-start justify-start gap-[120px] max-w-full lg:gap-[60px] mq750:gap-[30px]">
        <div className="self-stretch flex flex-row items-center justify-start [row-gap:20px] max-w-full mq1050:flex-wrap">
          <div className="w-[341.7px] flex flex-col items-start justify-start gap-[43px] min-w-[341.7px] max-w-full mq450:gap-[21px] mq450:min-w-full mq1050:flex-1">
            <div className="flex flex-row items-center justify-start py-0 pr-[213px] pl-0 gap-[11px] mq450:flex-wrap mq450:pr-5 mq450:box-border">
              <img
                className="h-10 w-10 relative overflow-hidden shrink-0"
                alt=""
                src="/realestate-1-1.svg"
              />
              <div className="relative leading-[36px] inline-block min-w-[77px] mq450:text-base mq450:leading-[29px]">
                Relasto
              </div>
            </div>
            <div className="self-stretch h-[190px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[28px] text-base text-gray-300 font-manrope mq450:h-auto">
              <div className="self-stretch relative leading-[25.6px] font-semibold">
                <p className="m-0">59 Bervely Hill Ave, Brooklyn Town,</p>
                <p className="m-0">New York, NY 5630, CA, US</p>
              </div>
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[26px] font-semibold inline-block min-w-[126px]">
                  +(123) 456-7890
                </div>
                <div className="relative leading-[26px] font-semibold inline-block min-w-[113px] whitespace-nowrap">
                  info@mail.com
                </div>
              </div>
              <div className="flex flex-row items-start justify-center py-0 pr-[143px] pl-0 gap-[12px] mq450:flex-wrap mq450:pr-5 mq450:box-border">
                <img
                  className="h-[30px] w-[30px] relative min-h-[30px]"
                  loading="lazy"
                  alt=""
                  src="/frame-23.svg"
                />
                <img
                  className="h-[30px] w-[30px] relative min-h-[30px]"
                  loading="lazy"
                  alt=""
                  src="/frame-24.svg"
                />
                <img
                  className="h-[30px] w-[30px] relative min-h-[30px]"
                  loading="lazy"
                  alt=""
                  src="/frame-25.svg"
                />
                <img
                  className="h-[30px] w-[30px] relative min-h-[30px]"
                  loading="lazy"
                  alt=""
                  src="/frame-26.svg"
                />
                <img
                  className="h-[30px] w-[30px] relative min-h-[30px]"
                  loading="lazy"
                  alt=""
                  src="/frame-27.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-x-auto flex flex-row items-start justify-between py-5 px-0 box-border min-w-[601px] max-w-full gap-[20px] text-lg text-gray-300 font-manrope mq750:min-w-full">
            <div className="w-[156.8px] shrink-0 flex flex-col items-start justify-start gap-[20px]">
              <b className="self-stretch relative leading-[18px]">Features</b>
              <div className="self-stretch flex flex-col items-start justify-start gap-[14px] text-base">
                <div className="self-stretch relative leading-[24px] font-semibold">
                  Home v1
                </div>
                <div className="self-stretch relative leading-[24px] font-semibold">
                  Home v2
                </div>
                <div className="self-stretch relative leading-[24px] font-semibold">
                  About
                </div>
                <div className="self-stretch relative leading-[24px] font-semibold">
                  Contact
                </div>
                <div className="self-stretch relative leading-[24px] font-semibold">
                  Search
                </div>
              </div>
            </div>
            <div className="w-[156.8px] shrink-0 flex flex-col items-start justify-start gap-[20px]">
              <b className="self-stretch relative leading-[18px]">
                Information
              </b>
              <div className="self-stretch flex flex-col items-start justify-start gap-[14px] text-base">
                <div className="self-stretch relative leading-[24px] font-semibold">
                  Listing v1
                </div>
                <div className="self-stretch relative leading-[24px] font-semibold">
                  Listing v2
                </div>
                <div className="self-stretch relative leading-[24px] font-semibold">
                  Property Details
                </div>
                <div className="self-stretch relative leading-[24px] font-semibold">
                  Agent List
                </div>
                <div className="self-stretch relative leading-[24px] font-semibold">
                  Agent Profile
                </div>
              </div>
            </div>
            <div className="w-[156.8px] shrink-0 flex flex-col items-start justify-start gap-[20px]">
              <b className="self-stretch relative leading-[18px]">{`Documentation `}</b>
              <div className="self-stretch flex flex-col items-start justify-start gap-[14px] text-base">
                <div className="self-stretch relative leading-[24px] font-semibold">
                  Blog
                </div>
                <div className="self-stretch relative leading-[24px] font-semibold">
                  FAQ
                </div>
                <div className="self-stretch relative leading-[24px] font-semibold">
                  Privacy Policy
                </div>
                <div className="self-stretch relative leading-[24px] font-semibold">
                  License
                </div>
              </div>
            </div>
            <div className="w-[156.8px] shrink-0 flex flex-col items-start justify-start gap-[20px]">
              <b className="self-stretch relative leading-[18px]">Others</b>
              <div className="self-stretch flex flex-col items-start justify-start gap-[14px] text-base">
                <div className="self-stretch relative leading-[24px] font-semibold whitespace-nowrap">
                  Log in
                </div>
                <div className="self-stretch relative leading-[24px] font-semibold">
                  Enter OTP
                </div>
                <div className="self-stretch relative leading-[24px] font-semibold">
                  New Password
                </div>
                <div className="self-stretch relative leading-[24px] font-semibold">
                  Reset Password
                </div>
                <div className="self-stretch relative leading-[24px] font-semibold">
                  Create Account
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch relative text-base leading-[16px] font-semibold font-manrope text-gray-300">
          © 2022. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

FooterFooter.propTypes = {
  className: PropTypes.string,
};

export default FooterFooter;
