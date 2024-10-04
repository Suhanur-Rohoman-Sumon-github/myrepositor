import AdvertosimgSection from '../AdvertisingSection/AdvertosimgSection';
import HappyCoustomer from '../HappyCoustomer/HappyCoustomer';
import HeroSection from '../HeroSection/HeroSection';
import HowWeWorks from '../HowWeWorks/HowWeWorks';
import Milestones from '../Milestones/Milestones';
import OurService from '../OurService/OurService';
import WhoWeAreSection from '../WhoWeAreSection/WhoWeAreSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AdvertosimgSection />
      <WhoWeAreSection />
      <Milestones />
      <OurService />
      <HowWeWorks />
      <HappyCoustomer />
    </>
  );
};

export default Home;
