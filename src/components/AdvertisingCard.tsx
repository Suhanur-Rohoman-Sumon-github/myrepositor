import { IconType } from 'react-icons';

type TAdvertisingCard = {
  bg: string;
  Icon: IconType;
  heading: string;
  subheading: string;
};
const AdvertisingCard = ({
  bg,
  Icon,
  heading,
  subheading,
}: TAdvertisingCard) => {
  return (
    <div className={`${bg} p-12 space-y-3 rounded-lg  text-white`}>
      <h3 className="text-4xl">
        {' '}
        <Icon />
      </h3>
      <h4 className="text-2xl font-semibold">{heading}</h4>
      <p>{subheading}</p>
    </div>
  );
};

export default AdvertisingCard;
