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

type TResponse = {
  success: boolean;
  message: string;
  data: TService;
};

const ServiceDetailsPage = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [service, setService] = useState<TService | null>(null);
  const [loading, setLoading] = useState(false);

  const user = useAppSelector((state) => state.authTechTuend.user);
  const [addToCart, { data }] = useAddedToCartMutation();

  // Fetch Service Details
  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await fetch(
          `https://techtuend-service-server.vercel.app/api/services/${id}`,
          {
            method: "GET",
            mode: "cors",
            credentials: "include",
          }
        );
        const result: TResponse = await response.json();
        if (result.success) {
          setService(result.data);
        }
      } catch (error) {
        console.error("Failed to fetch service details:", error);
      }
    };

    fetchServiceDetails();
  }, [id]);

  const handlerAddToCart = () => {
    setLoading(true);
    const cartInfo = {
      // @ts-ignore
      user: user._id,
      service: service?._id,
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
                src={service.image}
                alt={service.name}
              />
            </div>
            <div className="space-y-5 lg:w-1/2 ">
              <div>
                <h3 className="text-3xl font-headingFont">{service.name}</h3>
                <p>{service.category}</p>
              </div>
              <p>{service.description}</p>
              <p>
                <span className="text-4xl font-bold text-red-500">
                  ${service.price}
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
