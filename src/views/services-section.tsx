import ScrollReveal from "#/components/ScrollReveal";

const ServicesSection = () => (
  <section
    className="z-50 w-full bg-black h-screen text-white pr-[11.25rem] relative"
    style={{
      backgroundImage: `url('ui/services-bg.svg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <ScrollReveal>
      <div className="flex text-[2rem] justify-between">
        <h2 className="pt-[10.12rem]">SERVICES</h2>
        <div className="leading-none flex gap-56">
          <div className="py-[10.12rem] border-l border-gray-100 flex flex-col gap-[13.5rem]">
            <div className="flex flex-col gap-10 w-[34.4rem]">
              <h3 className="font-bold w-[30.5rem]">
                SOLVE COMPREHENSIVE LIQUIDITY ISSUES
              </h3>
              <p className="text-base">
                Enhance price stability and discovery through increased
                liquidity depth and improved bid-ask spread efficiency.
              </p>
            </div>
            <div className="flex flex-col gap-10 w-[34.4rem]">
              <h3 className="font-bold w-[30.5rem]">
                GET LISTED ON EXCHANGES (DEX OR CEX)
              </h3>
              <p className="text-base">
                Let us help you create impactful KPIs and a focused
                <br /> listing strategy that matters.
              </p>
            </div>
          </div>
          <div className="py-[10.12rem] border-l border-gray-100 flex flex-col gap-[13.5rem]">
            <div className="flex flex-col gap-10 w-[34.4rem]">
              <h3 className="font-bold w-[30.5rem]">
                UNPARALLELED MARKET ANALYSIS
              </h3>
              <p className="text-base">
                We optimize performance based on your metrics, providing
                detailed
                <br /> market analysis for precise insights.
              </p>
            </div>
            <div className="flex flex-col gap-10 w-[34.4rem]">
              <h3 className="font-bold w-[30.5rem]">
                24/7 GLOBAL MARKET SUPPORT
              </h3>
              <p className="text-base">
                ensures stability and control of your tokens amid non-stop
                crypto
                <br /> markets and macro market volatility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  </section>
);

export default ServicesSection;
