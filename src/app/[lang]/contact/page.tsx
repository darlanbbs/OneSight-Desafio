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
      <main className="container mx-auto mt-8 p-4 flex flex-col items-center justify-center">
        <TitleComponent title={dictionaries.ContactPage.title} />
        <p className="text-lg mb-4">{dictionaries.ContactPage.text}</p>
        <Formulario params={params} />
      </main>
    </div>
  );
};

export default Contact;
