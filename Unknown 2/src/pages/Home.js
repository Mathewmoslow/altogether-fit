import React from "react";
import HeaderNew from "../components/layout/HeaderNew";
import FooterNew from "../components/layout/FooterNew";

import Hero from "../components/layout/sections/Hero";
import About from "../components/layout/sections/About";
import Services from "../components/layout/sections/Services";
import Pricing from "../components/layout/sections/Pricing";
import WhyAaron from "../components/layout/sections/WhyAaron";
import Testimonials from "../components/layout/sections/Testimonials";
import Contact from "../components/layout/sections/Contact";

const Home = () => (
  <>
    <HeaderNew />

    <main>
      <Hero />
      <About />
      <Services />
      <Pricing />
      <WhyAaron />
      <Testimonials />
      <Contact />
    </main>

    <FooterNew />
  </>
);

export default Home;
