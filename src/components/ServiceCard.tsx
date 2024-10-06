import { HiArrowUpRight } from 'react-icons/hi2';
import { TService } from '../pages/Home/OurService/OurService';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }: { service: TService }) => {
  const { _id, name, image, price, description } = service;
  return (
    <div className="w-full lg:h-[420px] space-y-3 relative p-4 shadow-xl rounded-xl">
      <div className=" h-1/2  w-full ">
        <img className="rounded-md w-full   h-[200px]" src={image} alt={name} />
      </div>
      <h3 className="text-xl mt-3 font-semibold">{name}</h3>
      <p>{description.slice(0, 60)}...</p>
      <p className="text-red-500  text-xl">${price}</p>
      <div className="absolute bottom-2 ">
        <Link to={`/service/${_id}`}>
          <button className="btn-service">
            Exolore now <HiArrowUpRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
