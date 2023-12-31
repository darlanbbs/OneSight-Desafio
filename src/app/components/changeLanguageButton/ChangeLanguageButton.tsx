import { Locale } from "../../config/i18n.config";
import React from "react";

const ChangeLanguageButton = ({
  icon,
  country,
  alterarIdioma,
}: {
  icon: string;
  country: string;
  alterarIdioma: (novoIdioma: Locale) => void;
}) => {
  return (
    <button className="text-white" onClick={() => alterarIdioma("pt-BR")}>
      <img src={icon} alt={country} className="w-6 h-6" />
    </button>
  );
};

export default ChangeLanguageButton;
