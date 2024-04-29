const FrameComponent = () => {
  return (
    <section className="w-[1602px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[40px] max-w-full text-center text-61xl text-color-primary-color-2 font-text-heading mq925:gap-[20px]">
      <div className="w-[1244px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <h1 className="m-0 h-20 w-[688px] relative text-inherit font-bold font-inherit inline-block shrink-0 max-w-full z-[1] mq450:text-5xl mq925:text-21xl">
          <span>{`Our `}</span>
          <span className="text-gradient">Partners</span>
        </h1>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[188px] max-w-full mq450:gap-[23px] mq925:gap-[47px] mq1350:gap-[94px] mq1825:flex-wrap mq1825:justify-center">
        <div className="w-[1244px] flex flex-row items-start justify-start relative max-w-full shrink-0">
          <img
            className="h-[1754px] w-[1916px] absolute !m-[0] top-[-1171px] left-[calc(50%_-_958px)] object-cover mix-blend-exclusion"
            alt=""
            src="/rectangle-86@2x.png"
          />
          <img
            className="h-[302px] flex-1 relative max-w-full overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
            loading="lazy"
            alt=""
            src="/group-204.svg"
          />
        </div>
        <div className="h-[546px] w-[432px] flex flex-col items-start justify-start pt-[139px] px-0 pb-0 box-border max-w-full shrink-0 mq925:pt-[90px] mq925:box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover shrink-0 [debug_commit:1de1738] z-[1]"
            loading="lazy"
            alt=""
            src="/mask-group@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
