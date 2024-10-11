import { FaUser } from "react-icons/fa";

interface IProps {
  name: string;
  title: string;
}

const LeadershipCard = ({ name, title }: IProps) => {
  return (
    <div className="p-5 bg-white rounded-md shadow-md ">
      <div className="border text-center p-4 rounded-md">
        <div className="text-center text-4xl w-full mx-auto mb-4">
          <FaUser className="w-full mx-auto text-[#9867ff]" />
        </div>
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-lg text-gray-600 text-center">{title}</p>
        <div className="flex gap-3 justify-center mt-4 text-brandPrimary"></div>
      </div>
    </div>
  );
};

export default LeadershipCard;
