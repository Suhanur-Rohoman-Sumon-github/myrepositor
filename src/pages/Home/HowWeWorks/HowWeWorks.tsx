import { FaSearch } from 'react-icons/fa';
import Container from '../../../components/Container';
import HeadingText from '../../../components/HeadingText';
import HowWeWorksCard from '../../../components/HowWeWorksCard';

const HowWeWorks = () => {
  return (
    <div className="bg-[url(https://s3-alpha-sig.figma.com/img/045d/1a82/43700b96f6ae32909d0a73212752273a?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HR23boagBP4WY1q3rKevjTLPVuKVV2ItzAQa9pOKZ1kxucVKEbWpDgmtSdhnG4DDgJufaEmfD2uTaog9Ri6R3EHCsbxguociV~tWWv2DiMVG16H3wyLrKSH5Z0QqG2Q4u5UsZpRJ~PNCmjlmndCr4kyofpOc4iQ-buVFqyQ-imiGMKIo8n~f4HEw0jMxu6jej9NdpkJXG5hp3EbTYF0JqLD6Zh~LLBxyYEiIOBlJEIuWjLdRv3M7UqJ~EhPJ-mmkQDWpFjzXOKcyhr5xFH~ojhuQLCJc~9lr2jFycZEJYWfAbBugnDfq~e4Nv26Hxmy2SPIZ4Bk-HQVX00H-5NB5RA__)] bg-center bg-cover h-fit p-12 lg:p-0 lg:h-[730px] flex justify-center items-center">
      <Container>
        <HeadingText
          heading=" Solutions To Improve  Performance"
          subheading="how we work"
          style="text-center lg:w-1/3 mx-auto"
        />
        <p className="text-center lg:w-1/2 mx-auto mt-5">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi.
        </p>
        <div className="grid grid-cols-1 mt-16 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <HowWeWorksCard
            Icon={FaSearch}
            heading="Analysis"
            subheading="Our commitment to support your HR needs every steps."
          />
          <HowWeWorksCard
            Icon={FaSearch}
            heading="Analysis"
            subheading="Our commitment to support your HR needs every steps."
          />
          <HowWeWorksCard
            Icon={FaSearch}
            heading="Analysis"
            subheading="Our commitment to support your HR needs every steps."
          />
          <HowWeWorksCard
            Icon={FaSearch}
            heading="Analysis"
            subheading="Our commitment to support your HR needs every steps."
          />
        </div>
      </Container>
    </div>
  );
};

export default HowWeWorks;
