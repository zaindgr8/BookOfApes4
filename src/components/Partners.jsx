import React from "react";

const Partners = () => {
  return (
    <section className="flex flex-col items-center justify-center p-3   box-border max-w-full text-center text-61xl text-color-primary-color-2 font-text-heading overflow-hidden">
      <div className="flex flex-row items-center justify-center py-0 px-5 box-border max-w-full">
        <h1 className="m-0 h-20 w-[688px]  text-inherit font-bold font-inherit inline-block shrink-0 max-w-full z-[1] mq450:text-21xl mq925:text-21xl">
          <span>{`Our `}</span>
          <span className="text-gradient">Partners</span>
        </h1>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[188px] max-w-full mq450:gap-[23px] mq925:gap-[47px] mq1350:gap-[94px] mq1825:flex-wrap mq1825:justify-center mq450:py-4 py-16 ">
        <div className="cursor-pointer flex flex-row items-start justify-start relative max-w-full shrink-0">
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
        <div className="bg-image-container-partners  mq925:hidden mq450:hidden"></div>
      </div>
    </section>
  );
};

export default Partners;
