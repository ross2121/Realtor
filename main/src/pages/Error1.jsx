const Error1 = () => {
  return (
    <div className="w-full relative bg-snow h-[1024px] overflow-hidden flex flex-col items-center justify-start gap-[116px] text-left text-xl text-gray-300 font-manrope">
      <div className="self-stretch bg-white h-[80.1px] flex flex-col items-start justify-center py-[19px] px-[120px] box-border">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-start gap-[11px] text-orangered font-marko-one">
            <img
              className="w-10 relative h-10 overflow-hidden shrink-0"
              alt=""
              src="/realestate-1.svg"
            />
            <div className="relative leading-[36px]">Relasto</div>
          </div>
          <div className="w-[492px] flex flex-row items-center justify-between text-base">
            <div className="w-[77px] flex flex-row items-start justify-start gap-[6px]">
              <div className="relative leading-[16px] font-semibold">Home</div>
              <img
                className="w-4 relative h-4"
                alt=""
                src="/icon--16px--arrow--down.svg"
              />
            </div>
            <div className="w-[77px] flex flex-row items-start justify-start gap-[6px]">
              <div className="relative leading-[16px] font-semibold">
                Listing
              </div>
              <img
                className="w-4 relative h-4"
                alt=""
                src="/icon--16px--arrow--down.svg"
              />
            </div>
            <div className="w-[77px] flex flex-row items-start justify-start gap-[6px]">
              <div className="relative leading-[16px] font-semibold">
                Agents
              </div>
              <img
                className="w-4 relative h-4"
                alt=""
                src="/icon--16px--arrow--down.svg"
              />
            </div>
            <div className="relative leading-[16px] font-semibold text-center">{`Property `}</div>
            <div className="relative leading-[16px] font-semibold">Blog</div>
          </div>
          <div className="w-[228px] h-[42px] flex flex-row items-center justify-start gap-[40px] text-lg">
            <div className="flex-1 h-6 flex flex-row items-center justify-start gap-[8px]">
              <img
                className="w-6 relative h-6"
                alt=""
                src="/icon--24px--search.svg"
              />
              <b className="flex-1 relative leading-[18px]">Search</b>
            </div>
            <div className="flex-1 rounded-3xs bg-gray-300 h-[42px] flex flex-row items-start justify-start py-[13px] px-6 box-border text-center text-base text-white">
              <div className="flex-1 relative leading-[16px] font-semibold">
                Log in
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-[30px] text-center text-9xl">
        <div className="flex flex-row items-start justify-start">
          <img
            className="w-[464.1px] relative h-[480px]"
            alt=""
            src="/illustration.svg"
          />
        </div>
        <div className="flex flex-col items-center justify-start gap-[24px]">
          <div className="relative tracking-[-0.56px] leading-[37.8px] font-extrabold">
            Something wrong!
          </div>
          <div className="rounded-3xs flex flex-col items-start justify-start py-5 px-4 text-left text-lg border-[1px] border-solid border-dimgray-100">
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <b className="relative leading-[18px]">Homepage</b>
              <img
                className="w-5 relative h-5"
                alt=""
                src="/icon--24px--arrowright.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error1;
