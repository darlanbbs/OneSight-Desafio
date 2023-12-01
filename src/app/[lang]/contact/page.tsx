import Navbar from "./../../components/Navbar/NavBar";
import { Locale } from "./../../config/i18n.config";
import { getDictionarieConfigServerSide } from "../../../dictionaries/dictionariesConfigServerSide";
import React from "react";
import TitleComponent from "../../components/Titles/TitleComponent";
import Formulario from "../../components/Forms/Formulario";

const Contact = ({ params }: { params: { lang: Locale } }) => {
  const dictionaries = getDictionarieConfigServerSide(params.lang);

  return (
    <div>
      <Navbar params={params} />
      <div className="container mx-auto mt-8 p-4">
        <TitleComponent title={dictionaries.ContactPage.title} />
        <p className="text-lg mb-4">{dictionaries.ContactPage.text}</p>
        <Formulario params={params} />
      </div>
    </div>
  );
};

export default Contact;
