import ArrowLink from "../components/arrow-link";
import ScrollReveal from "../components/ScrollReveal";

const ContactUsSection = () => (
  <section className="z-50 relative bg-black h-screen text-white flex items-center justify-center">
    <ScrollReveal>
      <h2 className="text-[4rem] font-light w-[47.8rem] mb-40 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
        Transform your ambitions into reality with us.
      </h2>
      <div className="flex gap-[8.75rem] h-[14.5rem]">
        <div className="w-[33rem] flex flex-col justify-between">
          <h3 className="text-2xl font-semibold mb-7">
            Transform your ambitions into reality with us.
          </h3>
          <p className="text-base text-gray-200 font-normal mb-[6.25rem]">
            Please leave your email, a brief introduction, and your resume.
            <br />
            We will contact you when we are ready to have you join us.
            <br />
            We always open to everyone.
          </p>
          <ArrowLink href="https://www.legalhigh.io/">JOIN US</ArrowLink>
        </div>

        <div className="w-[33rem] flex flex-col justify-between">
          <h3 className="text-2xl font-semibold mb-7">
            Are you interested in our business?
          </h3>
          <p className="text-base text-gray-200 font-normal mb-[6.25rem]">
            Feel free to leave your email at any time. We will respond as soon
            as possible.
          </p>
          <ArrowLink href="https://www.legalhigh.io/">CONTACT</ArrowLink>
        </div>
      </div>
    </ScrollReveal>
  </section>
);

export default ContactUsSection;
