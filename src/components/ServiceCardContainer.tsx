import ServiceCard from './ServiceCard';
import { TService } from '../pages/Home/OurService/OurService';

const ServiceCardContainer = ({
  services,
  name,
}: {
  services: TService[];
  name: string;
}) => {
  return (
    <div className="mt-[116px]">
      <h3 className="text-3xl border-b-2 border-brandPrimary pb-2 px-1 w-fit mx-auto font-semibold text-center font-headingFont">
        {name}
      </h3>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services && services.length > 0 ? (
          services.map((service: TService) => (
            <ServiceCard service={service} key={service._id} />
          ))
        ) : (
          <p>Service is not found</p>
        )}
      </div>
    </div>
  );
};

export default ServiceCardContainer;
