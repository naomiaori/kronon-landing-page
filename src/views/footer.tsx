import Logo from "#/public/logo/logo-footer.svg";

import ArrowLink from "../components/arrow-link";

const Footer = () => (
  <section className="h-screen px-[6.5rem] py-[5.56rem]">
    <div
      style={
        {
          // backgroundImage: `url('/ui/footer-bg.svg')`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
        }
      }
      className="p-12 w-full h-full rounded-[2.25rem] leading-normal flex flex-col justify-between"
    >
      <div className="flex justify-between">
        <h3 className="text-7xl font-light text-gray-300 w-[47rem]">
          HARNESSING
          <br />
          <span className="text-white">THE POWER OF DATA</span>
          <br />
          AND INNOVATION TO TRANSFORM MARKETS.
        </h3>
        <div>
          <ArrowLink textSize="text-[2.625rem]" iconSize={30} href="https://www.legalhigh.io/">
            JOIN US
          </ArrowLink>
          <ArrowLink
            textSize="text-[2.625rem]"
            opacity="opacity-70"
            iconSize={30}
            href="https://www.legalhigh.io/"
          >
            JOIN US
          </ArrowLink>
          <ArrowLink
            textSize="text-[2.625rem]"
            opacity="opacity-40"
            iconSize={30}
            href="https://www.legalhigh.io/"
          >
            JOIN US
          </ArrowLink>
          <ArrowLink
            textSize="text-[2.625rem]"
            opacity="opacity-20"
            iconSize={30}
            href="https://www.legalhigh.io/"
          >
            JOIN US
          </ArrowLink>
          <ArrowLink
            textSize="text-[2.625rem]"
            opacity="opacity-10"
            iconSize={30}
            href="https://www.legalhigh.io/"
          >
            JOIN US
          </ArrowLink>
          <ArrowLink
            textSize="text-[2.625rem]"
            opacity="opacity-5"
            iconSize={30}
            href="https://www.legalhigh.io/"
          >
            JOIN US
          </ArrowLink>
        </div>
      </div>

      <div className="flex justify-center gap-[36rem]">
        <div>
          <Logo />
          <p className="text-[0.6875rem] font-light text-gray-400 pl-3">
            ©2024 Krononlabs. All rights reserved.
          </p>
        </div>
        <div className="text-sm text-left text-white flex flex-col gap-4">
          <div className="flex gap-[11.25rem]">
            <span className="w-[3.4rem]">About</span>
            <span className="font-semibold">General Inquiries</span>
          </div>
          <div className="flex gap-[11.25rem]">
            <span className="w-[3.4rem]">Services</span>
            <span>sung@krononlabs.com</span>
          </div>
          <div className="flex gap-[11.25rem]">
            <span className="w-[3.4rem]">Career</span>
            <span>sung@krononlabs.com</span>
          </div>
          <div className="flex gap-[11.25rem]">
            <span className="w-[3.4rem]">Contact</span>
            <span>sung@krononlabs.com</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
