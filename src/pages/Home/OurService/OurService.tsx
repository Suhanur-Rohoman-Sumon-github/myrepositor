import Container from '../../../components/Container';
import HeadingText from '../../../components/HeadingText';
import ServiceCard from '../../../components/ServiceCard';
import { Link } from 'react-router-dom';
import { useGetAllServiceQuery } from '../../../Redux/features/service/serviceApis';

export type TService = {
  _id: string;
  name: string;
  image: string;
  price: string; // price can be a string or a PriceRange object
  description: string;
  frequency?: string; // optional, as not all services have a frequency
  category: string;
};
const OurService = () => {
  const { data: servicesRes } = useGetAllServiceQuery(undefined);
  const services = servicesRes?.data;
  return (
    <Container>
      <div className="flex justify-between items-center">
        <HeadingText
          subheading="our service"
          heading="A Leading Global Provider  Of Recruitment"
          style=" lg:w-1/2"
        />
        <div>
          <Link to="/services">
            {' '}
            <button className="btn-primary">See All Services</button>
          </Link>
        </div>
      </div>
      <div className="my-12 mb-[116px]  grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services && services.length > 0 ? (
          services
            .slice(0, 6)
            .map((service: TService) => (
              <ServiceCard service={service} key={service.description} />
            ))
        ) : (
          <p>Service not found</p>
        )}
      </div>
    </Container>
  );
};

export default OurService;
