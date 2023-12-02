import { getDictionarieConfigServerSide } from "../../dictionaries/dictionariesConfigServerSide";
import { Locale } from "../config/i18n.config";
import Navbar from "../components/Navbar/NavBar";

export default function Home({ params }: { params: { lang: Locale } }) {
  const dictionaries = getDictionarieConfigServerSide(params.lang);
  return (
    <div>
      <Navbar params={params} />
      <p>{dictionaries.site.titulo}</p>
      <p>{dictionaries.site.mensagem}</p>

      <button>{dictionaries.site.botao}</button>
    </div>
  );
}
