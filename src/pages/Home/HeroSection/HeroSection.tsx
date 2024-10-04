import Container from '../../../components/Container';
import './HeroSection.css';
const HeroSection = () => {
  return (
    <div className="h-[892px] w-full heroSection">
      <Container>
        <div className="relative top-[280px] flex justify-center items-center ">
          <div className=" lg:w-[60%] text-center space-y-5">
            <h2 className="text-5xl font-bold">
              Boost Your Business with Expert SEO & Web Solutions
            </h2>
            <p>
              From search engine optimization to custom web development and
              ongoing maintenance, we offer tailored solutions to boost your
              online presence and drive measurable results. Let us help you turn
              your website into a powerful tool for business growth.
            </p>
            <div className="flex justify-center">
              <button className="btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
