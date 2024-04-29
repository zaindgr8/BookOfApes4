import FrameComponent4 from "./FrameComponent4";
import FrameComponent3 from "./FrameComponent3";

const FrameComponent2 = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-full h-[921.5px] text-center text-21xl text-color-text-color font-text-body-2">
      <div className="absolute top-[0px] left-[-186px] w-[2106px] flex flex-row items-start justify-start text-61xl text-color-primary-color-2 font-text-heading">
        <img
          className="h-[921.5px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
          alt=""
          src="/group-191@2x.png"
        />
        <h1 className="!m-[0] h-20 w-[688px] absolute top-[226px] right-[623px] text-inherit font-bold font-inherit inline-block z-[2] mq450:text-5xl mq925:text-21xl">
          <span>Token</span>
          <span className="text-gradient">omics</span>
        </h1>
      </div>
      <FrameComponent4 bookOfApes="Book Of Apes" name1="Name" />
      <FrameComponent4 bookOfApes="BSC" name1="Network" />
    </div>
  );
};

export default FrameComponent2;
