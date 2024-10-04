import Container from '../../../components/Container';
import HeadingText from '../../../components/HeadingText';
import ServiceCard from '../../../components/ServiceCard';

const OurService = () => {
  return (
    <Container>
      <div className="flex justify-between items-center">
        <HeadingText
          subheading="our service"
          heading="A Leading Global Provider  Of Recruitment"
          style=" lg:w-1/2"
        />
        <div>
          <button className="btn-primary">See All Services</button>
        </div>
      </div>
      <div className="my-12 mb-[116px]  grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </Container>
  );
};

export default OurService;
