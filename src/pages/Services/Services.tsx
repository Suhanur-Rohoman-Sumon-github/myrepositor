import Breakpoints from '../../components/Breakpoints';
import ServiceSection from './ServiceSection/ServiceSection';
import SubscribedForService from './SubscribedForService/SubscribedForService';

const Services = () => {
  return (
    <div className="mt-[116px]">
      <Breakpoints path="Our Service" />
      <ServiceSection />
      <SubscribedForService />
    </div>
  );
};

export default Services;
