import { Link, useLoaderData } from 'react-router-dom';
import Breakpoints from '../../components/Breakpoints';
import HeadingText from '../../components/HeadingText';
import Container from '../../components/Container';
import { TService } from '../Home/OurService/OurService';
type TResponse = {
  success: boolean;
  message: string;
  data: TService;
};

const ServiceDetailsPage = () => {
  const serviceData = useLoaderData();
  const { category, description, image, name, price } = (
    serviceData as TResponse
  ).data as TService;

  return (
    <div className="mt-[116px]">
      <Breakpoints path="Service,Details" />
      <Container>
        <div className="mt-[116px]">
          <HeadingText
            style="text-center lg:w-1/2 mx-auto"
            heading="Services Details"
            subheading="our services details"
          />

          <div className="mt-12 gap-10 lg:flex justify-between">
            <div className="lg:w-1/2">
              <img className="w-full h-[270px] rounded-lg" src={image} alt="" />
            </div>
            <div className="space-y-5 lg:w-1/2 ">
              <div>
                <h3 className="text-3xl font-headingFont">{name}</h3>
                <p>{category}</p>
              </div>
              <p>{description}</p>
              <p>
                <span className="text-4xl font-bold text-red-500">
                  ${price}
                </span>
              </p>

              <button className="mt-12 btn-primary">Add To Cart</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceDetailsPage;
