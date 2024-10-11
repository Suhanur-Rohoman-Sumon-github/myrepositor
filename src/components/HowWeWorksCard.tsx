import { IconType } from "react-icons";
type THowWeWorks = {
  Icon: IconType;
  heading: string;
  subheading: string;
};
const HowWeWorksCard = ({ Icon, heading, subheading }: THowWeWorks) => {
  return (
    <div className="text-center space-y-2">
      <p className="w-fit mx-auto p-3 bg-white rounded-full">
        <Icon />
      </p>
      <h3 className="font-semibold text-center">{heading}</h3>
      <p className="text-center">{subheading}</p>
    </div>
  );
};

export default HowWeWorksCard;
