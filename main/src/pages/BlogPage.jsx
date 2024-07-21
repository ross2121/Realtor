import Title from "../components/Title";

const BlogPage = () => {
  return (
    <div className="w-full relative bg-snow overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[68px] box-border max-w-full">
        <header className="flex-1 bg-white flex flex-col items-start justify-between pt-[19.1px] px-[120px] pb-[19px] box-border min-h-[80px] max-w-full text-left text-xl text-gray-300 font-manrope mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[60px] mq750:pr-[60px] mq750:box-border">
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
      </div>
      <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <section className="w-[1200px] flex flex-col items-start justify-start gap-[60px] max-w-full text-left text-5xl text-dimgray-100 font-manrope lg:gap-[30px]">
          <Title />
          <div className="w-[1200px] overflow-x-auto flex flex-row flex-wrap items-center justify-center gap-[30px_22px] min-h-[1731px] max-w-full">
            <div className="w-96 shrink-0 flex flex-col items-start justify-start gap-[12px] min-w-[365px]">
              <textarea
                className="[border:none] bg-gainsboro-200 h-[350px] w-auto [outline:none] self-stretch relative rounded-lg"
                rows={18}
                cols={19}
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-gray-300">
                  <button className="cursor-pointer py-1.5 px-[13px] bg-[transparent] w-[89px] rounded-3xs box-border flex flex-row items-start justify-start border-[1px] border-solid border-lightgray-100 hover:bg-silver-500 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-400">
                    <b className="relative text-sm leading-[23px] font-semibold font-manrope text-gray-300 text-left inline-block min-w-[61px]">
                      Business
                    </b>
                  </button>
                  <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.48px] leading-[32.4px] font-bold font-inherit mq450:text-lgi mq450:leading-[26px]">
                    10 Delightful Dining Room Decor Trends for Spring
                  </h3>
                </div>
                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[7px] gap-[26px] text-xs">
                  <div className="flex flex-row items-start justify-start gap-[6px]">
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="w-[5px] h-[5px] relative rounded-[50%] bg-lightgray-100" />
                    </div>
                    <div className="relative leading-[20px] font-semibold inline-block min-w-[75px]">
                      July 20, 2022
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[6px]">
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="w-[5px] h-[5px] relative rounded-[50%] bg-lightgray-100" />
                    </div>
                    <div className="relative leading-[20px] font-semibold inline-block min-w-[58px]">
                      7 min read
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-lg">
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <b className="relative leading-[18px] font-bold">
                      Continue Reading
                    </b>
                  </div>
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/icon--24px--v-arrow--right1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-96 shrink-0 flex flex-col items-start justify-start gap-[12px] min-w-[365px]">
              <textarea
                className="[border:none] bg-gainsboro-200 h-[350px] w-auto [outline:none] self-stretch relative rounded-lg"
                rows={18}
                cols={19}
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-gray-300">
                  <button className="cursor-pointer py-1.5 px-[13px] bg-[transparent] w-[89px] rounded-3xs box-border flex flex-row items-start justify-start border-[1px] border-solid border-lightgray-100 hover:bg-silver-500 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-400">
                    <b className="relative text-sm leading-[23px] font-semibold font-manrope text-gray-300 text-left inline-block min-w-[61px]">
                      Business
                    </b>
                  </button>
                  <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.48px] leading-[32.4px] font-bold font-inherit mq450:text-lgi mq450:leading-[26px]">
                    10 Delightful Dining Room Decor Trends for Spring
                  </h3>
                </div>
                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[7px] gap-[26px] text-xs">
                  <div className="flex flex-row items-start justify-start gap-[6px]">
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="w-[5px] h-[5px] relative rounded-[50%] bg-lightgray-100" />
                    </div>
                    <div className="relative leading-[20px] font-semibold inline-block min-w-[75px]">
                      July 20, 2022
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[6px]">
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="w-[5px] h-[5px] relative rounded-[50%] bg-lightgray-100" />
                    </div>
                    <div className="relative leading-[20px] font-semibold inline-block min-w-[58px]">
                      7 min read
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-lg">
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <b className="relative leading-[18px] font-bold">
                      Continue Reading
                    </b>
                  </div>
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    alt=""
                    src="/icon--24px--v-arrow--right1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-96 shrink-0 flex flex-col items-start justify-start gap-[12px] min-w-[365px]">
              <textarea
                className="[border:none] bg-gainsboro-200 h-[350px] w-auto [outline:none] self-stretch relative rounded-lg"
                rows={18}
                cols={19}
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
                <button className="cursor-pointer py-1.5 px-[13px] bg-[transparent] w-[89px] rounded-3xs box-border flex flex-row items-start justify-start border-[1px] border-solid border-lightgray-100 hover:bg-silver-500 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-400">
                  <b className="relative text-sm leading-[23px] font-semibold font-manrope text-gray-300 text-left inline-block min-w-[61px]">
                    Business
                  </b>
                </button>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full text-gray-300">
                  <h3 className="m-0 flex-1 relative text-inherit tracking-[-0.48px] leading-[32.4px] font-bold font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[26px]">
                    10 Delightful Dining Room Decor Trends for Spring
                  </h3>
                </div>
                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[15px] gap-[26px] text-xs">
                  <div className="flex flex-row items-start justify-start gap-[6px]">
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="w-[5px] h-[5px] relative rounded-[50%] bg-lightgray-100" />
                    </div>
                    <div className="relative leading-[20px] font-semibold inline-block min-w-[75px]">
                      July 20, 2022
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[6px]">
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="w-[5px] h-[5px] relative rounded-[50%] bg-lightgray-100" />
                    </div>
                    <div className="relative leading-[20px] font-semibold inline-block min-w-[58px]">
                      7 min read
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-lg">
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <b className="relative leading-[18px] font-bold">
                      Continue Reading
                    </b>
                  </div>
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    alt=""
                    src="/icon--24px--v-arrow--right1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-96 shrink-0 flex flex-col items-start justify-start gap-[12px] min-w-[365px]">
              <textarea
                className="[border:none] bg-gainsboro-200 h-[350px] w-auto [outline:none] self-stretch relative rounded-lg"
                rows={18}
                cols={19}
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-gray-300">
                  <button className="cursor-pointer py-1.5 px-[13px] bg-[transparent] w-[89px] rounded-3xs box-border flex flex-row items-start justify-start border-[1px] border-solid border-lightgray-100 hover:bg-silver-500 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-400">
                    <b className="relative text-sm leading-[23px] font-semibold font-manrope text-gray-300 text-left inline-block min-w-[61px]">
                      Business
                    </b>
                  </button>
                  <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.48px] leading-[32.4px] font-bold font-inherit mq450:text-lgi mq450:leading-[26px]">
                    10 Delightful Dining Room Decor Trends for Spring
                  </h3>
                </div>
                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[7px] gap-[26px] text-xs">
                  <div className="flex flex-row items-start justify-start gap-[6px]">
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="w-[5px] h-[5px] relative rounded-[50%] bg-lightgray-100" />
                    </div>
                    <div className="relative leading-[20px] font-semibold inline-block min-w-[75px]">
                      July 20, 2022
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[6px]">
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="w-[5px] h-[5px] relative rounded-[50%] bg-lightgray-100" />
                    </div>
                    <div className="relative leading-[20px] font-semibold inline-block min-w-[58px]">
                      7 min read
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-lg">
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <b className="relative leading-[18px] font-bold">
                      Continue Reading
                    </b>
                  </div>
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    alt=""
                    src="/icon--24px--v-arrow--right1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-96 shrink-0 flex flex-col items-start justify-start gap-[12px] min-w-[365px]">
              <textarea
                className="[border:none] bg-gainsboro-200 h-[350px] w-auto [outline:none] self-stretch relative rounded-lg"
                rows={18}
                cols={19}
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-gray-300">
                  <button className="cursor-pointer py-1.5 px-[13px] bg-[transparent] w-[89px] rounded-3xs box-border flex flex-row items-start justify-start border-[1px] border-solid border-lightgray-100 hover:bg-silver-500 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-400">
                    <b className="relative text-sm leading-[23px] font-semibold font-manrope text-gray-300 text-left inline-block min-w-[61px]">
                      Business
                    </b>
                  </button>
                  <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.48px] leading-[32.4px] font-bold font-inherit mq450:text-lgi mq450:leading-[26px]">
                    10 Delightful Dining Room Decor Trends for Spring
                  </h3>
                </div>
                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[7px] gap-[26px] text-xs">
                  <div className="flex flex-row items-start justify-start gap-[6px]">
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="w-[5px] h-[5px] relative rounded-[50%] bg-lightgray-100" />
                    </div>
                    <div className="relative leading-[20px] font-semibold inline-block min-w-[75px]">
                      July 20, 2022
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[6px]">
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="w-[5px] h-[5px] relative rounded-[50%] bg-lightgray-100" />
                    </div>
                    <div className="relative leading-[20px] font-semibold inline-block min-w-[58px]">
                      7 min read
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-lg">
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <b className="relative leading-[18px] font-bold">
                      Continue Reading
                    </b>
                  </div>
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    alt=""
                    src="/icon--24px--v-arrow--right1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-96 shrink-0 flex flex-col items-start justify-start gap-[12px] min-w-[365px]">
              <textarea
                className="[border:none] bg-gainsboro-200 h-[350px] w-auto [outline:none] self-stretch relative rounded-lg"
                rows={18}
                cols={19}
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
                <button className="cursor-pointer py-1.5 px-[13px] bg-[transparent] w-[89px] rounded-3xs box-border flex flex-row items-start justify-start border-[1px] border-solid border-lightgray-100 hover:bg-silver-500 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-400">
                  <b className="relative text-sm leading-[23px] font-semibold font-manrope text-gray-300 text-left inline-block min-w-[61px]">
                    Business
                  </b>
                </button>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full text-gray-300">
                  <h3 className="m-0 flex-1 relative text-inherit tracking-[-0.48px] leading-[32.4px] font-bold font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[26px]">
                    10 Delightful Dining Room Decor Trends for Spring
                  </h3>
                </div>
                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[15px] gap-[26px] text-xs">
                  <div className="flex flex-row items-start justify-start gap-[6px]">
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="w-[5px] h-[5px] relative rounded-[50%] bg-lightgray-100" />
                    </div>
                    <div className="relative leading-[20px] font-semibold inline-block min-w-[75px]">
                      July 20, 2022
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[6px]">
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="w-[5px] h-[5px] relative rounded-[50%] bg-lightgray-100" />
                    </div>
                    <div className="relative leading-[20px] font-semibold inline-block min-w-[58px]">
                      7 min read
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-lg">
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <b className="relative leading-[18px] font-bold">
                      Continue Reading
                    </b>
                  </div>
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    alt=""
                    src="/icon--24px--v-arrow--right1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-96 shrink-0 flex flex-col items-start justify-start gap-[12px] min-w-[365px] text-gray-300">
              <textarea
                className="[border:none] bg-gainsboro-200 h-[350px] w-auto [outline:none] self-stretch relative rounded-lg"
                rows={18}
                cols={19}
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[23px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <button className="cursor-pointer py-1.5 px-[13px] bg-[transparent] w-[89px] rounded-3xs box-border flex flex-row items-start justify-start border-[1px] border-solid border-lightgray-100 hover:bg-silver-500 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-400">
                    <b className="relative text-sm leading-[23px] font-semibold font-manrope text-gray-300 text-left inline-block min-w-[61px]">
                      Business
                    </b>
                  </button>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                    <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.48px] leading-[32.4px] font-bold font-inherit mq450:text-lgi mq450:leading-[26px]">
                      10 Delightful Dining Room Decor Trends for Spring
                    </h3>
                    <div className="flex flex-row items-start justify-start gap-[26px] text-xs text-dimgray-100">
                      <div className="flex flex-row items-start justify-start gap-[6px]">
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                          <div className="w-[5px] h-[5px] relative rounded-[50%] bg-lightgray-100" />
                        </div>
                        <div className="relative leading-[20px] font-semibold inline-block min-w-[75px]">
                          July 20, 2022
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[6px]">
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                          <div className="w-[5px] h-[5px] relative rounded-[50%] bg-lightgray-100" />
                        </div>
                        <div className="relative leading-[20px] font-semibold inline-block min-w-[58px]">
                          7 min read
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-lg text-dimgray-100">
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <b className="relative leading-[18px] font-bold">
                      Continue Reading
                    </b>
                  </div>
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    alt=""
                    src="/icon--24px--v-arrow--right1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-96 shrink-0 flex flex-col items-start justify-start gap-[12px] min-w-[365px]">
              <textarea
                className="[border:none] bg-gainsboro-200 h-[350px] w-auto [outline:none] self-stretch relative rounded-lg"
                rows={18}
                cols={19}
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
                <button className="cursor-pointer py-1.5 px-[13px] bg-[transparent] w-[89px] rounded-3xs box-border flex flex-row items-start justify-start border-[1px] border-solid border-lightgray-100 hover:bg-silver-500 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-400">
                  <b className="relative text-sm leading-[23px] font-semibold font-manrope text-gray-300 text-left inline-block min-w-[61px]">
                    Business
                  </b>
                </button>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full text-gray-300">
                  <h3 className="m-0 flex-1 relative text-inherit tracking-[-0.48px] leading-[32.4px] font-bold font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[26px]">
                    10 Delightful Dining Room Decor Trends for Spring
                  </h3>
                </div>
                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[15px] gap-[26px] text-xs">
                  <div className="flex flex-row items-start justify-start gap-[6px]">
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="w-[5px] h-[5px] relative rounded-[50%] bg-lightgray-100" />
                    </div>
                    <div className="relative leading-[20px] font-semibold inline-block min-w-[75px]">
                      July 20, 2022
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[6px]">
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="w-[5px] h-[5px] relative rounded-[50%] bg-lightgray-100" />
                    </div>
                    <div className="relative leading-[20px] font-semibold inline-block min-w-[58px]">
                      7 min read
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-lg">
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <b className="relative leading-[18px] font-bold">
                      Continue Reading
                    </b>
                  </div>
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    alt=""
                    src="/icon--24px--v-arrow--right1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-96 shrink-0 flex flex-col items-start justify-start gap-[12px] min-w-[365px]">
              <textarea
                className="[border:none] bg-gainsboro-200 h-[350px] w-auto [outline:none] self-stretch relative rounded-lg"
                rows={18}
                cols={19}
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
                <button className="cursor-pointer py-1.5 px-[13px] bg-[transparent] w-[89px] rounded-3xs box-border flex flex-row items-start justify-start border-[1px] border-solid border-lightgray-100 hover:bg-silver-500 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-400">
                  <b className="relative text-sm leading-[23px] font-semibold font-manrope text-gray-300 text-left inline-block min-w-[61px]">
                    Business
                  </b>
                </button>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full text-gray-300">
                  <h3 className="m-0 flex-1 relative text-inherit tracking-[-0.48px] leading-[32.4px] font-bold font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[26px]">
                    10 Delightful Dining Room Decor Trends for Spring
                  </h3>
                </div>
                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[15px] gap-[26px] text-xs">
                  <div className="flex flex-row items-start justify-start gap-[6px]">
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="w-[5px] h-[5px] relative rounded-[50%] bg-lightgray-100" />
                    </div>
                    <div className="relative leading-[20px] font-semibold inline-block min-w-[75px]">
                      July 20, 2022
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[6px]">
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="w-[5px] h-[5px] relative rounded-[50%] bg-lightgray-100" />
                    </div>
                    <div className="relative leading-[20px] font-semibold inline-block min-w-[58px]">
                      7 min read
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-lg">
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <b className="relative leading-[18px] font-bold">
                      Continue Reading
                    </b>
                  </div>
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    alt=""
                    src="/icon--24px--v-arrow--right1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-center text-base text-gray-300 mq450:flex-wrap mq450:justify-center">
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
        </section>
      </main>
      <footer className="self-stretch bg-white flex flex-col items-center justify-center py-20 px-5 box-border max-w-full text-left text-xl text-orangered font-marko-one mq750:pt-[52px] mq750:pb-[52px] mq750:box-border">
        <div className="w-[1200px] flex flex-col items-start justify-start gap-[120px] max-w-full shrink-0 lg:gap-[60px] mq750:gap-[30px]">
          <div className="self-stretch flex flex-row items-center justify-start [row-gap:20px] max-w-full mq1050:flex-wrap">
            <div className="w-[341.7px] flex flex-col items-start justify-start gap-[43px] min-w-[341.7px] max-w-full mq450:gap-[21px] mq450:min-w-full mq1050:flex-1">
              <div className="flex flex-row items-center justify-start py-0 pr-[213px] pl-0 gap-[11px] mq450:flex-wrap mq450:pr-5 mq450:box-border">
                <img
                  className="h-10 w-10 relative overflow-hidden shrink-0"
                  alt=""
                  src="/realestate-11.svg"
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

export default BlogPage;
