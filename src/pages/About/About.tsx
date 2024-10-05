import Breakpoints from '../../components/Breakpoints';
import HappyCoustomer from '../Home/HappyCoustomer/HappyCoustomer';
import LeadershipSection from '../Home/LeadershipSection/LeadershipSection';
import AboutUsSection from './AboutUsSection/AboutUsSection';
import BuisnessGoals from './BuisnessGoals/BuisnessGoals';

const About = () => {
  return (
    <div className="mt-[116px]">
      <Breakpoints path="About us" />
      <AboutUsSection />
      <LeadershipSection />
      <BuisnessGoals />
      <HappyCoustomer />
    </div>
  );
};

export default About;
