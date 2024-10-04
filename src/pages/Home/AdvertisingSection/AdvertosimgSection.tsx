import Container from '../../../components/Container';
import AdvertisingCard from '../../../components/AdvertisingCard';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { CiBullhorn } from 'react-icons/ci';
import { GiNotebook } from 'react-icons/gi';

const AdvertosimgSection = () => {
  return (
    <Container>
      <div className="my-[165px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <AdvertisingCard
          bg="bg-[#267DFF]"
          heading="Build your compelling job advertisement"
          Icon={FaMagnifyingGlass}
          subheading="Get o’clock guidance on how to attract more cadidates."
        />
        <AdvertisingCard
          bg="bg-[#00D085]"
          heading="Promote your ad on 100+ job search sites"
          Icon={CiBullhorn}
          subheading="Get o’clock guidance on how to attract more cadidates."
        />
        <AdvertisingCard
          bg="bg-[#9867FF]"
          heading="Manage candidates easywith hiring workflows"
          Icon={GiNotebook}
          subheading="Get o’clock guidance on how to attract more cadidates."
        />
      </div>
    </Container>
  );
};

export default AdvertosimgSection;
