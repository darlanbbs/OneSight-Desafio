import { getDictionarieConfigServerSide } from "@/dictionaries/language/dictionariesConfigServerSide";
import { Locale } from "../config/i18n.config";
import Navbar from "../components/Navbar/NavBar";

export default function Home({ params }: { params: { lang: Locale } }) {
  const dictionaries = getDictionarieConfigServerSide(params.lang);
  return (
    <div>
      <header>
        <Navbar
          about={dictionaries.Navbar.about}
          contact={dictionaries.Navbar.contact}
          home={dictionaries.Navbar.home}
        />
      </header>
      <p>{dictionaries.site.titulo}</p>
      <p>{dictionaries.site.mensagem}</p>

      <button>{dictionaries.site.botao}</button>
    </div>
  );
}
