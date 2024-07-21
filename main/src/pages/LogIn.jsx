const LogIn = () => {
  return (
    <div className="w-full relative bg-white h-[1024px] overflow-hidden flex flex-col items-center justify-center text-center text-17xl text-gray-300 font-manrope">
      <div className="self-stretch [backdrop-filter:blur(80px)] bg-gray-500 flex flex-row items-center justify-center py-[250px] px-[480px]">
        <div className="flex-1 rounded-3xs bg-white box-border h-[580px] flex flex-row items-start justify-start py-10 px-[30px] border-[1px] border-solid border-lightgray-100">
          <div className="flex-1 flex flex-col items-center justify-center gap-[32px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left">
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                  <div className="flex-1 relative tracking-[-0.72px] leading-[50.4px] font-extrabold">
                    Log in
                  </div>
                  <img
                    className="w-[30px] relative h-[30px]"
                    alt=""
                    src="/icon--24px--close--v2.svg"
                  />
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
                        user / email address
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-3xs bg-white overflow-hidden flex flex-col items-start justify-start py-3.5 px-4 border-[1px] border-solid border-lightgray-100">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[14px]">
                      <img
                        className="w-6 relative h-6"
                        alt=""
                        src="/icon--20px--lock.svg"
                      />
                      <div className="flex-1 relative leading-[32.4px] font-semibold">
                        Password
                      </div>
                      <img
                        className="w-6 relative h-6"
                        alt=""
                        src="/icon--20px--eyehide.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between text-lg">
                <div className="w-[206px] flex flex-row items-start justify-start gap-[8px]">
                  <div className="w-[18px] relative rounded box-border h-[18px] border-[2px] border-solid border-gray-300" />
                  <b className="flex-1 relative leading-[18px]">Remember</b>
                </div>
                <b className="w-[206px] relative leading-[18px] inline-block text-right shrink-0">
                  Forgot Password
                </b>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[18px] text-lg text-white">
              <div className="self-stretch rounded-3xs bg-gray-300 flex flex-row items-center justify-center py-5 px-6">
                <b className="flex-1 relative leading-[18px]">Log in</b>
              </div>
              <div className="self-stretch rounded-3xs bg-white flex flex-row items-center justify-center py-5 px-6 text-left text-gray-300 border-[1px] border-solid border-dimgray-100">
                <div className="w-[190px] relative h-5">
                  <img
                    className="absolute top-[0px] left-[0px] w-5 h-5"
                    alt=""
                    src="/icon--20px--google.svg"
                  />
                  <b className="absolute top-[1px] left-[30px] leading-[18px]">
                    Log in with Google
                  </b>
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
              alt=""
              src="/line-3.svg"
            />
            <div className="self-stretch flex flex-row items-start justify-center gap-[8px] text-xl text-dimgray-100">
              <div className="relative tracking-[-0.4px] leading-[28px] font-semibold">
                Don’t have an account?
              </div>
              <div className="relative tracking-[-0.4px] leading-[28px] font-semibold text-gray-300 text-left">
                Create Account
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
