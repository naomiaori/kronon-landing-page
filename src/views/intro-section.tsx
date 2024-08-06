import React from "react";

import ScrollReveal from "#/components/ScrollReveal";

const IntroSection = () => (
  <section className="z-50 w-full h-screen bg-white flex items-center m-auto justify-center relative">
    <ScrollReveal>
      <div className="w-4/5 m-auto text-black text-center">
        <h3 className="font-medium text-[3.25rem] mb-[6.25rem]">
          HARNESSING <br />
          THE POWER OF DATA AND INNOVATION <br />
          TO TRANSFORM MARKETS.
        </h3>
        <div className="font-light text-gray-100">
          <p className="mb-[1rem] ">
            At [Your Company Name], we leverage cutting-edge technology and
            advanced data analytics to transform the financial markets. Our team
            of experienced quants, engineers, and financial experts are
            dedicated to developing innovative trading strategies that
            capitalize on market inefficiencies. By integrating machine learning
            and sophisticated algorithms, we aim to deliver exceptional returns
            while managing risk effectively. Join us on our mission to push the
            boundaries of quantitative finance and redefine the future of
            trading.
          </p>
          <p>
            This text aims to highlight the company’s expertise, innovative
            approach, and the team behind its success.
          </p>
        </div>
      </div>
    </ScrollReveal>
  </section>
);

export default IntroSection;
