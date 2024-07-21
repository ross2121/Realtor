const EnterOTP = () => {
  return (
    <div className="w-full relative bg-white h-[1024px] overflow-hidden flex flex-col items-center justify-center text-center text-17xl text-gray-300 font-manrope">
      <div className="self-stretch flex-1 [backdrop-filter:blur(80px)] bg-gray-500 flex flex-row items-center justify-center py-[250px] px-[480px]">
        <div className="flex-1 rounded-3xs bg-white box-border h-[512px] flex flex-row items-start justify-start py-10 px-[30px] border-[1px] border-solid border-lightgray-100">
          <div className="flex-1 flex flex-col items-center justify-center gap-[32px]">
            <div className="self-stretch flex flex-col items-start justify-start text-left">
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <div className="flex-1 relative tracking-[-0.72px] leading-[50.4px] font-extrabold">
                      Enter OTP
                    </div>
                    <img
                      className="w-[30px] relative h-[30px]"
                      alt=""
                      src="/icon--24px--close--v2.svg"
                    />
                  </div>
                  <div className="self-stretch relative text-lg leading-[32.4px]">
                    Please check your mail, We sent an OTP code
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[12px] text-lg">
                  <div className="rounded-3xs flex flex-col items-start justify-start py-[21px] px-6 border-[1px] border-solid border-dimgray-100">
                    <b className="relative leading-[18px]">0</b>
                  </div>
                  <div className="rounded-3xs flex flex-col items-start justify-start py-[21px] px-6 border-[1px] border-solid border-dimgray-100">
                    <b className="relative leading-[18px]">0</b>
                  </div>
                  <div className="rounded-3xs flex flex-col items-start justify-start py-[21px] px-6 border-[1px] border-solid border-dimgray-100">
                    <b className="relative leading-[18px]">0</b>
                  </div>
                  <div className="rounded-3xs flex flex-col items-start justify-start py-[21px] px-6 border-[1px] border-solid border-dimgray-100">
                    <b className="relative leading-[18px]">0</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[18px] text-lg text-white">
              <div className="self-stretch rounded-3xs bg-gray-300 flex flex-row items-center justify-center py-5 px-6">
                <b className="flex-1 relative leading-[18px]">Confirm</b>
              </div>
              <div className="self-stretch rounded-3xs bg-white flex flex-row items-center justify-center py-5 px-6 text-left text-gray-300 border-[1px] border-solid border-dimgray-100">
                <b className="relative leading-[18px]">Request OTP Again</b>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
              alt=""
              src="/line-3.svg"
            />
            <div className="self-stretch flex flex-row items-start justify-center gap-[8px] text-xl text-dimgray-100">
              <div className="relative tracking-[-0.4px] leading-[28px] font-semibold">
                Remember the Password?
              </div>
              <div className="relative tracking-[-0.4px] leading-[28px] font-semibold text-gray-300 text-left">
                Log in
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterOTP;
