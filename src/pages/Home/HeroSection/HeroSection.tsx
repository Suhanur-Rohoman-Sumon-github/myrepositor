import Container from '../../../components/Container';
import './HeroSection.css';
const HeroSection = () => {
  return (
    <div className="h-[892px]  overflow-hidden    relative heroSection">
      <Container>
        <div className="relative z-  top-[280px] flex justify-center items-center ">
          <div className=" lg:w-[60%] text-center space-y-5">
            <h2 className="text-5xl font-bold">
              Boost Your Business with Expert SEO & Web Solutions
            </h2>
            <p className="text-center">
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

        {/* design in  corner */}
        <div className="absolute w-[300px] h-[300px] top-0  left-0 ">
          <img className="w-full h-full" src="/public/herocorner1.png" alt="" />
        </div>
        <div className="absolute w-[100px] h-[100px] top-0  right-5 ">
          <img className="w-full h-full" src="/public/herocorner2.png" alt="" />
        </div>

        {/* side image section one */}
        <div className="hidden lg:block">
          <img
            className="w-[237px] rounded-md  h-[300px] rotate-12 absolute left-24"
            src="/public/hero1.jpeg"
            alt=""
          />
          <img
            className="w-[165px] rounded-md absolute top-[600px] left-[390px] -rotate-12  h-[199px]"
            src="/public/hero2.jpeg"
            alt=""
          />
        </div>
        {/* side image section 2 */}
        <div className="hidden lg:block">
          <img
            className="w-[165px] rounded-md absolute top-[200px] right-[100px] rotate-12 z-40 h-[199px]"
            src="/public/hero3.jpeg"
            alt=""
          />
          <img
            className="w-[237px] rounded-md  h-[300px] -rotate-12 absolute top-[470px] right-24"
            src="/public/hero4.jpeg"
            alt=""
          />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
