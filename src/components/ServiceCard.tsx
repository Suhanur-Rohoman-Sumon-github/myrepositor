import { HiArrowUpRight } from 'react-icons/hi2';
import { TService } from '../pages/Home/OurService/OurService';

const ServiceCard = ({ service }: { service: TService }) => {
  const { name, image, price, description } = service;
  return (
    <div className="w-full lg:h-[420px] space-y-3 relative p-4 shadow-xl rounded-xl">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p>{description.slice(0, 60)}...</p>
      <p className="text-red-500 absolute bottom-[260px] text-xl">${price}</p>
      <div className="absolute bottom-[220px]">
        <button className="btn-service">
          Exolore now <HiArrowUpRight />
        </button>
      </div>
      <div className=" h-1/2 absolute bottom-2 left-0 w-full p-2">
        <img className="rounded-md w-full   h-[200px]" src={image} alt={name} />
      </div>
    </div>
  );
};

export default ServiceCard;
