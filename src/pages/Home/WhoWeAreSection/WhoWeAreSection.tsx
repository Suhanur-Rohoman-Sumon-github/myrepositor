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
              src="https://s3-alpha-sig.figma.com/img/910f/5a75/76fa007cb5a307b4e569f62f77130156?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ddf~YAibC13~JUvJ20CU~3pxINC4HvDPt0WyWr16Gs006goZU0xB1bYYzaP3x4M42MR7JY0zt2l6FpwmghFV0~XSqG7okrOz~c3wsx2kQk6iFedkDJr-NyExYVcKuHofTDNXAscD7RwEGTzMTjO3mpOPghcuZ3X80QF~TpBQNnCFp4dD9bpgwWIEpsMYpdcSUREIgP5hmVcHK8X0Z0ItNkq9f-eiBGpmNHN30mV9SEkAJnnfr1xDzNXXHSD0GA9eqnEsnT4piM12dc0KhjG2LB6p0PIotZcl6TLdDODoYG60kej6lcogQg6Y5QRw3ystA0pZmT~HXocE7BoSdzYm0A__"
              alt=""
            />
            <img
              className="absolute -bottom-24 rounded-lg -right-36"
              src="https://s3-alpha-sig.figma.com/img/191d/2580/a87813ee6e9a6fe861fb6e8088e73ebd?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AM80eSka2S-SsN29r5b8Za1DnMqe0CXjzL~4yVeiTsXTSM~O4ZzaH0vRH9GEkZpq9sShMDyLHB5q7mojNHxUM-loGnCI5Xrs3Ap3FxIsH3ku~TyOPIxL7k8g~-fEBLih2MAAWVa1wv6oD3mc22-RD3poSvp~4Akx~cHy1ryF9oOekgKlhIM3xSepQsD~-xXt4NNLJ6Q7CN7z7sGLF1EuhbZq~srn-G47zgc~zjU6p6cXae0UpRNpDTxzRp9c9i7DPbXT~7Q6Y5XDyLyZd9D-XldpMVDEWnKAA4mHr5ALUmi8V2-dvEt6-oNLLkFECLqxadrSWJY4gFFI6bOf~TtWbw__"
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
