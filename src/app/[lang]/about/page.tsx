import TitleComponent from "./../../components/Titles/TitleComponent";
import { getDictionarieConfigServerSide } from "./../../../dictionaries/dictionariesConfigServerSide";
import Navbar from "./../../components/Navbar/NavBar";
import { Locale } from "./../../config/i18n.config";
import React from "react";

const About = ({ params }: { params: { lang: Locale } }) => {
  const dictionaries = getDictionarieConfigServerSide(params.lang);

  return (
    <>
      <Navbar params={params} />
      <div className="container mx-auto mt-8">
        <TitleComponent title={dictionaries.AboutPage.title} />
        <p className="mb-4 text-white"></p>
        <p className="mb-4">{dictionaries.AboutPage.FirstParagraph}</p>
        <p className="mb-4">{dictionaries.AboutPage.Secondparagraph}</p>
      </div>
    </>
  );
};

export default About;
