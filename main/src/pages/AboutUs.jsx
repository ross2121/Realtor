import NumberCount2 from "../components/NumberCount2";
import BlogSubscribe from "../components/BlogSubscribe";

const AboutUs = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[100px] leading-[normal] tracking-[normal] mq450:gap-[25px] mq750:gap-[50px]">
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
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-35xl text-gray-300 font-manrope">
        <div className="w-[1200px] flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-1.08px] leading-[75.6px] font-extrabold font-inherit mq450:text-[32px] mq450:leading-[45px] mq1050:text-[43px] mq1050:leading-[60px]">
              <p className="m-0">{`Reimagining real estate to `}</p>
              <p className="m-0">make it easier to unlock.</p>
            </h1>
            <p className="m-0 self-stretch relative text-lg leading-[32.4px] text-dimgray-200">
              <span className="block">{`On the other hand, we denounce with righteous indignation and dislike men who `}</span>
              <span className="block">{`are so beguiled and demoralized by the charms of pleasure of the moment, `}</span>
              <span className="block">
                so blinded by desire, that they cannot foresee the pain and
                trouble.
              </span>
            </p>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full mq1050:flex-wrap">
              <div className="h-[400px] flex-1 relative rounded-3xs bg-gainsboro-200 min-w-[515px] max-w-full mq750:min-w-full" />
              <div className="h-[400px] w-96 relative rounded-3xs bg-gainsboro-200 min-w-[384px] max-w-full mq450:min-w-full mq1050:flex-1" />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full mq1050:flex-wrap">
              <div className="h-[400px] w-96 relative rounded-3xs bg-gainsboro-200 min-w-[384px] max-w-full mq450:min-w-full mq1050:flex-1" />
              <div className="h-[400px] flex-1 relative rounded-3xs bg-gainsboro-200 min-w-[515px] max-w-full mq750:min-w-full" />
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch bg-snow flex flex-col items-center justify-center py-[50px] px-5 box-border max-w-full text-left text-27xl text-gray-300 font-manrope">
        <div className="w-[1200px] flex flex-row items-start justify-between gap-[20px] max-w-full mq1050:flex-wrap mq1050:justify-center">
          <NumberCount2
            icon="/icon.svg"
            m="$15.4M"
            ownedFrom="Owned from"
            propertiesTransactions="Properties transactions"
          />
          <div className="h-[213px] w-[225px] flex flex-col items-start justify-start gap-[18px]">
            <div className="w-[60px] h-[60px] relative flex items-center justify-center">
              <img
                className="w-full h-full object-contain absolute left-[0px] top-[30px] [transform:scale(2)]"
                alt=""
                src="/icon-1.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
              <div className="self-stretch relative tracking-[-0.92px] leading-[65px] font-extrabold mq450:text-9xl mq450:leading-[39px] mq1050:text-18xl mq1050:leading-[52px]">
                25K+
              </div>
              <div className="relative text-xl tracking-[-0.4px] leading-[28px] font-semibold text-slategray mq450:text-base mq450:leading-[22px]">{`Properties for Buy & sell Successfully`}</div>
            </div>
          </div>
          <NumberCount2
            icon="/icon-21.svg"
            m="500"
            ownedFrom="Daily completed "
            propertiesTransactions="transactions"
            propLeft="15px"
          />
          <div className="h-[185px] w-[225px] flex flex-col items-start justify-start gap-[18px]">
            <div className="w-[60px] h-[60px] relative flex items-center justify-center">
              <img
                className="w-full h-full object-contain absolute left-[15px] top-[30px] [transform:scale(2)]"
                alt=""
                src="/icon-21.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
              <div className="self-stretch relative tracking-[-0.92px] leading-[65px] font-extrabold mq450:text-9xl mq450:leading-[39px] mq1050:text-18xl mq1050:leading-[52px]">
                600+
              </div>
              <div className="self-stretch relative text-xl tracking-[-0.4px] leading-[28px] font-semibold text-slategray mq450:text-base mq450:leading-[22px]">
                Reagular Clients
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1387px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-17xl text-gray-300 font-manrope">
        <div className="w-[1147px] flex flex-col items-start justify-start gap-[12.5px] max-w-full">
          <div className="w-[531.5px] flex flex-col items-start justify-start gap-[20px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.72px] leading-[51px] font-extrabold font-inherit mq450:text-3xl mq450:leading-[30px] mq1050:text-10xl mq1050:leading-[40px]">
              A note from our founders.
            </h1>
            <p className="m-0 self-stretch relative text-lg leading-[32.4px] text-dimgray-200">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. In a free hour,
            </p>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[84px] max-w-full text-center text-xl lg:gap-[42px] mq750:gap-[21px]">
            <div className="flex-1 flex flex-col items-start justify-start pt-[43.5px] px-0 pb-0 box-border min-w-[345px] max-w-full mq450:min-w-full mq750:pt-7 mq750:box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[26px] max-w-full mq450:flex-wrap">
                    <div className="h-[35px] w-[35px] relative">
                      <img
                        className="absolute top-[0px] left-[0px] w-full h-full"
                        loading="lazy"
                        alt=""
                        src="/ellipse-2691.svg"
                      />
                      <b className="absolute top-[3px] left-[12px] tracking-[-0.4px] leading-[28px] font-extrabold inline-block min-w-[10px] z-[1] mq450:text-base mq450:leading-[22px]">
                        1
                      </b>
                    </div>
                    <h3 className="m-0 flex-1 relative text-3xl tracking-[-0.44px] leading-[31px] font-bold font-inherit text-left inline-block min-w-[156px] max-w-full mq450:text-lg mq450:leading-[25px]">
                      It all started in 1995
                    </h3>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end max-w-full text-left text-lg text-dimgray-200">
                    <p className="m-0 w-[470.5px] relative leading-[32.4px] inline-block shrink-0 max-w-full">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, On the other hand,
                      we denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment.
                    </p>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[26px] max-w-full mq450:flex-wrap">
                    <div className="h-[35px] w-[35px] relative">
                      <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-full h-full border-[0px] border-solid border-gray-300" />
                      <b className="absolute top-[3px] left-[11px] tracking-[-0.4px] leading-[28px] font-extrabold inline-block min-w-[13px] z-[1] mq450:text-base mq450:leading-[22px]">
                        2
                      </b>
                    </div>
                    <h3 className="m-0 flex-1 relative text-3xl tracking-[-0.44px] leading-[31px] font-bold font-inherit text-left inline-block min-w-[200px] max-w-full mq450:text-lg mq450:leading-[25px]">
                      Donate launches in 2007
                    </h3>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end max-w-full text-left text-lg text-dimgray-200">
                    <p className="m-0 w-[470.5px] relative leading-[32.4px] inline-block shrink-0 max-w-full">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, On the other hand,
                      we denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment.
                    </p>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[26px] max-w-full mq750:flex-wrap">
                    <div className="h-[35px] w-[35px] relative">
                      <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-full h-full border-[0px] border-solid border-gray-300" />
                      <b className="absolute top-[3px] left-[12px] tracking-[-0.4px] leading-[28px] font-extrabold inline-block min-w-[12px] z-[1] mq450:text-base mq450:leading-[22px]">
                        3
                      </b>
                    </div>
                    <h3 className="m-0 relative text-3xl tracking-[-0.44px] leading-[31px] font-bold font-inherit text-left inline-block max-w-full mq450:text-lg mq450:leading-[25px]">
                      Relasto holds its initial public offering in 2008
                    </h3>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end max-w-full text-left text-lg text-dimgray-200">
                    <p className="m-0 w-[470.5px] relative leading-[32.4px] inline-block shrink-0 max-w-full">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, On the other hand,
                      we denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[589px] flex-1 relative rounded-3xs min-w-[345px] max-w-full mq450:min-w-full" />
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[70px] box-border max-w-full text-left text-17xl text-gray-300 font-manrope lg:pl-[35px] lg:box-border">
        <div className="w-[1150px] flex flex-row flex-wrap items-start justify-center gap-[158px] max-w-full lg:gap-[79px] mq450:gap-[20px] mq750:gap-[39px]">
          <div className="h-[589px] flex-1 relative rounded-3xs min-w-[322px] max-w-full" />
          <div className="flex-1 flex flex-col items-start justify-start pt-[84px] px-0 pb-0 box-border min-w-[322px] max-w-full mq750:pt-[55px] mq750:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[56px] mq750:gap-[28px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.72px] leading-[51px] font-extrabold font-inherit mq450:text-3xl mq450:leading-[30px] mq1050:text-10xl mq1050:leading-[40px]">
                  Our vision is simple.
                </h1>
                <p className="m-0 self-stretch relative text-lg leading-[32.4px] text-dimgray-200">
                  <span className="block">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. In a free hour, On the other hand, we
                    denounce with righteous indignation and dislike men who are
                    so beguiled and demoralized by the charms of pleasure of the
                    moment.
                  </span>
                  <span className="block">
                    In a free hour, On the other hand, we denounce with
                    righteous indignation and dislike men .
                  </span>
                </p>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px] text-xl">
                <div className="self-stretch relative tracking-[-0.4px] leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                  Kausar Pial
                </div>
                <div className="self-stretch relative text-lg leading-[33px] font-semibold text-dimgray-200">
                  CEO at Static Mania
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-17xl text-gray-300 font-manrope">
        <div className="w-[1200px] flex flex-col items-start justify-start gap-[60px] max-w-full lg:gap-[30px]">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.72px] leading-[51px] font-extrabold font-inherit mq450:text-3xl mq450:leading-[30px] mq1050:text-10xl mq1050:leading-[40px]">
            Relasto Team members
          </h1>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px_22.7px] min-h-[1125px] text-left text-xl">
            <div className="h-[359px] flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[268px]">
              <div className="self-stretch flex-1 relative rounded-3xs bg-gainsboro-200" />
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative tracking-[-0.4px] leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                  Kausar Pial
                </div>
                <div className="self-stretch relative text-lg leading-[33px] text-dimgray-200">
                  CEO
                </div>
              </div>
            </div>
            <div className="h-[359px] flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[268px]">
              <div className="self-stretch flex-1 relative rounded-3xs bg-gainsboro-200" />
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative tracking-[-0.4px] leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                  Floyd Miles
                </div>
                <div className="self-stretch relative text-lg leading-[33px] text-dimgray-200">
                  President of Sales
                </div>
              </div>
            </div>
            <div className="h-[359px] flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[268px]">
              <div className="self-stretch flex-1 relative rounded-3xs bg-gainsboro-200" />
              <div className="self-stretch flex flex-col items-start justify-start">
                <b className="self-stretch relative tracking-[-0.4px] leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                  Darlene Robertson
                </b>
                <div className="self-stretch relative text-lg leading-[33px] text-dimgray-200">
                  Marketing Coordinator
                </div>
              </div>
            </div>
            <div className="h-[359px] flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[268px]">
              <div className="self-stretch flex-1 relative rounded-3xs bg-gainsboro-200" />
              <div className="self-stretch flex flex-col items-start justify-start">
                <b className="self-stretch relative tracking-[-0.4px] leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                  Guy Hawkins
                </b>
                <div className="self-stretch relative text-lg leading-[33px] text-dimgray-200">
                  Marketing Coordinator
                </div>
              </div>
            </div>
            <div className="h-[359px] flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[268px]">
              <div className="self-stretch flex-1 relative rounded-3xs bg-gainsboro-200" />
              <div className="self-stretch flex flex-col items-start justify-start">
                <b className="self-stretch relative tracking-[-0.4px] leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                  Jerome Bell
                </b>
                <div className="self-stretch relative text-lg leading-[33px] text-dimgray-200">
                  Marketing Coordinator
                </div>
              </div>
            </div>
            <div className="h-[359px] flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[268px]">
              <div className="self-stretch flex-1 relative rounded-3xs bg-gainsboro-200" />
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative tracking-[-0.4px] leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                  Ralph Edwards
                </div>
                <div className="self-stretch relative text-lg leading-[33px] text-dimgray-200">
                  Marketing Coordinator
                </div>
              </div>
            </div>
            <div className="h-[359px] flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[268px]">
              <div className="self-stretch flex-1 relative rounded-3xs bg-gainsboro-200" />
              <div className="self-stretch flex flex-col items-start justify-start">
                <b className="self-stretch relative tracking-[-0.4px] leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                  Arlene McCoy
                </b>
                <div className="self-stretch relative text-lg leading-[33px] text-dimgray-200">
                  Marketing Coordinator
                </div>
              </div>
            </div>
            <div className="h-[359px] flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[268px]">
              <div className="self-stretch flex-1 relative rounded-3xs bg-gainsboro-200" />
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative tracking-[-0.4px] leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                  Devon Lane
                </div>
                <div className="self-stretch relative text-lg leading-[33px] text-dimgray-200">
                  Marketing Coordinator
                </div>
              </div>
            </div>
            <div className="h-[359px] flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[268px]">
              <div className="self-stretch flex-1 relative rounded-3xs bg-gainsboro-200" />
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative tracking-[-0.4px] leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                  Courtney Henry
                </div>
                <p className="m-0 self-stretch relative text-lg leading-[33px] text-dimgray-200">
                  Marketing Coordinator
                </p>
              </div>
            </div>
            <div className="h-[359px] flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[268px]">
              <div className="self-stretch flex-1 relative rounded-3xs bg-gainsboro-200" />
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative tracking-[-0.4px] leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                  Bessie Cooper
                </div>
                <div className="self-stretch relative text-lg leading-[33px] text-dimgray-200">
                  Marketing Coordinator
                </div>
              </div>
            </div>
            <div className="h-[359px] flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[268px]">
              <div className="self-stretch flex-1 relative rounded-3xs bg-gainsboro-200" />
              <div className="self-stretch flex flex-col items-start justify-start">
                <b className="self-stretch relative tracking-[-0.4px] leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                  Cody Fisher
                </b>
                <div className="self-stretch relative text-lg leading-[33px] text-dimgray-200">
                  Marketing Coordinator
                </div>
              </div>
            </div>
            <div className="h-[359px] flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[268px]">
              <div className="self-stretch flex-1 relative rounded-3xs bg-gainsboro-200" />
              <div className="self-stretch flex flex-col items-start justify-start">
                <b className="self-stretch relative tracking-[-0.4px] leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                  Cody Fisher
                </b>
                <div className="self-stretch relative text-lg leading-[33px] text-dimgray-200">
                  Marketing Coordinator
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BlogSubscribe />
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

export default AboutUs;
