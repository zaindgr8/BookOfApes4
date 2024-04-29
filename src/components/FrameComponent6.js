const FrameComponent6 = () => {
  return (
    <header className=" w-full h-full flex flex-row items-start justify-evenly pt-4  max-w-full">
      <div className="flex gap-x-5">
        <img
          className="h-[100px] w-[100px] relative object-contain shrink-0 z-[2]"
          loading="lazy"
          alt=""
          src="/group-1@2x.png"
        />
        <img
          className="w-[200px] relative max-h-full object-contain z-[2]"
          loading="lazy"
          alt=""
          src="/text-logo-2-1@2x.png"
        />
      </div>
      <nav className="flex items-center justify-center ">
        <nav className=" flex justify-start mt-8  gap-x-4 max-w-full text-left text-xl text-white font-text-body-2">
          <div className="">Home</div>
          <div className="">About</div>
          <div className="">Why Us</div>
          <div className="">Tokenomics</div>
          <div className="">Roadmap</div>
        </nav>
      </nav>
      <div className=" flex flex-col items-start justify-start pt-[19px]  box-border shrink-0">
        <button className="cursor-pointer py-3.5 px-[47px] bg-[transparent] rounded-xl flex flex-row  z-[2] border-[1px] border-solid border-color-primary-color-2 hover:bg-deepskyblue-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-deepskyblue-100">
          <div className="relative text-xl leading-[150%] font-medium font-text-body-2 text-color-primary-color-2 text-center inline-block min-w-[119px] mq450:text-base mq450:leading-[24px]">
            Whitepaper
          </div>
        </button>
      </div>
      <div className="mt-[-124px] h-[510px] w-[525px] relative [filter:blur(383.4px)] rounded-[50%] bg-mediumvioletred-100 max-w-[calc(100%_-_1674px)] shrink-0 z-[2]" />
    </header>
  );
};

export default FrameComponent6;
