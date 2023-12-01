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
        <h1 className="text-3xl font-bold mb-4">
          {dictionaries.AboutPage.title}
        </h1>
        <p className="mb-4 text-white"></p>
        <p className="mb-4">{dictionaries.AboutPage.FirstParagraph}</p>
        <p className="mb-4">{dictionaries.AboutPage.Secondparagraph}</p>
      </div>
    </>
  );
};

export default About;
