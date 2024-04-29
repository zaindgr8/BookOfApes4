const FrameComponent1 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[137.1px] box-border max-w-full text-center text-61xl text-color-primary-color-2 font-text-heading mq450:pb-[58px] mq450:box-border mq925:pb-[89px] mq925:box-border">
      <div className="w-[1588px] flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[22px] pl-5 box-border max-w-full">
          <div className="w-[1406px] flex flex-row flex-wrap items-start justify-start gap-[31px] max-w-full mq925:gap-[15px]">
            <img
              className="w-[328px] relative max-h-full object-cover mix-blend-normal min-h-[328px] max-w-full z-[3]"
              loading="lazy"
              alt=""
              src="/rectangle-6@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-52 px-0 pb-0 box-border min-w-[447px] max-w-full mq925:min-w-full">
              <h1 className="m-0 self-stretch h-20 relative text-inherit font-bold font-inherit inline-block z-[1] mq450:text-5xl mq925:text-21xl">
                <span>Road</span>
                <span className="text-gradient">Map</span>
              </h1>
            </div>
            <img
              className="w-[328px] relative max-h-full object-cover mix-blend-normal max-w-full z-[3]"
              loading="lazy"
              alt=""
              src="/rectangle-6@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[32px] max-w-full text-37xl text-white mq925:gap-[16px]">
          <div className="flex-1 flex flex-row items-start justify-start relative min-w-[381px] max-w-full z-[1] mq450:min-w-full">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [backdrop-filter:blur(359.7px)] rounded-3xl bg-mediumvioletred-200" />
            <div className="flex-1 [backdrop-filter:blur(359.7px)] rounded-3xl box-border flex flex-col items-start justify-start pt-7 px-[34px] pb-16 gap-[24px] max-w-full z-[2] border-[3px] border-solid border-gradient">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[31px] pl-[30px] box-border max-w-full">
                <h1 className="m-0 flex-1 relative text-inherit font-medium font-inherit inline-block max-w-full z-[1] mq450:text-15xl mq925:text-26xl">
                  Phase 1
                </h1>
              </div>
              <b className="self-stretch relative text-5xl font-text-body-2 text-color-text-color z-[1] mq450:text-lgi">
                <p className="m-0">{`Launch Website & Socials`}</p>
                <p className="m-0">Building Community</p>
                <p className="m-0">Presale on Pinksale</p>
                <p className="m-0">Pre-Launch Marketing</p>
              </b>
              <div className="w-[508px] h-[338px] relative [backdrop-filter:blur(359.7px)] rounded-3xl box-border hidden max-w-full border-[3px] border-solid border-gradient" />
            </div>
          </div>
          <div className="h-[338px] flex-[0.9882] relative [backdrop-filter:blur(359.7px)] rounded-3xl box-border min-w-[381px] max-w-full z-[1] border-[3px] border-solid border-gradient mq450:min-w-full mq450:flex-1">
            <div className="absolute top-[0px] left-[calc(50%_-_254px)] [backdrop-filter:blur(359.7px)] rounded-3xl box-border w-full h-full hidden border-[3px] border-solid border-gradient" />
            <div className="absolute top-[0px] left-[0px] w-full h-full z-[2]">
              <div className="absolute top-[0px] left-[calc(50%_-_254px)] rounded-3xl bg-mediumvioletred-200 w-full h-full" />
              <h1 className="m-0 absolute top-[32px] left-[67.5px] text-inherit font-medium font-inherit inline-block w-[373px] z-[1] mq450:text-15xl mq925:text-26xl">
                Phase 2
              </h1>
              <b className="absolute top-[126px] left-[0px] text-5xl inline-block font-text-body-2 text-color-text-color w-[508px] z-[1] mq450:text-lgi">
                <p className="m-0">Listing CEX</p>
                <p className="m-0">{`Listing CMC & CG`}</p>
                <p className="m-0">Trending Campaigns</p>
                <p className="m-0">$50 Million MarketCap</p>
                <p className="m-0">50,000 Holders</p>
              </b>
            </div>
          </div>
          <div className="h-[338px] flex-[0.9882] relative [backdrop-filter:blur(359.7px)] rounded-3xl box-border min-w-[381px] max-w-full z-[1] border-[3px] border-solid border-gradient mq450:min-w-full mq450:flex-1">
            <div className="absolute top-[0px] left-[calc(50%_-_254px)] [backdrop-filter:blur(359.7px)] rounded-3xl box-border w-full h-full hidden border-[3px] border-solid border-gradient" />
            <div className="absolute top-[0px] left-[0px] w-full h-full z-[2]">
              <div className="absolute top-[0px] left-[calc(50%_-_254px)] [backdrop-filter:blur(359.7px)] rounded-3xl bg-mediumvioletred-200 w-full h-full" />
              <h1 className="m-0 absolute top-[32px] left-[0px] text-inherit font-medium font-inherit inline-block w-[503px] z-[1] mq450:text-15xl mq925:text-26xl">
                Phase 3
              </h1>
              <b className="absolute top-[126px] left-[0px] text-5xl inline-block font-text-body-2 text-color-text-color w-[503px] z-[1] mq450:text-lgi">
                <p className="m-0">Listing Tier 1 Cex</p>
                <p className="m-0">Partnerships with Financial Firms</p>
                <p className="m-0">Live Events</p>
              </b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
