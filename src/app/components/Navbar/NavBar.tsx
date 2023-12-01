"use client";
import { Locale } from "./../../config/i18n.config";
import { getDictionarieConfigClientSide } from "../../../dictionaries/dictionariesConfigClientSide";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
        <div className="flex items-center">
          <button className="text-white" onClick={() => alterarIdioma("pt-BR")}>
            <img src="/icons/brazilIcon.png" alt="Brazil" className="w-6 h-6" />
          </button>
          <button
            className="text-white ml-4"
            onClick={() => alterarIdioma("en-US")}
          >
            <img src="/icons/euaIcon.png" alt="EUA" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
