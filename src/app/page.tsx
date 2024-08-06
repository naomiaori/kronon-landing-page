import IntroSection from "#/views/intro-section";
// import LogoSection from "#/views/logo-section";
import ServicesSection from "#/views/services-section";

import ContactUsSection from "../views/contact-us-section";
import Footer from "../views/footer";

export default function Home() {
  return (
    <main className="">
      {/* <LogoSection /> */}
      {/* <div className="bg-black h-screen"></div> */}
      <IntroSection />
      <ServicesSection />
      <ContactUsSection />
      <Footer />
    </main>
  );
}
