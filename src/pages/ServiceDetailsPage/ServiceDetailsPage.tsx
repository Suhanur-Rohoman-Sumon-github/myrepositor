/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useParams, useNavigate } from "react-router-dom";
import Breakpoints from "../../components/Breakpoints";
import HeadingText from "../../components/HeadingText";
import Container from "../../components/Container";
import { TService } from "../Home/OurService/OurService";
import { useAppSelector } from "../../Redux/hooks/hooks";
import { useAddedToCartMutation } from "../../Redux/features/cart/cartApis";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useGetSingleServicesQuery } from "../../Redux/features/service/serviceApis";

type TResponse = {
  success: boolean;
  message: string;
  data: TService;
};

const ServiceDetailsPage = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const user = useAppSelector((state) => state.authTechTuend.user);
  const [addToCart, { data }] = useAddedToCartMutation();

  // Fetch Service Details
  const { data: service } = useGetSingleServicesQuery({ id: id });
  console.log(service);

  const handlerAddToCart = () => {
    setLoading(true);
    const cartInfo = {
      // @ts-ignore
      user: user._id,
      service: service.data?._id,
      quantity: 1,
      // @ts-ignore
      email: user?.email,
    };

    addToCart(cartInfo);
  };

  useEffect(() => {
    if (data?.success) {
      toast.success(data?.message);
      setLoading(false);
      navigate("/cart");
    } else {
      setLoading(false);
    }
  }, [data, navigate]);

  if (!service) {
    return <div>Loading...</div>;
  }

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
              <img
                className="w-full h-[270px] rounded-lg"
                src={service.data?.image}
                alt={service.data?.name}
              />
            </div>
            <div className="space-y-5 lg:w-1/2 ">
              <div>
                <h3 className="text-3xl font-headingFont">
                  {service.data?.name}
                </h3>
                <p>{service.data?.category}</p>
              </div>
              <p>{service.data?.description}</p>
              <p>
                <span className="text-4xl font-bold text-red-500">
                  ${service.data?.price}
                </span>
              </p>
              <button
                disabled={loading}
                onClick={handlerAddToCart}
                className="mt-12 btn-primary"
              >
                {loading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  "Add To Cart"
                )}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceDetailsPage;
