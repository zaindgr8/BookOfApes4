const GroupComponent1 = () => {
  return (
    <div className="absolute top-[346px] left-[221px] w-[1479px] flex flex-row items-start justify-start py-9 px-[287px] box-border gap-[16px] max-w-full z-[2] text-left text-5xl text-color-text-color font-text-body-2 mq1350:flex-wrap">
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-mediumvioletred-200" />
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl box-border z-[1] border-[3px] border-solid border-gradient" />
      </div>
      <b className="relative leading-[150%] z-[2] mq450:text-lgi mq450:leading-[29px]">
        Contract Address:
      </b>
      <div className="relative leading-[150%] inline-block max-w-full z-[2] mq450:text-lgi mq450:leading-[29px]">
        9wLDRqod5iLforGmu693nFiQe357tjQ7TmfhPQsHuD3p
      </div>
      <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
        <img
          className="w-6 h-6 relative z-[2]"
          loading="lazy"
          alt=""
          src="/group.svg"
        />
      </div>
    </div>
  );
};

export default GroupComponent1;
