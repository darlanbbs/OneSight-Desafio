"use client";
import { Locale } from "./../../config/i18n.config";
import { getDictionarieConfigClientSide } from "../../../dictionaries/dictionariesConfigClientSide";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ChangeLanguageButton from "../changeLanguageButton/ChangeLanguageButton";

const Navbar = ({ params }: { params: { lang: Locale } }) => {
  const dictionaries = getDictionarieConfigClientSide(params.lang);
  const router = useRouter();

  const alterarIdioma = (novoIdioma: Locale) => {
    const urlAtual = window.location.href;
    if (urlAtual.includes("contact" || "about")) {
      const novaURL = urlAtual.replace(`/${params.lang}/`, `/${novoIdioma}/`);
      router.push(novaURL);
    }
    const novaURL = urlAtual.replace(`/${params.lang}`, `/${novoIdioma}`);
    router.push(novaURL);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div>
          <Link href={`/${params.lang}`} className="text-white">
            {dictionaries.Navbar.home}
          </Link>
          <Link href={`/${params.lang}/contact`} className="text-white ml-4">
            {dictionaries.Navbar.contact}
          </Link>
          <Link href={`/${params.lang}/about`} className="text-white ml-4">
            {dictionaries.Navbar.about}
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <ChangeLanguageButton
            country="United States"
            icon="/icons/euaIcon.png"
            alterarIdioma={() => alterarIdioma("en-US")}
          />
          <ChangeLanguageButton
            country="Brazil"
            icon="/icons/brazilIcon.png"
            alterarIdioma={() => alterarIdioma("pt-BR")}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
