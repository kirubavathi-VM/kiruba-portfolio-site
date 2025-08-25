import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/project";
import Skills from "@/components/skills";
import { DEFAULT_META_DATA } from "@/constants/meta-data";
import { Layout } from "@/libs/layout";
import { NextPageWithLayout } from "@/types/page";
import React from "react";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

Home.metadata = DEFAULT_META_DATA;
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Home;
