const AgentProfile = () => {
  return (
    <div className="w-full relative bg-snow overflow-hidden flex flex-col items-center justify-center gap-[100px] text-left text-xl text-gray-300 font-manrope">
      <div className="self-stretch flex flex-col items-start justify-start">
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
        <div className="self-stretch flex flex-col items-center justify-center text-5xl">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch relative bg-gainsboro-200 h-[250px]" />
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[58px] mt-[-46px]">
            <div className="self-stretch flex flex-row items-end justify-start py-0 px-[140px] gap-[30px]">
              <div className="w-[150px] relative rounded-3xs bg-gainsboro-200 h-[150px]" />
              <div className="flex-1 h-[72px] flex flex-row items-center justify-start gap-[60px]">
                <div className="flex-1 h-[72px] flex flex-row items-start justify-start gap-[32px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                    <b className="self-stretch relative tracking-[-0.48px] leading-[32.4px]">
                      Bruno Fernandes
                    </b>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[14px] text-base">
                      <img
                        className="w-24 relative h-4"
                        alt=""
                        src="/start.svg"
                      />
                      <div className="flex-1 relative leading-[28.8px] font-semibold">
                        4.5 review
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[8px] text-lg">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                      <img
                        className="w-6 relative h-6"
                        alt=""
                        src="/icon--24px--call1.svg"
                      />
                      <div className="flex-1 relative leading-[32.4px] font-semibold">
                        (123) 456-7890
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                      <img
                        className="w-6 relative h-6"
                        alt=""
                        src="/icon--24px--email1.svg"
                      />
                      <div className="relative leading-[32.4px] font-semibold">
                        bruno@relasto .com
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-3xs bg-gray-300 flex flex-row items-start justify-start py-4 px-6 text-base text-white">
                  <div className="relative leading-[16px] font-semibold">
                    Contact
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center py-0 px-[120px] text-center text-base">
              <div className="flex-1 flex flex-col items-center justify-center gap-[48px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                  <div className="flex-1 rounded-3xs bg-gray-300 h-11 flex flex-row items-center justify-center py-3.5 px-[30px] box-border text-white">
                    <div className="flex-1 relative leading-[16px] font-semibold">
                      For rent
                    </div>
                  </div>
                  <div className="flex-1 rounded-3xs box-border h-11 flex flex-row items-center justify-center py-3.5 px-[30px] border-[1px] border-solid border-dimgray-100">
                    <div className="flex-1 relative leading-[16px] font-semibold">
                      For sale
                    </div>
                  </div>
                  <div className="flex-1 rounded-3xs box-border h-11 flex flex-row items-center justify-center py-3.5 px-[30px] border-[1px] border-solid border-dimgray-100">
                    <div className="flex-1 relative leading-[16px] font-semibold">
                      About
                    </div>
                  </div>
                  <div className="flex-1 rounded-3xs box-border h-11 flex flex-row items-center justify-center py-3.5 px-[30px] border-[1px] border-solid border-dimgray-100">
                    <div className="flex-1 relative leading-[16px] font-semibold">
                      Review
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center gap-[24px] text-left">
                  <div className="self-stretch h-[512px] flex flex-row items-start justify-start gap-[24px]">
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
                  <div className="self-stretch h-[512px] flex flex-row items-start justify-start gap-[24px]">
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
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="flex flex-row items-start justify-start gap-[5px]">
                    <div className="w-12 rounded-3xs box-border h-12 flex flex-col items-center justify-center py-4 px-[18px] border-[1px] border-solid border-dimgray-200">
                      <div className="relative leading-[16px] font-semibold">
                        1
                      </div>
                    </div>
                    <div className="w-12 rounded-3xs box-border h-12 flex flex-col items-center justify-center py-4 px-[18px] border-[1px] border-solid border-lightgray-200">
                      <div className="relative leading-[16px] font-semibold">
                        2
                      </div>
                    </div>
                    <div className="w-12 rounded-3xs box-border h-12 flex flex-col items-center justify-center py-4 px-[18px] border-[1px] border-solid border-lightgray-200">
                      <div className="relative leading-[16px] font-semibold">
                        3
                      </div>
                    </div>
                    <div className="w-12 rounded-3xs box-border h-12 flex flex-col items-center justify-center py-4 px-[18px] border-[1px] border-solid border-lightgray-200">
                      <div className="relative leading-[16px] font-semibold">
                        4
                      </div>
                    </div>
                    <div className="w-12 rounded-3xs box-border h-12 flex flex-col items-center justify-center py-4 px-[18px] border-[1px] border-solid border-lightgray-200">
                      <div className="relative leading-[16px] font-semibold">
                        5
                      </div>
                    </div>
                  </div>
                  <div className="rounded-3xs flex flex-col items-start justify-start py-4 px-[18px] text-left border-[1px] border-solid border-lightgray-200">
                    <div className="flex flex-row items-start justify-start gap-[4px]">
                      <div className="relative leading-[16px] font-semibold">
                        Next Page
                      </div>
                      <img
                        className="w-4 relative h-4"
                        alt=""
                        src="/icon--16px--arrow--right.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-[120px] text-lg">
        <div className="self-stretch rounded-3xs bg-white flex flex-col items-center justify-center p-[42px] border-[1px] border-solid border-lightgray-100">
          <div className="self-stretch flex flex-col items-center justify-center">
            <div className="self-stretch flex flex-row items-start justify-center gap-[65px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[57px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[30px]">
                    <div className="w-[182px] relative rounded-3xs bg-gainsboro-200 h-[182px]" />
                    <div className="flex-1 flex flex-col items-start justify-start gap-[7px]">
                      <b className="self-stretch relative text-5xl tracking-[-0.48px] leading-[32.4px]">
                        Bruno Fernandes
                      </b>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[14px] text-base">
                        <img
                          className="w-24 relative h-4"
                          alt=""
                          src="/start.svg"
                        />
                        <div className="flex-1 relative leading-[28.8px] font-semibold">
                          4.5 review
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                        <img
                          className="w-6 relative h-6"
                          alt=""
                          src="/icon--24px--call1.svg"
                        />
                        <div className="flex-1 relative leading-[32.4px] font-semibold">
                          (123) 456-7890
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                        <img
                          className="w-6 relative h-6"
                          alt=""
                          src="/icon--24px--email1.svg"
                        />
                        <div className="relative leading-[32.4px] font-semibold">
                          bruno@relasto .com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative leading-[32.4px] text-dimgray-100">
                    <p className="m-0">
                      A slider is great way to display a slideshow featuring
                      images or videos, usually on your homepage. Adding sliders
                      to your site is no longer difficult. You don’t have to
                      know coding anymore. Just use a slider widget and it will
                      automatically insert the slider on your web page.
                    </p>
                    <p className="m-0">{`One of the best ways to add beautiful sliders with excellent responsiveness and advanced options. `}</p>
                  </div>
                </div>
                <div className="self-stretch relative rounded-3xs bg-gray-300 h-12 text-base text-white">
                  <div className="absolute top-[16px] left-[calc(50%_-_326.75px)] leading-[16px] font-semibold">
                    Contact
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[24px] text-xl">
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch relative tracking-[-0.4px] leading-[28px] font-semibold">
                    Experiences
                  </div>
                  <div className="self-stretch relative text-lg leading-[32.4px] font-semibold text-dimgray-100">
                    15+ years experience
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch relative tracking-[-0.4px] leading-[28px] font-semibold">
                    Property Types
                  </div>
                  <div className="self-stretch relative text-lg leading-[32.4px] font-semibold text-dimgray-100">
                    Private House, Villa, Townhouse, Apartment
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch relative tracking-[-0.4px] leading-[28px] font-semibold">
                    Area
                  </div>
                  <div className="self-stretch relative text-lg leading-[32.4px] font-semibold">
                    California, San Jose, Miami
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch relative tracking-[-0.4px] leading-[28px] font-semibold">
                    Address
                  </div>
                  <div className="self-stretch relative text-lg leading-[32.4px] font-semibold text-dimgray-100">
                    59 Orchard, NY 5005, US
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[60px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch relative tracking-[-0.4px] leading-[28px] font-semibold">
                      License No
                    </div>
                    <div className="self-stretch relative text-lg leading-[32.4px] font-semibold text-dimgray-100">
                      BF-0535
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch relative tracking-[-0.4px] leading-[28px] font-semibold">
                      Website
                    </div>
                    <div className="self-stretch relative text-lg [text-decoration:underline] leading-[32.4px] font-semibold text-dimgray-100">
                      www.abc.com
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
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
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[120px] text-9xl">
        <div className="flex-1 rounded-3xs bg-white box-border h-[1418px] flex flex-row items-start justify-start py-[30px] px-0 border-[1px] border-solid border-lightgray-100">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px]">
              <div className="self-stretch flex flex-col items-center justify-start gap-[22px]">
                <div className="self-stretch flex flex-row items-center justify-between py-0 px-[42px]">
                  <div className="w-[906px] relative tracking-[-0.56px] leading-[37.8px] font-extrabold inline-block shrink-0">
                    Clients Review
                  </div>
                  <div className="rounded-3xs bg-gray-300 flex flex-col items-center justify-center py-5 px-4 text-lg text-white">
                    <div className="flex flex-row items-center justify-start gap-[10px]">
                      <b className="relative leading-[18px]">Write a Reveiw</b>
                      <img
                        className="w-5 relative h-5"
                        alt=""
                        src="/icon--24px--plus1.svg"
                      />
                    </div>
                  </div>
                </div>
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
                  alt=""
                  src="/line-4.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-center py-0 px-[25px] gap-[25px] text-5xl text-dimgray-100">
                <div className="self-stretch rounded-xl bg-white flex flex-col items-start justify-start py-[39px] px-[30px] border-[1px] border-solid border-lightgray-100">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[40px]">
                    <div className="self-stretch relative leading-[39.6px] font-semibold">{`Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last. `}</div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[25px] text-xl">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[552px] pl-0 gap-[50px]">
                        <div className="flex-1 h-7 flex flex-row items-center justify-start gap-[10px]">
                          <div className="w-[120px] relative h-6">
                            <img
                              className="absolute top-[0px] left-[0px] w-6 h-6"
                              alt=""
                              src="/icon--24px--active.svg"
                            />
                            <img
                              className="absolute top-[0px] left-[32px] w-6 h-6"
                              alt=""
                              src="/icon--24px--active.svg"
                            />
                            <img
                              className="absolute top-[0px] left-[64px] w-6 h-6"
                              alt=""
                              src="/icon--24px--active.svg"
                            />
                            <img
                              className="absolute top-[0px] left-[96px] w-6 h-6"
                              alt=""
                              src="/icon--24px--unactive.svg"
                            />
                          </div>
                          <div className="flex-1 relative tracking-[-0.4px] leading-[28px] font-semibold">
                            4.5 review
                          </div>
                        </div>
                        <div className="flex-1 relative tracking-[-0.4px] leading-[28px] font-semibold">
                          02 June 2022
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-9xl text-gray-300">
                        <div className="w-20 relative rounded-[50%] bg-gainsboro-200 h-20" />
                        <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                          <div className="self-stretch relative tracking-[-0.56px] leading-[37.8px] font-extrabold">
                            Taylor Wilson
                          </div>
                          <div className="self-stretch relative text-lg leading-[32.4px] font-semibold">
                            Product Manager - Static Mania
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-xl bg-white flex flex-col items-start justify-start py-[39px] px-[30px] border-[1px] border-solid border-lightgray-100">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[40px]">
                    <div className="self-stretch relative leading-[39.6px] font-semibold">{`Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last. `}</div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[25px] text-xl">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[552px] pl-0 gap-[50px]">
                        <div className="flex-1 h-7 flex flex-row items-center justify-start gap-[10px]">
                          <div className="w-[120px] relative h-6">
                            <img
                              className="absolute top-[0px] left-[0px] w-6 h-6"
                              alt=""
                              src="/icon--24px--active.svg"
                            />
                            <img
                              className="absolute top-[0px] left-[32px] w-6 h-6"
                              alt=""
                              src="/icon--24px--active.svg"
                            />
                            <img
                              className="absolute top-[0px] left-[64px] w-6 h-6"
                              alt=""
                              src="/icon--24px--active.svg"
                            />
                            <img
                              className="absolute top-[0px] left-[96px] w-6 h-6"
                              alt=""
                              src="/icon--24px--unactive.svg"
                            />
                          </div>
                          <div className="flex-1 relative tracking-[-0.4px] leading-[28px] font-semibold">
                            4.5 review
                          </div>
                        </div>
                        <div className="flex-1 relative tracking-[-0.4px] leading-[28px] font-semibold">
                          02 June 2022
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-9xl text-gray-300">
                        <div className="w-20 relative rounded-[50%] bg-gainsboro-200 h-20" />
                        <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                          <div className="self-stretch relative tracking-[-0.56px] leading-[37.8px] font-extrabold">
                            Taylor Wilson
                          </div>
                          <div className="self-stretch relative text-lg leading-[32.4px] font-semibold">
                            Product Manager - Static Mania
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-xl bg-white flex flex-col items-start justify-start py-[39px] px-[30px] border-[1px] border-solid border-lightgray-100">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[40px]">
                    <div className="self-stretch relative leading-[39.6px] font-semibold">{`Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last. `}</div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[25px] text-xl">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[552px] pl-0 gap-[50px]">
                        <div className="flex-1 h-7 flex flex-row items-center justify-start gap-[10px]">
                          <div className="w-[120px] relative h-6">
                            <img
                              className="absolute top-[0px] left-[0px] w-6 h-6"
                              alt=""
                              src="/icon--24px--active.svg"
                            />
                            <img
                              className="absolute top-[0px] left-[32px] w-6 h-6"
                              alt=""
                              src="/icon--24px--active.svg"
                            />
                            <img
                              className="absolute top-[0px] left-[64px] w-6 h-6"
                              alt=""
                              src="/icon--24px--active.svg"
                            />
                            <img
                              className="absolute top-[0px] left-[96px] w-6 h-6"
                              alt=""
                              src="/icon--24px--unactive.svg"
                            />
                          </div>
                          <div className="flex-1 relative tracking-[-0.4px] leading-[28px] font-semibold">
                            4.5 review
                          </div>
                        </div>
                        <div className="flex-1 relative tracking-[-0.4px] leading-[28px] font-semibold">
                          02 June 2022
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-9xl text-gray-300">
                        <div className="w-20 relative rounded-[50%] bg-gainsboro-200 h-20" />
                        <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                          <div className="self-stretch relative tracking-[-0.56px] leading-[37.8px] font-extrabold">
                            Taylor Wilson
                          </div>
                          <div className="self-stretch relative text-lg leading-[32.4px] font-semibold">
                            Product Manager - Static Mania
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-3xs flex flex-col items-start justify-start py-4 px-[18px] text-base text-gray-300 border-[1px] border-solid border-dimgray-100">
                  <div className="flex flex-row items-start justify-start gap-[4px]">
                    <div className="relative leading-[16px] font-semibold">
                      See more
                    </div>
                    <img
                      className="w-4 relative h-4"
                      alt=""
                      src="/icon--16px--arrow--down1.svg"
                    />
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

export default AgentProfile;
