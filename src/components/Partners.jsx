import React from "react";
import pinksale from "../assets/pinksale.png";
import Dexview from "../assets/Dex view.png";
import Solscan from "../assets/Solscan.png";
import Jupiter from "../assets/Jupiter.png";
import Raydium from "../assets/Radium.png";
import CoinMarketCap from "../assets/Coinmarket cap.png";
import CoinGecko from "../assets/Coingecko.png";
const Partners = () => {
  const investors = [
    {
      icon: pinksale,
      link: "",
    },
    {
      icon: Dexview,
      link: "",
    },
    {
      icon: Solscan,
      link: "",
    },
    {
      icon: Jupiter,
      link: "",
    },
    {
      icon: Raydium,
      link: "",
    },
    {
      icon: CoinMarketCap,
      link: "",
    },
    {
      icon: CoinGecko,
      link: "",
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center p-3 bg-partners  box-border max-w-full text-center text-61xl text-color-primary-color-2 font-text-heading overflow-hidden">
      <div className="flex flex-row items-center justify-center py-0 px-5 box-border max-w-full">
        <h1 className="m-0 h-20 w-[688px]  text-inherit font-bold font-inherit inline-block shrink-0 max-w-full z-[1] mq450:text-21xl mq925:text-21xl">
          <span>{`Our `}</span>
          <span className="text-gradient">Partners</span>
        </h1>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[188px] max-w-full mq450:gap-[23px] mq925:gap-[47px] mq1350:gap-[94px] mq1825:flex-wrap mq1825:justify-center mq450:py-4 py-16  ">
        <div className="flex flex-wrap flex-row items-center justify-center gap-24 py-6 relative max-w-full shrink-0">
          {investors.map((item) => (
            <div className="cursor-pointer">
              <img src={item.icon} alt="" className=" w-64" />
            </div>
          ))}
        </div>
        <div className="bg-image-container-partners  mq925:hidden mq450:hidden"></div>
      </div>
    </section>
  );
};

export default Partners;
