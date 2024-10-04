import { HiArrowUpRight } from 'react-icons/hi2';

const ArticaleSliderCard = () => {
  return (
    <div className="card  bg-base-100 w-full shadow-xl">
      <figure>
        <img
          className="w-10/12 h-[200px] mx-auto rounded-md"
          src="https://s3-alpha-sig.figma.com/img/e821/35d0/e98caddaed606b8c4c217a476780ab9c?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b9ZtyDYBSnFdK~J5sOOhXT0nJcjhzvR81JNTqfkOjIXqEDK~k5XxM3LPKzeEwmzXJDrWNz-oQErVKGiVdaC3CnIUDwg5cqKPbM2QDd~Ag7Q65Jygi4zhQEZyIDFq0QcMSiyX96hdRxAWT9Oq-eCY6XedFS0Mg3-ACVZ9nE1pUGP86CfCcaNIyZ4KE~ILXF5VIUXVtouLR~tMpv~F~tc4qL9YiWHHR1fOyOhEu2cmHy7BVgxqTJEP2sntOJ7emwKBK7zPuyFlnFauT5bzax7JfzM1WFqG1CwE8ei-Ur2Ed8mit4F7iiOHGl1yOFVzo3Yrcslqfyp0h6Lpdwg-qT8I5w__"
          alt="slider image"
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
          <button className="btn-outline">
            Read More <HiArrowUpRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticaleSliderCard;
