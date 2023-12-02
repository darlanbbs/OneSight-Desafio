import { getDictionarieConfigServerSide } from "../../dictionaries/dictionariesConfigServerSide";
import { Locale } from "../config/i18n.config";
import Navbar from "../components/Navbar/NavBar";
import TitleComponent from "../components/Titles/TitleComponent";
import SectionsHomePageComponents from "../components/SectionsHomePageComponents/SectionsHomePageComponents";
import StatistcArea from "../components/StatistcArea/StatistcArea";

export default function Home({ params }: { params: { lang: Locale } }) {
  const dictionaries = getDictionarieConfigServerSide(params.lang);
  return (
    <div>
      <Navbar params={params} />
      <main>
        <div className="mx-auto container  mt-8">
          <TitleComponent title={dictionaries.HomePage.title} />
          <SectionsHomePageComponents
            title={dictionaries.HomePage.sections.FirstSection.title}
            content={dictionaries.HomePage.sections.FirstSection.content}
          />
          <SectionsHomePageComponents
            title={dictionaries.HomePage.sections.SecondSection.title}
            content={dictionaries.HomePage.sections.SecondSection.content}
          />
          <SectionsHomePageComponents
            title={dictionaries.HomePage.sections.ThirdSection.title}
            content={dictionaries.HomePage.sections.ThirdSection.content}
          />
          <SectionsHomePageComponents
            title={dictionaries.HomePage.sections.FourthSection.title}
            content={dictionaries.HomePage.sections.FourthSection.content}
          />
          <SectionsHomePageComponents
            title={dictionaries.HomePage.sections.FifthSection.title}
            content={dictionaries.HomePage.sections.FifthSection.content}
          />
          <SectionsHomePageComponents
            title={dictionaries.HomePage.sections.SixthSection.title}
            content={dictionaries.HomePage.sections.SixthSection.content}
          />
        </div>
        <div className="bg-blue-500 text-white py-8">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">
              {dictionaries.HomePage.StatistcTitle}
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 ">
              <StatistcArea
                title={dictionaries.HomePage.statistics.FirstStatistic}
                value={120}
              />
              <StatistcArea
                title={dictionaries.HomePage.statistics.SecondStatistic}
                value={500}
              />
              <StatistcArea
                title={dictionaries.HomePage.statistics.ThirdStatistic}
                value={0}
              />
              <StatistcArea
                title={dictionaries.HomePage.statistics.FourthStatistic}
                value={10000}
              />
              <StatistcArea
                title={dictionaries.HomePage.statistics.FifthStatistic}
                value={15}
              />
              <StatistcArea
                title={dictionaries.HomePage.statistics.SixthStatistic}
                value={50}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
