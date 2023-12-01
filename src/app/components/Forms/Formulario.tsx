"use client";
import React from "react";
import Label from "./Label";
import Inputs from "./Inputs";
import InputMessage from "./InputMessage";
import ButtonForm from "./ButtonForm";
import { Locale } from "../../config/i18n.config";
import { getDictionarieConfigClientSide } from "../../../dictionaries/dictionariesConfigClientSide";

type FormProps = {
  params: { lang: Locale };
};

const Formulario = ({ params }: FormProps) => {
  const dictionaries = getDictionarieConfigClientSide(params.lang);

  return (
    <form className="max-w-md">
      <div className="mb-4">
        <Label title={dictionaries.ContactPage.form.name} htmlFor="nome" />
        <Inputs
          placeholder={dictionaries.ContactPage.form.placeholder.name}
          name="nome"
        />
      </div>
      <div className="mb-4">
        <Label title={dictionaries.ContactPage.form.email} htmlFor="email" />
        <Inputs
          placeholder={dictionaries.ContactPage.form.placeholder.email}
          name="email"
        />
      </div>
      <div className="mb-4">
        <Label
          title={dictionaries.ContactPage.form.message}
          htmlFor="message"
        />
        <InputMessage
          placeholder={dictionaries.ContactPage.form.placeholder.message}
        />
      </div>
      <ButtonForm title={dictionaries.ContactPage.form.button} />
    </form>
  );
};

export default Formulario;
