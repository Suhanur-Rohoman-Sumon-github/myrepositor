import { HiArrowUpRight } from 'react-icons/hi2';

const BlogCard = ({ img }: { img: string }) => {
  // use dummy data for showing card before production use real data and make it dynamic
  return (
    <div className="card  bg-base-100 w-full shadow-xl">
      <figure className="h-[250px]">
        <img
          className="w-full h-full mx-auto rounded-md"
          src={img}
          alt="blog image"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-3">
          <button className="btn-sm">Ecommerce</button>
          <button className="btn-sm">IT Companies</button>
        </div>
        <h2 className="card-title">Emerging Job Market Trends for 2024</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit...</p>
        <div className="card-actions justify-start">
          <button className="btn-service">
            Read More <HiArrowUpRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
