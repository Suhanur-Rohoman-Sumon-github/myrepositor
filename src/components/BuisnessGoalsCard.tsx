import { IconType } from 'react-icons';

type TBuisnessGoalsCard = {
  Icon: IconType;
  heading: string;
  value: string;
};
const BuisnessGoalsCard = ({ Icon, heading, value }: TBuisnessGoalsCard) => {
  return (
    <div className="flex bg-white items-center flex-col gap-3 p-10 rounded-2xl">
      <h6 className="p-5 w-fit mx-auto rounded-full bg-brandPrimary text-white">
        <Icon />
      </h6>
      <h3 className="font-bold text-5xl">{value}</h3>
      <p>{heading}</p>
    </div>
  );
};

export default BuisnessGoalsCard;
