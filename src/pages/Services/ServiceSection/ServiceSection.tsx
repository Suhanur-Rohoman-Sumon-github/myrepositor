import Container from '../../../components/Container';
import HeadingText from '../../../components/HeadingText';
import { TService } from '../../Home/OurService/OurService';
import ServiceCardContainer from '../../../components/ServiceCardContainer';
import { useGetAllServiceQuery } from '../../../Redux/features/service/serviceApis';

const ServiceSection = () => {
  const { data: servicesResponse } = useGetAllServiceQuery(undefined);
  const services = servicesResponse?.data;

  const seoServices =
    services &&
    services.filter((service: TService) => service.category === 'SEO Services');
  const webDevelopmentServices =
    services &&
    services.filter(
      (service: TService) => service.category === 'Web Development'
    );

  const socialMediaMarketingServices =
    services &&
    services.filter(
      (service: TService) => service.category === 'Social Media Marketing'
    );
  const supportAndReportingServices =
    services &&
    services.filter(
      (service: TService) => service.category === 'Support and Reporting'
    );
  const maintenanceServices =
    services &&
    services.filter((service: TService) => service.category === 'Maintenance');

  return (
    <Container>
      <div className="mt-[116px]">
        <HeadingText
          style="text-center lg:w-1/2 mx-auto"
          subheading="our services "
          heading="A Leading Global Provider Of Recruitment"
        />
        {/* seo services */}
        <ServiceCardContainer name="SEO Services" services={seoServices} />

        {/* Maintenance Services */}
        <ServiceCardContainer
          name="Maintenance Services"
          services={maintenanceServices}
        />

        {/* Social Media Marketing */}
        <ServiceCardContainer
          name="Social Media Marketing"
          services={socialMediaMarketingServices}
        />

        {/* Social Media Marketing */}
        <ServiceCardContainer
          name="Support & Reporting"
          services={supportAndReportingServices}
        />
        {/* Web Development */}
        <ServiceCardContainer
          name="Web Development"
          services={webDevelopmentServices}
        />
      </div>
    </Container>
  );
};

export default ServiceSection;
