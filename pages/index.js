import Hero from "../components/hero/Hero";
import Intro from "../components/intro/Intro";
import { getHero, getIntroBlock, getCardBlock } from "../data";
import Demo from "../components/demo/Demo";
import Cards from "../components/features/Cards";
import Service from "../components/mortgage-calculator/Service";
export default function Index({ hero, intro, card }) {
  return (
    <>
      <Hero hero={hero} />
      <Intro intro={intro} />
      <Demo />
      <Cards card={card} />
      <Service />
    </>
  );
}

export const getStaticProps = async () => {
  const hero = await getHero();
  const intro = await getIntroBlock();
  const card = await getCardBlock();
  return {
    props: {
      hero,
      intro,
      card,
    },
  };
};
