import { FaSearch } from "react-icons/fa";
import Container from "../../../components/Container";
import HeadingText from "../../../components/HeadingText";
import HowWeWorksCard from "../../../components/HowWeWorksCard";

const HowWeWorks = () => {
  return (
    <div className="bg-[url(https://i.ibb.co.com/ySZ6gS4/how-We-Work.jpg)] bg-center bg-contain h-fit p-12 lg:p-0 lg:h-[730px] flex justify-center items-center">
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
        <div className="grid grid-cols-1 mt-16 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
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
