import React from "react";
import chart from "../assets/Tokenomic_chart.png";
import toast, { Toaster } from "react-hot-toast";
const Tokenomics = () => {
  const handleClick = async (textToCopy) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      toast.success("Copied to clipboard");
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };
  return (
    <div
      id="Tokenomics"
      className="flex flex-col relative items-center justify-start  text-color-primary-color-2  "
    >
      <div className="mq450:pt-8 mq925:pt-32 text-61xl">
        <h1 className="text-inherit font-bold font-inherit inline-block font-text-heading  mq450:text-5xl mq925:text-10xl">
          <span>Token</span>
          <span className="text-gradient">omics</span>
        </h1>
      </div>
      <div className="rounded-xl mx-4  bg-mediumvioletred-200  border-[3px] border-gradient ">
        <div className="flex ">
          <div className="flex justify-center text-center mq450:p-2 p-8 flex-wrap gap-3 text-white font-inherit">
            <p className="font-text-heading">Contract Address:</p>
            <p className="font-sans">
              3hyNSp4E9vweJekoHwB5RKCsW9PfqYPbfr9WR8ri9JfF
            </p>
            <button
              className=" bg-transparent"
              onClick={() =>
                handleClick("3hyNSp4E9vweJekoHwB5RKCsW9PfqYPbfr9WR8ri9JfF")
              }
            >
              <img
                className="cursor-pointer"
                loading="lazy"
                alt=""
                src="/group.svg"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="grid mq450:grid-cols-1 m-2 mq925:grid-cols-1 mq1350:grid-cols-1 mq1825:grid-cols-2 gap-8 pt-16 px-8 ">
        <div className="flex flex-col mq925:order-1 mq450:order-2">
          <div className="flex gap-2 mq1350:flex-col flex-row ">
            <div className=" h-[207px] text-center text-21xl text-color-text-color rounded-xl bg-mediumvioletred-200 border-solid border-gradient flex justify-center flex-col items-center font-text-body-2">
              <h2 className="m-0 text-inherit leading-[150%] font-bold font-inherit inline-block w-[304px] z-[4] mq450:text-5xl mq450:leading-[36px] mq925:text-13xl mq925:leading-[48px] ">
                Book Of Apes
              </h2>
              <b className="text-5xl inline-block w-[304px] z-[4] mq450:text-lgi">
                Name
              </b>
            </div>
            <div className=" h-[207px] text-center text-21xl text-color-text-color rounded-xl bg-mediumvioletred-200 font-text-body-2 border-solid border-gradient flex justify-center flex-col items-center">
              <h2 className="m-0 text-inherit leading-[150%] font-bold font-inherit inline-block w-[304px] z-[4] mq450:text-5xl mq450:leading-[36px] mq925:text-13xl mq925:leading-[48px]">
                SOLANA
              </h2>
              <b className="text-5xl inline-block w-[304px] z-[4] mq450:text-lgi">
                Network
              </b>
            </div>
          </div>
          <div className="flex gap-2  pt-4 mq1350:flex-col flex-row">
            <div className=" h-[207px] text-center text-21xl text-color-text-color rounded-xl bg-mediumvioletred-200 border-solid font-text-body-2 border-gradient flex justify-center flex-col items-center">
              <h2 className="m-0 text-inherit leading-[150%] font-bold font-inherit inline-block w-[304px] z-[4] mq450:text-5xl mq450:leading-[36px] mq925:text-13xl mq925:leading-[48px]">
                6
              </h2>
              <b className="text-5xl inline-block w-[304px] z-[4] mq450:text-lgi">
                Decimal
              </b>
            </div>
            <div className=" h-[207px] text-center text-21xl text-color-text-color rounded-xl bg-mediumvioletred-200 border-solid border-gradient font-text-body-2 flex justify-center flex-col items-center">
              <h2 className="m-0 text-inherit leading-[150%] font-bold font-inherit inline-block w-[304px] z-[4] mq450:text-5xl mq450:leading-[36px] mq925:text-13xl mq925:leading-[48px]">
                420000000000
              </h2>
              <b className="text-5xl inline-block w-[304px] z-[4] mq450:text-lgi">
                Total Supply
              </b>
            </div>
          </div>
        </div>
        <div className="flex mq925:order-2 mq450:order-1">
          <img
            src={chart}
            className="mq1350:w-full mq450:h-full h-[450px] w-[500px]"
            alt=""
          />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Tokenomics;
