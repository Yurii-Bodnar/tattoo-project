import Header from "../../components/Header/Header";
import HeaderMobile from "../../components/HeaderMobile/HeaderMobile";
import Hero from "../../components/Hero/Hero";
import HeroTitle from "../../components/HeroTitle/HeroTitle";
import { useIsMobile } from "../../utility/hooks";

const HomePage = () => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? <HeaderMobile /> : <Header />}
      <HeroTitle />
      <Hero />
    </>
  );
};

export default HomePage;
