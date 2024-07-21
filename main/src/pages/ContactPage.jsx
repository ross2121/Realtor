import Header from "../components/Header";

const ContactPage = () => {
  return (
    <div className="w-full relative bg-snow overflow-hidden flex flex-col items-start justify-start gap-[100px] text-center text-35xl text-gray-300 font-manrope">
      <div className="self-stretch flex flex-col items-start justify-start gap-[60px]">
        <Header />
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[120px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[44px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
              <div className="self-stretch relative tracking-[-1.08px] leading-[75.6px] font-extrabold">
                Get in touch
              </div>
              <div className="self-stretch relative text-lg leading-[32.4px] text-dimgray-100">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble.
              </div>
            </div>
            <div className="self-stretch rounded-3xs bg-white flex flex-row items-start justify-start p-[50px] gap-[50px] text-left text-9xl border-[1px] border-solid border-lightgray-100">
              <div className="flex-1 flex flex-col items-start justify-start gap-[40px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <div className="self-stretch relative tracking-[-0.56px] leading-[37.8px] font-extrabold">
                    Send a message
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-lg text-dimgray-100">
                    <div className="self-stretch rounded-3xs bg-white overflow-hidden flex flex-col items-start justify-start py-3.5 px-4 border-[1px] border-solid border-lightgray-100">
                      <div className="self-stretch flex flex-row items-center justify-start gap-[14px]">
                        <img
                          className="w-6 relative h-6"
                          alt=""
                          src="/icon--24px--user.svg"
                        />
                        <div className="flex-1 relative leading-[32.4px] font-semibold">
                          Full Name
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch rounded-3xs bg-white overflow-hidden flex flex-col items-start justify-start py-3.5 px-4 border-[1px] border-solid border-lightgray-100">
                      <div className="self-stretch flex flex-row items-center justify-start gap-[14px]">
                        <img
                          className="w-6 relative h-6"
                          alt=""
                          src="/icon--24px--email.svg"
                        />
                        <div className="flex-1 relative leading-[32.4px] font-semibold">
                          Email Address
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch rounded-3xs bg-white overflow-hidden flex flex-col items-start justify-start py-3.5 px-4 border-[1px] border-solid border-lightgray-100">
                      <div className="self-stretch flex flex-row items-center justify-start gap-[14px]">
                        <img
                          className="w-6 relative h-6"
                          alt=""
                          src="/icon--24px--call.svg"
                        />
                        <div className="flex-1 relative leading-[32.4px] font-semibold">
                          Phone Number
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch rounded-3xs bg-white box-border h-[152px] flex flex-row items-start justify-start py-3.5 px-[19px] border-[1px] border-solid border-lightgray-100">
                      <div className="flex-1 relative leading-[32.4px] font-semibold">
                        Message
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-3xs bg-gray-300 flex flex-row items-center justify-center py-5 px-6 text-center text-base text-white">
                  <div className="flex-1 relative leading-[16px] font-semibold">
                    Send Request
                  </div>
                </div>
              </div>
              <img
                className="w-px relative h-[534px] object-contain"
                alt=""
                src="/line-31.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-center gap-[40px] text-xl">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative tracking-[-0.4px] leading-[28px] font-semibold">
                      Office Address
                    </div>
                    <div className="self-stretch relative text-lg leading-[32.4px] font-semibold text-dimgray-100">
                      <p className="m-0">{`1421 San Pedro St, Los Angeles, `}</p>
                      <p className="m-0">CA 90015</p>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-lg text-dimgray-100">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                      <img
                        className="w-6 relative h-6"
                        alt=""
                        src="/icon--24px--call.svg"
                      />
                      <div className="flex-1 relative leading-[32.4px] font-semibold">
                        (123) 456-7890
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                      <img
                        className="w-6 relative h-6"
                        alt=""
                        src="/icon--24px--email.svg"
                      />
                      <div className="flex-1 relative leading-[32.4px] font-semibold">
                        info@mail.com
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[525.5px] flex flex-col items-start justify-start gap-[13px]">
                  <div className="self-stretch relative tracking-[-0.4px] leading-[28px] font-semibold">
                    Social
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                    <img
                      className="w-[30px] relative h-[30px]"
                      alt=""
                      src="/social-icon--facebook.svg"
                    />
                    <img
                      className="w-[30px] relative h-[30px]"
                      alt=""
                      src="/social-icon--linkedin.svg"
                    />
                    <img
                      className="w-[30px] relative h-[30px]"
                      alt=""
                      src="/social-icon--twitter.svg"
                    />
                    <img
                      className="w-[30px] relative h-[30px]"
                      alt=""
                      src="/social-icon--youtube.svg"
                    />
                    <img
                      className="w-[30px] relative h-[30px]"
                      alt=""
                      src="/social-icon--rss.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-col items-center justify-center py-20 px-[120px] text-left text-xl text-orangered font-marko-one">
        <div className="self-stretch flex flex-col items-start justify-start gap-[120px]">
          <div className="self-stretch flex flex-row items-center justify-start">
            <div className="w-[341.7px] flex flex-col items-start justify-start gap-[43px]">
              <div className="w-[341.7px] h-10 flex flex-row items-center justify-start gap-[11px]">
                <img
                  className="w-10 relative h-10 overflow-hidden shrink-0"
                  alt=""
                  src="/realestate-1-1.svg"
                />
                <div className="relative leading-[36px]">Relasto</div>
              </div>
              <div className="self-stretch h-[190px] flex flex-col items-start justify-start gap-[28px] text-base text-gray-300 font-manrope">
                <div className="self-stretch relative leading-[25.6px] font-semibold">
                  <p className="m-0">59 Bervely Hill Ave, Brooklyn Town,</p>
                  <p className="m-0">New York, NY 5630, CA, US</p>
                </div>
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[25.6px] font-semibold">
                    +(123) 456-7890
                  </div>
                  <div className="relative leading-[25.6px] font-semibold">
                    info@mail.com
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                  <img
                    className="w-[30px] relative h-[30px]"
                    alt=""
                    src="/frame-23.svg"
                  />
                  <img
                    className="w-[30px] relative h-[30px]"
                    alt=""
                    src="/frame-24.svg"
                  />
                  <img
                    className="w-[30px] relative h-[30px]"
                    alt=""
                    src="/frame-25.svg"
                  />
                  <img
                    className="w-[30px] relative h-[30px]"
                    alt=""
                    src="/frame-26.svg"
                  />
                  <img
                    className="w-[30px] relative h-[30px]"
                    alt=""
                    src="/frame-27.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 h-[214px] flex flex-row items-start justify-start gap-[77px] text-lg text-gray-300 font-manrope">
              <div className="flex-1 flex flex-col items-start justify-start gap-[20px]">
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
              <div className="flex-1 flex flex-col items-start justify-start gap-[20px]">
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
              <div className="flex-1 flex flex-col items-start justify-start gap-[20px]">
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
              <div className="flex-1 flex flex-col items-start justify-start gap-[20px]">
                <b className="self-stretch relative leading-[18px]">Others</b>
                <div className="self-stretch flex flex-col items-start justify-start gap-[14px] text-base">
                  <div className="self-stretch relative leading-[24px] font-semibold">
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
      </div>
    </div>
  );
};

export default ContactPage;
