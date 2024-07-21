import DropdownLargeV1Press from "../components/DropdownLargeV1Press";

const ListingMapView = () => {
  return (
    <div className="w-full relative bg-snow overflow-hidden flex flex-col items-start justify-start gap-[60px] leading-[normal] tracking-[normal] mq750:gap-[30px]">
      <header className="self-stretch bg-white flex flex-col items-start justify-between pt-[19.1px] px-[120px] pb-[19px] box-border min-h-[80px] top-[0] z-[99] sticky max-w-full text-left text-xl text-gray-300 font-manrope mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[60px] mq750:pr-[60px] mq750:box-border">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] max-w-full">
          <div className="flex flex-row items-center justify-start gap-[11px] text-orangered font-marko-one">
            <img
              className="h-10 w-10 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/realestate-1.svg"
            />
            <a className="[text-decoration:none] relative leading-[36px] text-[inherit] inline-block min-w-[77px] whitespace-nowrap">
              Relasto
            </a>
          </div>
          <div className="w-[492px] flex flex-row items-center justify-between max-w-full text-base mq1050:hidden">
            <div className="flex flex-row items-start justify-start py-0 pr-2.5 pl-0 gap-[6px]">
              <a className="[text-decoration:none] relative leading-[16px] font-semibold text-[inherit] inline-block min-w-[45px]">
                Home
              </a>
              <img
                className="h-4 w-4 relative min-h-[16px]"
                alt=""
                src="/icon--16px--arrow--down.svg"
              />
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-[3px] pl-0 gap-[6px]">
              <a className="[text-decoration:none] relative leading-[16px] font-semibold text-[inherit] inline-block min-w-[52px]">
                Listing
              </a>
              <img
                className="h-4 w-4 relative min-h-[16px]"
                alt=""
                src="/icon--16px--arrow--down.svg"
              />
            </div>
            <div className="flex flex-row items-start justify-start gap-[6px]">
              <a className="[text-decoration:none] relative leading-[16px] font-semibold text-[inherit] inline-block min-w-[55px]">
                Agents
              </a>
              <img
                className="h-4 w-4 relative min-h-[16px]"
                alt=""
                src="/icon--16px--arrow--down.svg"
              />
            </div>
            <a className="[text-decoration:none] relative leading-[16px] font-semibold text-[inherit] text-center inline-block min-w-[67px] whitespace-nowrap">{`Property `}</a>
            <a className="[text-decoration:none] relative leading-[16px] font-semibold text-[inherit] inline-block min-w-[34px]">
              Blog
            </a>
          </div>
          <div className="w-[228px] flex flex-row items-center justify-start gap-[40px] text-lg">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <img
                className="h-6 w-6 relative"
                loading="lazy"
                alt=""
                src="/icon--24px--search.svg"
              />
              <a className="[text-decoration:none] relative leading-[18px] font-bold text-[inherit] inline-block min-w-[62px] whitespace-nowrap">
                Search
              </a>
            </div>
            <button className="cursor-pointer [border:none] py-[13px] px-6 bg-gray-300 rounded-3xs flex flex-row items-start justify-start whitespace-nowrap hover:bg-dimgray-300">
              <a className="[text-decoration:none] relative text-base leading-[16px] font-semibold font-manrope text-white text-center inline-block min-w-[46px]">
                Log in
              </a>
            </button>
          </div>
        </div>
      </header>
      <section className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[172px] box-border gap-[60px] min-h-[608px] max-w-full text-left text-17xl text-gray-300 font-manrope mq750:gap-[30px] mq750:pb-28 mq750:box-border">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border max-w-full">
          <div className="w-[1200px] flex flex-col items-center justify-center gap-[24px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.72px] leading-[51px] font-extrabold font-inherit mq450:text-3xl mq450:leading-[30px] mq1050:text-10xl mq1050:leading-[40px]">
              Find Property
            </h1>
            <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[20px] max-w-full">
                <div className="flex-1 rounded-3xs bg-white box-border overflow-hidden flex flex-col items-start justify-start pt-3 pb-[11px] pr-[25px] pl-[15px] min-w-[274px] max-w-full border-[1px] border-solid border-lightgray-100">
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                    <input
                      className="w-[162px] [border:none] [outline:none] font-semibold font-manrope text-lg bg-[transparent] h-[33px] relative leading-[32.4px] text-dimgray-200 text-left inline-block p-0"
                      placeholder="Enter your address"
                      type="text"
                    />
                    <img
                      className="h-6 w-6 relative"
                      alt=""
                      src="/icon--24px--search-1.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="rounded-3xs bg-white flex flex-col items-start justify-start py-4 px-[15px] border-[1px] border-solid border-lightgray-100">
                    <div className="flex flex-row items-center justify-start gap-[12px]">
                      <b className="relative text-lg leading-[18px] font-bold font-manrope text-dimgray-200 text-left inline-block min-w-[33px]">
                        Buy
                      </b>
                      <img
                        className="h-6 w-6 relative"
                        alt=""
                        src="/icon--24px--arrowdown.svg"
                      />
                    </div>
                  </div>
                </div>
                <DropdownLargeV1Press pressed="$15000 - $18000" />
                <div className="flex flex-row items-start justify-start gap-[20px]">
                  <DropdownLargeV1Press
                    pressed="Bed - 3"
                    propDisplay="inline-block"
                    propMinWidth="59px"
                  />
                  <button className="cursor-pointer py-4 pr-[22px] pl-[15px] bg-white rounded-3xs flex flex-col items-start justify-start border-[1px] border-solid border-lightgray-100">
                    <div className="flex flex-row items-center justify-start gap-[12px]">
                      <b className="relative text-lg leading-[18px] font-bold font-manrope text-dimgray-200 text-left inline-block min-w-[45px]">
                        More
                      </b>
                      <img
                        className="h-6 w-6 relative"
                        alt=""
                        src="/icon--24px--plus.svg"
                      />
                    </div>
                  </button>
                </div>
                <div className="rounded-3xs bg-gray-300 flex flex-col items-start justify-start py-5 px-4">
                  <div className="flex flex-row items-center justify-start gap-[10px]">
                    <a className="[text-decoration:none] relative text-lg leading-[18px] font-bold font-manrope text-white text-left inline-block min-w-[62px]">
                      Search
                    </a>
                    <img
                      className="h-5 w-5 relative min-h-[20px]"
                      loading="lazy"
                      alt=""
                      src="/icon--20px--search.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 pr-[279px] pl-0 gap-[10px] lg:pr-[139px] lg:box-border mq450:pr-5 mq450:box-border mq750:pr-[69px] mq750:box-border">
                <div className="rounded-3xs flex flex-row items-center justify-start py-[5px] px-[13px] gap-[8px] whitespace-nowrap border-[1px] border-solid border-gainsboro-200">
                  <b className="relative text-sm leading-[23px] font-semibold font-manrope text-dimgray-200 text-left inline-block min-w-[93px]">
                    Bathrooms 2+
                  </b>
                  <img
                    className="h-4 w-4 relative"
                    alt=""
                    src="/icon--16px--close.svg"
                  />
                </div>
                <div className="flex-1 rounded-3xs box-border flex flex-row items-center justify-start py-[5px] px-[13px] gap-[8px] min-w-[158px] whitespace-nowrap border-[1px] border-solid border-gainsboro-200">
                  <div className="relative text-sm leading-[23px] font-semibold font-manrope text-dimgray-200 text-left">
                    Square Feet 750 - 2000 sq. ft
                  </div>
                  <img
                    className="h-4 w-4 relative"
                    alt=""
                    src="/icon--16px--close.svg"
                  />
                </div>
                <div className="rounded-3xs flex flex-row items-center justify-start py-[5px] px-[13px] gap-[8px] whitespace-nowrap border-[1px] border-solid border-gainsboro-200">
                  <div className="relative text-sm leading-[23px] font-semibold font-manrope text-dimgray-200 text-left inline-block min-w-[99px]">
                    Year Built 5 - 15
                  </div>
                  <img
                    className="h-4 w-4 relative"
                    alt=""
                    src="/icon--16px--close.svg"
                  />
                </div>
                <div className="rounded-3xs flex flex-row items-center justify-start py-[5px] px-[13px] gap-[8px] whitespace-nowrap border-[1px] border-solid border-gainsboro-200">
                  <div className="relative text-sm leading-[23px] font-semibold font-manrope text-gray-300 text-left inline-block min-w-[116px]">
                    For Sale By Agent
                  </div>
                  <img
                    className="h-4 w-4 relative"
                    alt=""
                    src="/icon--16px--close.svg"
                  />
                </div>
                <div className="rounded-3xs flex flex-row items-center justify-start py-[5px] px-[13px] gap-[8px] whitespace-nowrap border-[1px] border-solid border-gainsboro-200">
                  <b className="relative text-sm leading-[23px] font-semibold font-manrope text-gray-300 text-left inline-block min-w-[122px]">
                    New Construction
                  </b>
                  <img
                    className="h-4 w-4 relative"
                    alt=""
                    src="/icon--16px--close.svg"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-[444.2px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-smi-8">
          <div className="flex flex-row items-start justify-start gap-[26.2px]">
            <img
              className="h-[3.7px] w-[138.8px] relative object-contain"
              loading="lazy"
              alt=""
              src="/point@2x.png"
            />
            <div className="w-[39.2px] flex flex-col items-start justify-start pt-[1.3px] px-0 pb-0 box-border">
              <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start py-[23px] pr-0 pl-4 border-[0.8px] border-solid border-dimgray-100">
                <div className="w-[276px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[21.7px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[9.6px]">
                    <img
                      className="h-[19.3px] w-[19.3px] relative"
                      loading="lazy"
                      alt=""
                      src="/icon--map-21.svg"
                    />
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      2861 62nd Ave, Oakland, CA 94605
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16.8px] text-dimgray-200">
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                      <div className="w-[121.9px] flex flex-row items-center justify-start py-0 px-0 box-border gap-[9.6px]">
                        <img
                          className="h-4 w-4 relative min-h-[16px]"
                          alt=""
                          src="/icon-3.svg"
                        />
                        <div className="flex-1 relative leading-[13px] font-semibold shrink-0">
                          3 Bed Room
                        </div>
                      </div>
                      <div className="w-[121.9px] flex flex-row items-center justify-start py-0 pr-[59px] pl-0 box-border gap-[9.6px]">
                        <img
                          className="h-4 w-4 relative min-h-[16px]"
                          alt=""
                          src="/icon--11.svg"
                        />
                        <b className="h-[13px] flex-1 relative leading-[12.83px] font-semibold inline-block">
                          1 Bath
                        </b>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                      <div className="w-[121.9px] flex flex-row items-center justify-start py-0 px-0 box-border gap-[9.6px]">
                        <img
                          className="h-4 w-4 relative min-h-[16px]"
                          alt=""
                          src="/icon--21.svg"
                        />
                        <b className="flex-1 relative leading-[13px] font-semibold shrink-0">
                          1,032 sqft
                        </b>
                      </div>
                      <div className="w-[121.9px] flex flex-row items-center justify-start py-0 pr-[57px] pl-0 box-border gap-[9.6px]">
                        <img
                          className="h-4 w-4 relative min-h-[16px]"
                          alt=""
                          src="/iocn--menuimage1.svg"
                        />
                        <b className="h-[13px] flex-1 relative leading-[12.83px] font-semibold inline-block">
                          Family
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start text-[19.3px]">
                    <b className="flex-1 relative tracking-[-0.38px] leading-[26px] font-bold whitespace-nowrap">
                      $649,900
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-10 box-border max-w-full text-left text-base text-gray-300 font-manrope">
        <div className="w-[1200px] flex flex-col items-start justify-start gap-[60px] max-w-full lg:gap-[30px]">
          <div className="w-[152.8px] h-[4.4px] relative rounded-3xs" />
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px_22px] min-h-[1584px] max-w-full shrink-0">
            <div className="flex-1 flex flex-col items-start justify-start min-w-[365px] max-w-full">
              <div className="self-stretch h-[260px] relative rounded-t-3xs rounded-b-none" />
              <div className="self-stretch rounded-t-none rounded-b-3xs bg-white flex flex-col items-start justify-start py-7 px-[19px] border-[1px] border-solid border-mistyrose">
                <div className="self-stretch flex flex-col items-start justify-start gap-[27px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="h-6 w-6 relative"
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
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/icon-.svg"
                        />
                        <div className="flex-1 relative leading-[16px] font-semibold">
                          3 Bed Room
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start py-0 pr-[74px] pl-0 gap-[12px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/icon--1.svg"
                        />
                        <b className="relative leading-[16px] font-semibold inline-block min-w-[46px]">
                          1 Bath
                        </b>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                      <div className="w-[152px] flex flex-row items-center justify-start gap-[12px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/icon--2.svg"
                        />
                        <b className="flex-1 relative leading-[16px] font-semibold">
                          1,032 sqft
                        </b>
                      </div>
                      <div className="flex flex-row items-center justify-start py-0 pr-[71px] pl-0 gap-[12px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/iocn--menuimage.svg"
                        />
                        <b className="relative leading-[16px] font-semibold inline-block min-w-[49px]">
                          Family
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[31px] text-5xl mq450:flex-wrap mq450:gap-[15px]">
                    <button className="cursor-pointer [border:none] py-4 px-6 bg-gray-300 flex-[0.6933] rounded-3xs flex flex-row items-start justify-start box-border min-w-[101px] whitespace-nowrap hover:bg-dimgray-300 mq450:flex-1">
                      <b className="flex-1 relative text-base leading-[16px] font-semibold font-manrope text-white text-center">
                        View Details
                      </b>
                    </button>
                    <b className="flex-1 relative tracking-[-0.48px] leading-[33px] font-bold inline-block min-w-[101px] whitespace-nowrap mq450:text-lgi mq450:leading-[26px]">
                      $649,900
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[365px] max-w-full">
              <div className="self-stretch h-[260px] relative rounded-t-3xs rounded-b-none" />
              <div className="self-stretch rounded-t-none rounded-b-3xs bg-white flex flex-col items-start justify-start py-7 px-[19px] border-[1px] border-solid border-mistyrose">
                <div className="self-stretch flex flex-col items-start justify-start gap-[27px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="h-6 w-6 relative"
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
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/icon-.svg"
                        />
                        <div className="flex-1 relative leading-[16px] font-semibold">
                          3 Bed Room
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start py-0 pr-[74px] pl-0 gap-[12px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/icon--1.svg"
                        />
                        <b className="relative leading-[16px] font-semibold inline-block min-w-[46px]">
                          1 Bath
                        </b>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                      <div className="w-[152px] flex flex-row items-center justify-start gap-[12px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/icon--2.svg"
                        />
                        <b className="flex-1 relative leading-[16px] font-semibold">
                          1,032 sqft
                        </b>
                      </div>
                      <div className="flex flex-row items-center justify-start py-0 pr-[71px] pl-0 gap-[12px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/iocn--menuimage.svg"
                        />
                        <b className="relative leading-[16px] font-semibold inline-block min-w-[49px]">
                          Family
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[31px] text-5xl mq450:flex-wrap mq450:gap-[15px]">
                    <button className="cursor-pointer [border:none] py-4 px-6 bg-gray-300 flex-[0.6933] rounded-3xs flex flex-row items-start justify-start box-border min-w-[101px] whitespace-nowrap hover:bg-dimgray-300 mq450:flex-1">
                      <b className="flex-1 relative text-base leading-[16px] font-semibold font-manrope text-white text-center">
                        View Details
                      </b>
                    </button>
                    <b className="flex-1 relative tracking-[-0.48px] leading-[33px] font-bold inline-block min-w-[101px] whitespace-nowrap mq450:text-lgi mq450:leading-[26px]">
                      $649,900
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[365px] max-w-full">
              <div className="self-stretch h-[260px] relative rounded-t-3xs rounded-b-none" />
              <div className="self-stretch rounded-t-none rounded-b-3xs bg-white flex flex-col items-start justify-start py-7 px-[19px] border-[1px] border-solid border-mistyrose">
                <div className="self-stretch flex flex-col items-start justify-start gap-[27px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="h-6 w-6 relative"
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
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/icon-.svg"
                        />
                        <div className="flex-1 relative leading-[16px] font-semibold">
                          3 Bed Room
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start py-0 pr-[74px] pl-0 gap-[12px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/icon--1.svg"
                        />
                        <b className="relative leading-[16px] font-semibold inline-block min-w-[46px]">
                          1 Bath
                        </b>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                      <div className="w-[152px] flex flex-row items-center justify-start gap-[12px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/icon--2.svg"
                        />
                        <b className="flex-1 relative leading-[16px] font-semibold">
                          1,032 sqft
                        </b>
                      </div>
                      <div className="flex flex-row items-center justify-start py-0 pr-[71px] pl-0 gap-[12px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/iocn--menuimage.svg"
                        />
                        <b className="relative leading-[16px] font-semibold inline-block min-w-[49px]">
                          Family
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[31px] text-5xl mq450:flex-wrap mq450:gap-[15px]">
                    <button className="cursor-pointer [border:none] py-4 px-6 bg-gray-300 flex-[0.6933] rounded-3xs flex flex-row items-start justify-start box-border min-w-[101px] whitespace-nowrap hover:bg-dimgray-300 mq450:flex-1">
                      <b className="flex-1 relative text-base leading-[16px] font-semibold font-manrope text-white text-center">
                        View Details
                      </b>
                    </button>
                    <b className="flex-1 relative tracking-[-0.48px] leading-[33px] font-bold inline-block min-w-[101px] whitespace-nowrap mq450:text-lgi mq450:leading-[26px]">
                      $649,900
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[365px] max-w-full">
              <div className="self-stretch h-[260px] relative rounded-t-3xs rounded-b-none" />
              <div className="self-stretch rounded-t-none rounded-b-3xs bg-white flex flex-col items-start justify-start py-7 px-[19px] border-[1px] border-solid border-mistyrose">
                <div className="self-stretch flex flex-col items-start justify-start gap-[27px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="h-6 w-6 relative"
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
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/icon-.svg"
                        />
                        <div className="flex-1 relative leading-[16px] font-semibold">
                          3 Bed Room
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start py-0 pr-[74px] pl-0 gap-[12px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/icon--1.svg"
                        />
                        <b className="relative leading-[16px] font-semibold inline-block min-w-[46px]">
                          1 Bath
                        </b>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                      <div className="w-[152px] flex flex-row items-center justify-start gap-[12px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/icon--2.svg"
                        />
                        <b className="flex-1 relative leading-[16px] font-semibold">
                          1,032 sqft
                        </b>
                      </div>
                      <div className="flex flex-row items-center justify-start py-0 pr-[71px] pl-0 gap-[12px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/iocn--menuimage.svg"
                        />
                        <b className="relative leading-[16px] font-semibold inline-block min-w-[49px]">
                          Family
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[31px] text-5xl mq450:flex-wrap mq450:gap-[15px]">
                    <button className="cursor-pointer [border:none] py-4 px-6 bg-gray-300 flex-[0.6933] rounded-3xs flex flex-row items-start justify-start box-border min-w-[101px] whitespace-nowrap hover:bg-dimgray-300 mq450:flex-1">
                      <b className="flex-1 relative text-base leading-[16px] font-semibold font-manrope text-white text-center">
                        View Details
                      </b>
                    </button>
                    <b className="flex-1 relative tracking-[-0.48px] leading-[33px] font-bold inline-block min-w-[101px] whitespace-nowrap mq450:text-lgi mq450:leading-[26px]">
                      $649,900
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[365px] max-w-full">
              <div className="self-stretch h-[260px] relative rounded-t-3xs rounded-b-none" />
              <div className="self-stretch rounded-t-none rounded-b-3xs bg-white flex flex-col items-start justify-start py-7 px-[19px] border-[1px] border-solid border-mistyrose">
                <div className="self-stretch flex flex-col items-start justify-start gap-[27px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="h-6 w-6 relative"
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
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/icon-.svg"
                        />
                        <div className="flex-1 relative leading-[16px] font-semibold">
                          3 Bed Room
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start py-0 pr-[74px] pl-0 gap-[12px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/icon--1.svg"
                        />
                        <b className="relative leading-[16px] font-semibold inline-block min-w-[46px]">
                          1 Bath
                        </b>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                      <div className="w-[152px] flex flex-row items-center justify-start gap-[12px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/icon--2.svg"
                        />
                        <b className="flex-1 relative leading-[16px] font-semibold">
                          1,032 sqft
                        </b>
                      </div>
                      <div className="flex flex-row items-center justify-start py-0 pr-[71px] pl-0 gap-[12px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/iocn--menuimage.svg"
                        />
                        <b className="relative leading-[16px] font-semibold inline-block min-w-[49px]">
                          Family
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[31px] text-5xl mq450:flex-wrap mq450:gap-[15px]">
                    <button className="cursor-pointer [border:none] py-4 px-6 bg-gray-300 flex-[0.6933] rounded-3xs flex flex-row items-start justify-start box-border min-w-[101px] whitespace-nowrap hover:bg-dimgray-300 mq450:flex-1">
                      <b className="flex-1 relative text-base leading-[16px] font-semibold font-manrope text-white text-center">
                        View Details
                      </b>
                    </button>
                    <b className="flex-1 relative tracking-[-0.48px] leading-[33px] font-bold inline-block min-w-[101px] whitespace-nowrap mq450:text-lgi mq450:leading-[26px]">
                      $649,900
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[365px] max-w-full">
              <div className="self-stretch h-[260px] relative rounded-t-3xs rounded-b-none" />
              <div className="self-stretch rounded-t-none rounded-b-3xs bg-white flex flex-col items-start justify-start py-7 px-[19px] border-[1px] border-solid border-mistyrose">
                <div className="self-stretch flex flex-col items-start justify-start gap-[27px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="h-6 w-6 relative"
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
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/icon-.svg"
                        />
                        <div className="flex-1 relative leading-[16px] font-semibold">
                          3 Bed Room
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start py-0 pr-[74px] pl-0 gap-[12px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/icon--1.svg"
                        />
                        <b className="relative leading-[16px] font-semibold inline-block min-w-[46px]">
                          1 Bath
                        </b>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                      <div className="w-[152px] flex flex-row items-center justify-start gap-[12px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/icon--2.svg"
                        />
                        <b className="flex-1 relative leading-[16px] font-semibold">
                          1,032 sqft
                        </b>
                      </div>
                      <div className="flex flex-row items-center justify-start py-0 pr-[71px] pl-0 gap-[12px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/iocn--menuimage.svg"
                        />
                        <b className="relative leading-[16px] font-semibold inline-block min-w-[49px]">
                          Family
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[31px] text-5xl mq450:flex-wrap mq450:gap-[15px]">
                    <button className="cursor-pointer [border:none] py-4 px-6 bg-gray-300 flex-[0.6933] rounded-3xs flex flex-row items-start justify-start box-border min-w-[101px] whitespace-nowrap hover:bg-dimgray-300 mq450:flex-1">
                      <b className="flex-1 relative text-base leading-[16px] font-semibold font-manrope text-white text-center">
                        View Details
                      </b>
                    </button>
                    <b className="flex-1 relative tracking-[-0.48px] leading-[33px] font-bold inline-block min-w-[101px] whitespace-nowrap mq450:text-lgi mq450:leading-[26px]">
                      $649,900
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[365px] max-w-full">
              <div className="self-stretch h-[260px] relative rounded-t-3xs rounded-b-none" />
              <div className="self-stretch rounded-t-none rounded-b-3xs bg-white flex flex-col items-start justify-start py-7 px-[19px] border-[1px] border-solid border-mistyrose">
                <div className="self-stretch flex flex-col items-start justify-start gap-[27px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="h-6 w-6 relative"
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
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/icon-.svg"
                        />
                        <div className="flex-1 relative leading-[16px] font-semibold">
                          3 Bed Room
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start py-0 pr-[74px] pl-0 gap-[12px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/icon--1.svg"
                        />
                        <b className="relative leading-[16px] font-semibold inline-block min-w-[46px]">
                          1 Bath
                        </b>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                      <div className="w-[152px] flex flex-row items-center justify-start gap-[12px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/icon--2.svg"
                        />
                        <b className="flex-1 relative leading-[16px] font-semibold">
                          1,032 sqft
                        </b>
                      </div>
                      <div className="flex flex-row items-center justify-start py-0 pr-[71px] pl-0 gap-[12px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/iocn--menuimage.svg"
                        />
                        <b className="relative leading-[16px] font-semibold inline-block min-w-[49px]">
                          Family
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[31px] text-5xl mq450:flex-wrap mq450:gap-[15px]">
                    <button className="cursor-pointer [border:none] py-4 px-6 bg-gray-300 flex-[0.6933] rounded-3xs flex flex-row items-start justify-start box-border min-w-[101px] whitespace-nowrap hover:bg-dimgray-300 mq450:flex-1">
                      <b className="flex-1 relative text-base leading-[16px] font-semibold font-manrope text-white text-center">
                        View Details
                      </b>
                    </button>
                    <b className="flex-1 relative tracking-[-0.48px] leading-[33px] font-bold inline-block min-w-[101px] whitespace-nowrap mq450:text-lgi mq450:leading-[26px]">
                      $649,900
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[365px] max-w-full">
              <div className="self-stretch h-[260px] relative rounded-t-3xs rounded-b-none" />
              <div className="self-stretch rounded-t-none rounded-b-3xs bg-white flex flex-col items-start justify-start py-7 px-[19px] border-[1px] border-solid border-mistyrose">
                <div className="self-stretch flex flex-col items-start justify-start gap-[27px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="h-6 w-6 relative"
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
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/icon-.svg"
                        />
                        <div className="flex-1 relative leading-[16px] font-semibold">
                          3 Bed Room
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start py-0 pr-[74px] pl-0 gap-[12px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/icon--1.svg"
                        />
                        <b className="relative leading-[16px] font-semibold inline-block min-w-[46px]">
                          1 Bath
                        </b>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                      <div className="w-[152px] flex flex-row items-center justify-start gap-[12px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/icon--2.svg"
                        />
                        <b className="flex-1 relative leading-[16px] font-semibold">
                          1,032 sqft
                        </b>
                      </div>
                      <div className="flex flex-row items-center justify-start py-0 pr-[71px] pl-0 gap-[12px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/iocn--menuimage.svg"
                        />
                        <b className="relative leading-[16px] font-semibold inline-block min-w-[49px]">
                          Family
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[31px] text-5xl mq450:flex-wrap mq450:gap-[15px]">
                    <button className="cursor-pointer [border:none] py-4 px-6 bg-gray-300 flex-[0.6933] rounded-3xs flex flex-row items-start justify-start box-border min-w-[101px] whitespace-nowrap hover:bg-dimgray-300 mq450:flex-1">
                      <b className="flex-1 relative text-base leading-[16px] font-semibold font-manrope text-white text-center">
                        View Details
                      </b>
                    </button>
                    <b className="flex-1 relative tracking-[-0.48px] leading-[33px] font-bold inline-block min-w-[101px] whitespace-nowrap mq450:text-lgi mq450:leading-[26px]">
                      $649,900
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[365px] max-w-full">
              <div className="self-stretch h-[260px] relative rounded-t-3xs rounded-b-none" />
              <div className="self-stretch rounded-t-none rounded-b-3xs bg-white flex flex-col items-start justify-start py-7 px-[19px] border-[1px] border-solid border-mistyrose">
                <div className="self-stretch flex flex-col items-start justify-start gap-[27px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="h-6 w-6 relative"
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
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/icon-.svg"
                        />
                        <div className="flex-1 relative leading-[16px] font-semibold">
                          3 Bed Room
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start py-0 pr-[74px] pl-0 gap-[12px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/icon--1.svg"
                        />
                        <b className="relative leading-[16px] font-semibold inline-block min-w-[46px]">
                          1 Bath
                        </b>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                      <div className="w-[152px] flex flex-row items-center justify-start gap-[12px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/icon--2.svg"
                        />
                        <b className="flex-1 relative leading-[16px] font-semibold">
                          1,032 sqft
                        </b>
                      </div>
                      <div className="flex flex-row items-center justify-start py-0 pr-[71px] pl-0 gap-[12px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/iocn--menuimage.svg"
                        />
                        <b className="relative leading-[16px] font-semibold inline-block min-w-[49px]">
                          Family
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[31px] text-5xl mq450:flex-wrap mq450:gap-[15px]">
                    <button className="cursor-pointer [border:none] py-4 px-6 bg-gray-300 flex-[0.6933] rounded-3xs flex flex-row items-start justify-start box-border min-w-[101px] whitespace-nowrap hover:bg-dimgray-300 mq450:flex-1">
                      <b className="flex-1 relative text-base leading-[16px] font-semibold font-manrope text-white text-center">
                        View Details
                      </b>
                    </button>
                    <b className="flex-1 relative tracking-[-0.48px] leading-[33px] font-bold inline-block min-w-[101px] whitespace-nowrap mq450:text-lgi mq450:leading-[26px]">
                      $649,900
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px] shrink-0 text-center mq450:flex-wrap">
            <div className="w-[260px] flex flex-row items-start justify-start gap-[5px]">
              <div className="flex-1 rounded-3xs flex flex-col items-center justify-center py-3.5 px-[19px] border-[1px] border-solid border-dimgray-200">
                <b className="relative leading-[16px] font-semibold inline-block min-w-[7px]">
                  1
                </b>
              </div>
              <div className="flex-1 rounded-3xs flex flex-col items-center justify-center py-3.5 px-[18px] border-[1px] border-solid border-lightgray-200">
                <b className="relative leading-[16px] font-semibold inline-block min-w-[10px]">
                  2
                </b>
              </div>
              <div className="flex-1 rounded-3xs flex flex-col items-center justify-center py-3.5 px-[18px] border-[1px] border-solid border-lightgray-200">
                <b className="relative leading-[16px] font-semibold inline-block min-w-[10px]">
                  3
                </b>
              </div>
              <div className="flex-1 rounded-3xs flex flex-col items-center justify-center py-3.5 px-[18px] border-[1px] border-solid border-lightgray-200">
                <b className="relative leading-[16px] font-semibold inline-block min-w-[10px]">
                  4
                </b>
              </div>
              <div className="flex-1 rounded-3xs flex flex-col items-center justify-center py-3.5 px-[18px] border-[1px] border-solid border-lightgray-200">
                <b className="relative leading-[16px] font-semibold inline-block min-w-[10px]">
                  5
                </b>
              </div>
            </div>
            <button className="cursor-pointer py-3.5 px-[17px] bg-[transparent] rounded-3xs flex flex-col items-start justify-start border-[1px] border-solid border-lightgray-200">
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <b className="relative text-base leading-[16px] font-semibold font-manrope text-gray-300 text-left inline-block min-w-[78px]">
                  Next Page
                </b>
                <img
                  className="h-4 w-4 relative min-h-[16px]"
                  alt=""
                  src="/icon--16px--arrow--right.svg"
                />
              </div>
            </button>
          </div>
        </div>
      </section>
      <footer className="self-stretch bg-white flex flex-col items-center justify-center py-20 px-5 box-border max-w-full text-left text-xl text-orangered font-marko-one mq750:pt-[52px] mq750:pb-[52px] mq750:box-border">
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
                <p className="m-0 self-stretch relative leading-[25.6px] font-semibold">
                  <span className="block">
                    59 Bervely Hill Ave, Brooklyn Town,
                  </span>
                  <span className="block">New York, NY 5630, CA, US</span>
                </p>
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <b className="relative leading-[26px] font-semibold inline-block min-w-[126px]">
                    +(123) 456-7890
                  </b>
                  <b className="relative leading-[26px] font-semibold inline-block min-w-[113px] whitespace-nowrap">
                    info@mail.com
                  </b>
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
            <div className="flex-1 flex flex-row items-start justify-between py-5 px-0 box-border min-w-[558px] max-w-full gap-[20px] text-lg text-gray-300 font-manrope mq750:flex-wrap mq750:min-w-full">
              <div className="w-[156.8px] flex flex-col items-start justify-start gap-[20px]">
                <b className="self-stretch relative leading-[18px] font-bold">
                  Features
                </b>
                <div className="self-stretch flex flex-col items-start justify-start gap-[14px] text-base">
                  <b className="self-stretch relative leading-[24px] font-semibold">
                    Home v1
                  </b>
                  <b className="self-stretch relative leading-[24px] font-semibold">
                    Home v2
                  </b>
                  <b className="self-stretch relative leading-[24px] font-semibold">
                    About
                  </b>
                  <b className="self-stretch relative leading-[24px] font-semibold">
                    Contact
                  </b>
                  <b className="self-stretch relative leading-[24px] font-semibold">
                    Search
                  </b>
                </div>
              </div>
              <div className="w-[156.8px] flex flex-col items-start justify-start gap-[20px]">
                <b className="self-stretch relative leading-[18px] font-bold">
                  Information
                </b>
                <div className="self-stretch flex flex-col items-start justify-start gap-[14px] text-base">
                  <b className="self-stretch relative leading-[24px] font-semibold">
                    Listing v1
                  </b>
                  <b className="self-stretch relative leading-[24px] font-semibold">
                    Listing v2
                  </b>
                  <b className="self-stretch relative leading-[24px] font-semibold">
                    Property Details
                  </b>
                  <b className="self-stretch relative leading-[24px] font-semibold">
                    Agent List
                  </b>
                  <b className="self-stretch relative leading-[24px] font-semibold">
                    Agent Profile
                  </b>
                </div>
              </div>
              <div className="w-[156.8px] flex flex-col items-start justify-start gap-[20px]">
                <b className="self-stretch relative leading-[18px] font-bold">{`Documentation `}</b>
                <div className="self-stretch flex flex-col items-start justify-start gap-[14px] text-base">
                  <b className="self-stretch relative leading-[24px] font-semibold">
                    Blog
                  </b>
                  <b className="self-stretch relative leading-[24px] font-semibold">
                    FAQ
                  </b>
                  <b className="self-stretch relative leading-[24px] font-semibold">
                    Privacy Policy
                  </b>
                  <b className="self-stretch relative leading-[24px] font-semibold">
                    License
                  </b>
                </div>
              </div>
              <div className="w-[156.8px] flex flex-col items-start justify-start gap-[20px]">
                <b className="self-stretch relative leading-[18px] font-bold">
                  Others
                </b>
                <div className="self-stretch flex flex-col items-start justify-start gap-[14px] text-base">
                  <b className="self-stretch relative leading-[24px] font-semibold whitespace-nowrap">
                    Log in
                  </b>
                  <b className="self-stretch relative leading-[24px] font-semibold">
                    Enter OTP
                  </b>
                  <b className="self-stretch relative leading-[24px] font-semibold">
                    New Password
                  </b>
                  <b className="self-stretch relative leading-[24px] font-semibold">
                    Reset Password
                  </b>
                  <b className="self-stretch relative leading-[24px] font-semibold">
                    Create Account
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch relative text-base leading-[16px] font-semibold font-manrope text-gray-300">
            © 2022. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ListingMapView;
