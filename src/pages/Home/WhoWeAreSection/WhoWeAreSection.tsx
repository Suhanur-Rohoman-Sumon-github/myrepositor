import Container from '../../../components/Container';
import HeadingText from '../../../components/HeadingText';
import WhoWeAreCard from '../../../components/WhoWeAreCard';

const WhoWeAreSection = () => {
  return (
    <Container>
      <div>
        <HeadingText
          heading="A Leading Global Provider Of Recruitment"
          subheading="who we are"
          style="text-center w-1/2 mx-auto"
        />
        <div className="lg:flex mt-12 justify-between items-center gap-10 mb-[165px]">
          <div className="relative flex justify-center items-center">
            <img
              className=" lg:w-[400px] h-[290px] rounded-lg"
              src="/public/whoWeare1.jpeg"
              alt=""
            />
            <img
              className="absolute -bottom-24 rounded-lg -right-36"
              src="/public/whoweare2.jpeg"
              alt=""
            />
          </div>
          <div className="space-y-5 lg:w-1/2">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae.
            </p>
            <div className="grid grid-cols-2 gap-10">
              <WhoWeAreCard
                heading="Profile Highlighter"
                text="Get highlighted by the company that you’ve been worked."
              />
              <WhoWeAreCard
                heading="Find Suitable Candidates"
                text="Get highlighted by the company that you’ve been worked."
              />
              <WhoWeAreCard
                heading="Leadership Trainning"
                text="Get highlighted by the company that you’ve been worked."
              />
              <WhoWeAreCard
                heading="Fast On Demand Service"
                text="Get highlighted by the company that you’ve been worked."
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhoWeAreSection;
