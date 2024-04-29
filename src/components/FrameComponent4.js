import { useMemo } from "react";

const FrameComponent4 = ({ bookOfApes, name1, propLeft }) => {
  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className="absolute top-[486px] left-[221px] w-[349px] h-[207px] text-center text-21xl text-color-text-color font-text-body-2"
      style={frameDivStyle}
    >
      <div className="absolute top-[0px] left-[0px] w-full h-full">
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumvioletred-200 w-full h-full" />
        <div className="absolute top-[0px] left-[0px] rounded-xl box-border w-full h-full border-[3px] border-solid border-gradient" />
      </div>
      <h2 className="m-0 absolute top-[51px] left-[23px] text-inherit leading-[150%] font-bold font-inherit inline-block w-[304px] z-[4] mq450:text-5xl mq450:leading-[36px] mq925:text-13xl mq925:leading-[48px]">
        {bookOfApes}
      </h2>
      <b className="absolute top-[120px] left-[23px] text-5xl inline-block w-[304px] z-[4] mq450:text-lgi">
        {name1}
      </b>
    </div>
  );
};

export default FrameComponent4;
