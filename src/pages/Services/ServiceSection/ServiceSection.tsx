import Container from '../../../components/Container';
import HeadingText from '../../../components/HeadingText';
import ServiceCard from '../../../components/ServiceCard';

const ServiceSection = () => {
  return (
    <Container>
      <div className="mt-[116px]">
        <HeadingText
          style="text-center lg:w-1/2 mx-auto"
          subheading="our services "
          heading="A Leading Global Provider Of Recruitment"
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </Container>
  );
};

export default ServiceSection;
