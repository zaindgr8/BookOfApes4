const GroupComponent = () => {
  return (
    <section className="w-full !m-[0] absolute bottom-[0px] left-[calc(50%_-_962px)] rounded-xl bg-color-text-color flex flex-row items-end justify-between py-[58px] pr-[152px] pl-[143px] box-border min-h-[381px] gap-[20px] z-[1] text-left text-lg text-gray-100 font-text-body-2 mq925:pl-[35px] mq925:pr-[38px] mq925:box-border mq1350:pl-[71px] mq1350:pr-[76px] mq1350:box-border">
      <div className="h-[381px] w-[1920px] relative rounded-xl bg-color-text-color hidden max-w-full z-[0]" />
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] rounded-xl max-h-full object-cover mix-blend-soft-light z-[1]"
        alt=""
        src="/rectangle-21@2x.png"
      />
      <div className="w-[673px] flex flex-col items-start justify-start gap-[34px] max-w-full mq925:gap-[17px]">
        <img
          className="w-[570px] relative max-h-full object-contain max-w-full z-[2]"
          alt=""
          src="/text-logo-2-1-1@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[9px] box-border max-w-full">
          <div className="h-[94px] flex-1 relative flex items-center max-w-full z-[2]">
            With a focus on community engagement and innovative tokenomics, Book
            of Apes is more than just a crypto project—it's a movement towards
            decentralized creativity and ownership. Join us in shaping the
            future of digital art and collectibles!
          </div>
        </div>
      </div>
      <div className="h-[246px] flex flex-col items-start justify-start gap-[27px] text-13xl text-color-background-color font-lato">
        <b className="w-[133px] relative tracking-[0.01em] inline-block z-[2] mq450:text-lgi mq925:text-7xl">
          Contact
        </b>
        <div className="flex-1 flex flex-col items-start justify-start gap-[6px] text-base text-gray-200 font-text-body-2">
          <div className="relative tracking-[0.01em] whitespace-nowrap z-[2]">
            Example@example.com
          </div>
          <div className="relative tracking-[0.01em] whitespace-nowrap z-[2]">
            +12-2345 567 78
          </div>
        </div>
        <div className="w-[186px] flex flex-row items-start justify-start gap-[12px]">
          <div className="h-[54px] flex-1 relative rounded-xl bg-color-primary-color-2 z-[2]">
            <div className="absolute top-[0px] left-[0px] rounded-xl bg-color-primary-color-2 w-full h-full hidden" />
            <img
              className="absolute h-[63.33%] w-[67.78%] top-[18.89%] right-[16.67%] bottom-[17.78%] left-[15.56%] max-w-full overflow-hidden max-h-full z-[1]"
              alt=""
              src="/group-11.svg"
            />
          </div>
          <img
            className="h-[54px] w-[54px] relative min-h-[54px] z-[2]"
            loading="lazy"
            alt=""
            src="/group-24.svg"
          />
          <img
            className="h-[54px] w-[54px] relative min-h-[54px] z-[2]"
            loading="lazy"
            alt=""
            src="/group-23.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default GroupComponent;
