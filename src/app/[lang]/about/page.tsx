import TitleComponent from "./../../components/Titles/TitleComponent";
import { getDictionarieConfigServerSide } from "./../../../dictionaries/dictionariesConfigServerSide";
import Navbar from "./../../components/Navbar/NavBar";
import { Locale } from "./../../config/i18n.config";
import React from "react";
import CompanyOverview from "@/app/components/AboutUs/CompanyOverview";
import TextComponentAbout from "@/app/components/AboutUs/TextComponentAbout";

const About = ({ params }: { params: { lang: Locale } }) => {
  const dictionaries = getDictionarieConfigServerSide(params.lang);

  return (
    <>
      <Navbar params={params} />
      <div className="container mx-auto mt-8">
        <TitleComponent title={dictionaries.AboutPage.title} />
        <CompanyOverview
          history={dictionaries.AboutPage.overview.titleHistory}
          titleHistory={dictionaries.AboutPage.overview.history}
        />
        <div className="mb-8">
          <TextComponentAbout text={dictionaries.AboutPage.FirstParagraph} />
          <TextComponentAbout text={dictionaries.AboutPage.SecondParagraph} />
          <TextComponentAbout text={dictionaries.AboutPage.ThirdParagraph} />
          <TextComponentAbout text={dictionaries.AboutPage.FourthParagraph} />
          <TextComponentAbout text={dictionaries.AboutPage.FifthParagraph} />
        </div>
      </div>
    </>
  );
};

export default About;
