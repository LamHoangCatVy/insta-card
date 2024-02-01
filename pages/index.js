import Hero from "../components/hero/Hero";
import Intro from "../components/intro/Intro";
import { getHero, getIntroBlock, getCardBlock } from "../data";
import Demo from "../components/globals/Demo";
import Cards from "../components/features/Cards";
export default function Index({ hero, intro, card }) {
  return (
    <>
      <Hero hero={hero} />
      <Intro intro={intro} />
      <Cards card={card} />
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
