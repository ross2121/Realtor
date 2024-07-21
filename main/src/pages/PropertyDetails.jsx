const PropertyDetails = () => {
  return (
    <div className="w-full relative bg-snow overflow-hidden flex flex-col items-start justify-start gap-[100px] text-left text-xl text-gray-300 font-manrope">
      <div className="self-stretch flex flex-col items-start justify-start gap-[60px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px]">
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
                  <div className="relative leading-[16px] font-semibold">
                    Home
                  </div>
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
                <div className="relative leading-[16px] font-semibold">
                  Blog
                </div>
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
          <div className="self-stretch flex flex-col items-center justify-center py-0 px-[120px] text-lg">
            <div className="self-stretch flex flex-row items-center justify-center gap-[24px]">
              <div className="flex-1 flex flex-col items-center justify-start">
                <div className="self-stretch relative rounded-3xs bg-gainsboro-200 h-[550px]" />
              </div>
              <div className="h-[550px] flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch relative rounded-3xs bg-gainsboro-200 h-[263px]" />
                <div className="w-96 h-[263px] flex flex-col items-end justify-start">
                  <div className="self-stretch relative rounded-3xs bg-gainsboro-200 h-[263px]" />
                  <div className="rounded-3xs bg-white flex flex-col items-start justify-start py-2.5 px-4">
                    <div className="w-[90px] flex flex-row items-center justify-start gap-[6px]">
                      <img
                        className="w-6 relative h-6"
                        alt=""
                        src="/icon--image.svg"
                      />
                      <b className="flex-1 relative leading-[18px]">3 more</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center py-0 px-[120px] text-9xl">
            <div className="flex-1 h-[1757px] flex flex-row items-start justify-center gap-[24px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch rounded-3xs bg-white flex flex-row items-start justify-start p-10 border-[1px] border-solid border-lightgray-100">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[44px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                        <div className="self-stretch relative tracking-[-0.56px] leading-[37.8px] font-extrabold">
                          Trovilla Plan in Sereno Canyon - Estate Collection by
                          Toll Brothers
                        </div>
                        <div className="self-stretch relative text-xl tracking-[-0.4px] leading-[28px] font-semibold">
                          2861 62nd Ave, Oakland, CA 94605
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[180px] pl-0 gap-[16px] text-5xl">
                        <div className="flex-1 rounded-3xs bg-white flex flex-col items-center justify-center py-[7px] px-6 border-[1px] border-solid border-dimgray-100">
                          <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                            <b className="self-stretch relative tracking-[-0.48px] leading-[32.4px]">
                              $649,900
                            </b>
                            <div className="self-stretch relative text-xs leading-[19.2px] font-semibold text-dimgray-100">
                              Online / Cash Payment
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 rounded-3xs bg-white flex flex-col items-center justify-center py-[7px] px-6 border-[1px] border-solid border-lightgray-100">
                          <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                            <b className="self-stretch relative tracking-[-0.48px] leading-[32.4px]">
                              $850 / month
                            </b>
                            <div className="self-stretch relative text-xs leading-[19.2px] font-semibold text-dimgray-100">
                              0% EMI for 6 Months
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-xl">
                      <div className="self-stretch relative tracking-[-0.4px] leading-[28px] font-semibold">
                        Well-constructed 1562 Sq Ft Home Is Now Offering To You
                        In Uttara For Sale
                      </div>
                      <div className="self-stretch relative text-lg leading-[32.4px] text-dimgray-100">
                        A slider is great way to display a slideshow featuring
                        images or videos, usually on your homepage. Adding
                        sliders to your site is no longer difficult. You don’t
                        have to know coding anymore. Just use a slider widget
                        and it will automatically insert the slider on your web
                        page. So, the Elementor slider would be a great tool to
                        work with when building a WordPress site.
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                        <div className="self-stretch relative tracking-[-0.56px] leading-[37.8px] font-extrabold">
                          Local Information
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[200px] pl-0 gap-[12px] text-base">
                          <div className="flex-1 rounded-3xs box-border h-11 flex flex-row items-center justify-center py-3.5 px-6 text-center border-[1px] border-solid border-lightgray-100">
                            <div className="relative leading-[16px] font-semibold">
                              Map
                            </div>
                          </div>
                          <div className="flex-1 rounded-3xs bg-gray-300 h-11 flex flex-row items-center justify-center py-3.5 px-6 box-border text-white">
                            <div className="relative leading-[16px] font-semibold">
                              Schools
                            </div>
                          </div>
                          <div className="flex-1 rounded-3xs box-border h-11 flex flex-row items-center justify-center py-3.5 px-6 border-[1px] border-solid border-lightgray-100">
                            <div className="relative leading-[16px] font-semibold">
                              Crime
                            </div>
                          </div>
                          <div className="flex-1 rounded-3xs box-border h-11 flex flex-row items-center justify-center py-3.5 px-4 border-[1px] border-solid border-lightgray-100">
                            <div className="relative leading-[16px] font-semibold">{`Shop & Eat`}</div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-center justify-start">
                        <div className="self-stretch relative rounded-3xs h-[400px]" />
                        <div className="flex flex-row items-center justify-start gap-[281px]">
                          <img
                            className="w-[54px] relative h-[54px] object-cover"
                            alt=""
                            src="/icon--map@2x.png"
                          />
                          <img
                            className="w-[54px] relative h-[54px] object-cover"
                            alt=""
                            src="/icon--map@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-3xs bg-white flex flex-col items-start justify-start p-10 border-[1px] border-solid border-lightgray-100">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                    <div className="relative tracking-[-0.56px] leading-[37.8px] font-extrabold">
                      Home Highlights
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[150px] text-lg text-dimgray-100">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[55px]">
                          <div className="flex-1 h-8 flex flex-row items-center justify-start gap-[10px]">
                            <div className="w-2 relative rounded-[50%] bg-dimgray-100 h-2" />
                            <div className="flex-1 relative leading-[32.4px]">
                              Parking
                            </div>
                          </div>
                          <div className="flex-1 relative leading-[32.4px] font-semibold text-gray-300 text-right">
                            No Info
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[47px]">
                          <div className="flex-1 h-8 flex flex-row items-center justify-start gap-[10px]">
                            <div className="w-2 relative rounded-[50%] bg-dimgray-100 h-2" />
                            <div className="flex-1 relative leading-[32.4px]">
                              Outdoor
                            </div>
                          </div>
                          <div className="flex-1 relative leading-[32.4px] font-semibold text-gray-300 text-right">
                            No Info
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[85px]">
                          <div className="flex-1 h-8 flex flex-row items-center justify-start gap-[10px]">
                            <div className="w-2 relative rounded-[50%] bg-dimgray-100 h-2" />
                            <div className="flex-1 relative leading-[32.4px]">
                              A/C
                            </div>
                          </div>
                          <div className="flex-1 relative leading-[32.4px] font-semibold text-gray-300 text-right">
                            No Info
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[40px]">
                          <div className="flex-1 h-8 flex flex-row items-center justify-start gap-[10px]">
                            <div className="w-2 relative rounded-[50%] bg-dimgray-100 h-2" />
                            <div className="flex-1 relative leading-[32.4px]">
                              Year Built
                            </div>
                          </div>
                          <div className="flex-1 relative leading-[32.4px] font-semibold text-gray-300 text-right">
                            2021
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[80px]">
                          <div className="flex-1 h-8 flex flex-row items-center justify-start gap-[10px]">
                            <div className="w-2 relative rounded-[50%] bg-dimgray-100 h-2" />
                            <div className="flex-1 relative leading-[32.4px]">
                              HOA
                            </div>
                          </div>
                          <div className="flex-1 relative leading-[32.4px] font-semibold text-gray-300 text-right">
                            None
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[32px]">
                          <div className="flex-1 h-8 flex flex-row items-center justify-start gap-[10px]">
                            <div className="w-2 relative rounded-[50%] bg-dimgray-100 h-2" />
                            <div className="flex-1 relative leading-[32.4px]">
                              Price/Sqft
                            </div>
                          </div>
                          <div className="flex-1 relative leading-[32.4px] font-semibold text-gray-300 text-right">
                            $560
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[66px]">
                          <div className="flex-1 h-8 flex flex-row items-center justify-start gap-[10px]">
                            <div className="w-2 relative rounded-[50%] bg-dimgray-100 h-2" />
                            <div className="flex-1 relative leading-[32.4px]">
                              Listed
                            </div>
                          </div>
                          <div className="flex-1 relative leading-[32.4px] font-semibold text-gray-300 text-right">
                            No Info
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-3xs bg-white flex flex-col items-start justify-start p-10 border-[1px] border-solid border-lightgray-100">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[26px]">
                    <div className="self-stretch relative tracking-[-0.56px] leading-[37.8px] font-extrabold">
                      Agent Information
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[24px] text-base">
                      <div className="w-[150px] relative rounded-3xs bg-gainsboro-200 h-[150px]" />
                      <div className="flex flex-col items-start justify-start gap-[3px]">
                        <div className="relative text-xl tracking-[-0.4px] leading-[28px] font-semibold">
                          Bruno Fernandes
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[14px]">
                          <div className="flex flex-row items-start justify-start gap-[4px]">
                            <img
                              className="w-4 relative h-4"
                              alt=""
                              src="/icon--16px--start--active.svg"
                            />
                            <img
                              className="w-4 relative h-4"
                              alt=""
                              src="/icon--16px--start--active.svg"
                            />
                            <img
                              className="w-4 relative h-4"
                              alt=""
                              src="/icon--16px--start--active.svg"
                            />
                            <img
                              className="w-4 relative h-4"
                              alt=""
                              src="/icon--16px--start--active.svg"
                            />
                            <img
                              className="w-4 relative h-4"
                              alt=""
                              src="/icon--16px--start--unactive.svg"
                            />
                          </div>
                          <div className="relative leading-[28.8px] font-semibold">
                            4 review
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-dimgray-100">
                          <img
                            className="w-5 relative h-5"
                            alt=""
                            src="/icon--20px--email.svg"
                          />
                          <div className="relative leading-[28.8px] font-medium">
                            bruno@relasto .com
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-dimgray-100">
                          <img
                            className="w-5 relative h-5"
                            alt=""
                            src="/icon--20px--call.svg"
                          />
                          <div className="relative leading-[28.8px] font-medium">
                            +65 0231 965 965
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-3xs bg-white flex flex-row items-start justify-start p-6 border-[1px] border-solid border-lightgray-100">
                <div className="w-[336px] flex flex-col items-start justify-start gap-[40px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                    <div className="self-stretch relative tracking-[-0.56px] leading-[37.8px] font-extrabold">
                      Request for Visit
                    </div>
                    <div className="self-stretch h-[440px] flex flex-col items-start justify-start gap-[12px] text-lg text-dimgray-100">
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
                      <div className="self-stretch rounded-3xs bg-white overflow-hidden flex flex-col items-start justify-start py-3.5 px-4 border-[1px] border-solid border-lightgray-100">
                        <div className="self-stretch flex flex-row items-center justify-start gap-[14px]">
                          <img
                            className="w-6 relative h-6"
                            alt=""
                            src="/icon--24px--calendar.svg"
                          />
                          <div className="flex-1 relative leading-[32.4px] font-semibold">
                            Date
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
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center py-0 px-[120px] text-9xl">
          <div className="self-stretch flex flex-col items-center justify-center gap-[40px]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[20px]">
              <div className="flex-1 relative tracking-[-0.56px] leading-[37.8px] font-extrabold">
                Latest Property Listings
              </div>
              <div className="w-[214.3px] relative h-6 text-lg text-orangered">
                <b className="absolute top-[0px] left-[calc(50%_+_15.15px)] leading-[18px]">
                  Explore All
                </b>
                <img
                  className="absolute top-[22px] left-[calc(50%_-_107.15px)] w-[0.4px] h-0.5"
                  alt=""
                  src="/icon--arrow.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-base">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative rounded-t-3xs rounded-b-none h-[260px]" />
                <div className="self-stretch rounded-t-none rounded-b-3xs bg-snow flex flex-col items-start justify-start py-[30px] px-5 border-[1px] border-solid border-mistyrose">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[27px]">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                      <img
                        className="w-6 relative h-6"
                        alt=""
                        src="/icon--map-2.svg"
                      />
                      <div className="flex-1 relative leading-[28.8px] font-semibold">
                        2861 62nd Ave, Oakland, CA 94605
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[21px] text-dimgray-200">
                      <div className="self-stretch flex flex-row items-center justify-between">
                        <div className="w-[152px] flex flex-row items-center justify-start gap-[12px]">
                          <img
                            className="w-5 relative h-5"
                            alt=""
                            src="/icon-.svg"
                          />
                          <div className="flex-1 relative leading-[16px] font-semibold">
                            3 Bed Room
                          </div>
                        </div>
                        <div className="w-[152px] flex flex-row items-center justify-start gap-[12px]">
                          <img
                            className="w-5 relative h-5"
                            alt=""
                            src="/icon--1.svg"
                          />
                          <div className="relative leading-[16px] font-semibold">
                            1 Bath
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-between">
                        <div className="w-[152px] flex flex-row items-center justify-start gap-[12px]">
                          <img
                            className="w-5 relative h-5"
                            alt=""
                            src="/icon--2.svg"
                          />
                          <div className="flex-1 relative leading-[16px] font-semibold">
                            1,032 sqft
                          </div>
                        </div>
                        <div className="w-[152px] flex flex-row items-center justify-start gap-[12px]">
                          <img
                            className="w-5 relative h-5"
                            alt=""
                            src="/iocn--menuimage.svg"
                          />
                          <div className="relative leading-[16px] font-semibold">
                            Family
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[31px] text-center text-white">
                      <div className="flex-1 rounded-3xs bg-gray-300 h-12 flex flex-row items-start justify-start py-4 px-6 box-border">
                        <div className="flex-1 relative leading-[16px] font-semibold">
                          View Details
                        </div>
                      </div>
                      <b className="flex-1 relative text-5xl tracking-[-0.48px] leading-[32.4px] text-gray-300 text-left">
                        $649,900
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative rounded-t-3xs rounded-b-none h-[260px]" />
                <div className="self-stretch rounded-t-none rounded-b-3xs bg-snow flex flex-col items-start justify-start py-[30px] px-5 border-[1px] border-solid border-mistyrose">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[27px]">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                      <img
                        className="w-6 relative h-6"
                        alt=""
                        src="/icon--map-2.svg"
                      />
                      <div className="flex-1 relative leading-[28.8px] font-semibold">
                        2861 62nd Ave, Oakland, CA 94605
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[21px] text-dimgray-200">
                      <div className="self-stretch flex flex-row items-center justify-between">
                        <div className="w-[152px] flex flex-row items-center justify-start gap-[12px]">
                          <img
                            className="w-5 relative h-5"
                            alt=""
                            src="/icon-.svg"
                          />
                          <div className="flex-1 relative leading-[16px] font-semibold">
                            3 Bed Room
                          </div>
                        </div>
                        <div className="w-[152px] flex flex-row items-center justify-start gap-[12px]">
                          <img
                            className="w-5 relative h-5"
                            alt=""
                            src="/icon--1.svg"
                          />
                          <div className="relative leading-[16px] font-semibold">
                            1 Bath
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-between">
                        <div className="w-[152px] flex flex-row items-center justify-start gap-[12px]">
                          <img
                            className="w-5 relative h-5"
                            alt=""
                            src="/icon--2.svg"
                          />
                          <div className="flex-1 relative leading-[16px] font-semibold">
                            1,032 sqft
                          </div>
                        </div>
                        <div className="w-[152px] flex flex-row items-center justify-start gap-[12px]">
                          <img
                            className="w-5 relative h-5"
                            alt=""
                            src="/iocn--menuimage.svg"
                          />
                          <div className="relative leading-[16px] font-semibold">
                            Family
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[31px] text-center text-white">
                      <div className="flex-1 rounded-3xs bg-gray-300 h-12 flex flex-row items-start justify-start py-4 px-6 box-border">
                        <div className="flex-1 relative leading-[16px] font-semibold">
                          View Details
                        </div>
                      </div>
                      <b className="flex-1 relative text-5xl tracking-[-0.48px] leading-[32.4px] text-gray-300 text-left">
                        $649,900
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative rounded-t-3xs rounded-b-none h-[260px]" />
                <div className="self-stretch rounded-t-none rounded-b-3xs bg-snow flex flex-col items-start justify-start py-[30px] px-5 border-[1px] border-solid border-mistyrose">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[27px]">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                      <img
                        className="w-6 relative h-6"
                        alt=""
                        src="/icon--map-2.svg"
                      />
                      <div className="flex-1 relative leading-[28.8px] font-semibold">
                        2861 62nd Ave, Oakland, CA 94605
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[21px] text-dimgray-200">
                      <div className="self-stretch flex flex-row items-center justify-between">
                        <div className="w-[152px] flex flex-row items-center justify-start gap-[12px]">
                          <img
                            className="w-5 relative h-5"
                            alt=""
                            src="/icon-.svg"
                          />
                          <div className="flex-1 relative leading-[16px] font-semibold">
                            3 Bed Room
                          </div>
                        </div>
                        <div className="w-[152px] flex flex-row items-center justify-start gap-[12px]">
                          <img
                            className="w-5 relative h-5"
                            alt=""
                            src="/icon--1.svg"
                          />
                          <div className="relative leading-[16px] font-semibold">
                            1 Bath
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-between">
                        <div className="w-[152px] flex flex-row items-center justify-start gap-[12px]">
                          <img
                            className="w-5 relative h-5"
                            alt=""
                            src="/icon--2.svg"
                          />
                          <div className="flex-1 relative leading-[16px] font-semibold">
                            1,032 sqft
                          </div>
                        </div>
                        <div className="w-[152px] flex flex-row items-center justify-start gap-[12px]">
                          <img
                            className="w-5 relative h-5"
                            alt=""
                            src="/iocn--menuimage.svg"
                          />
                          <div className="relative leading-[16px] font-semibold">
                            Family
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[31px] text-center text-white">
                      <div className="flex-1 rounded-3xs bg-gray-300 h-12 flex flex-row items-start justify-start py-4 px-6 box-border">
                        <div className="flex-1 relative leading-[16px] font-semibold">
                          View Details
                        </div>
                      </div>
                      <b className="flex-1 relative text-5xl tracking-[-0.48px] leading-[32.4px] text-gray-300 text-left">
                        $649,900
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-col items-center justify-center py-20 px-[120px] text-orangered font-marko-one">
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

export default PropertyDetails;
