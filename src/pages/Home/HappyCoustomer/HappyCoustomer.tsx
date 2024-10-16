import { FaQuoteRight } from 'react-icons/fa6';
import Container from '../../../components/Container';

const HappyCoustomer = () => {
  return (
    <Container>
      <div className="lg:flex justify-between items-center mt-[116px]   gap-10">
        <div className="lg:w-1/2">
          <img
            className="rounded-tr-[120px] h-[394px] rounded-bl-[120px] rounded-s-xl rounded-e-xl"
            src="/public/happyClients.jpeg"
            alt=""
          />
        </div>
        <div className="space-y-3 lg:w-1/2">
          <div className="p-5 w-fit bg-brandPrimary rounded-full text-white text-xl">
            <FaQuoteRight />
          </div>
          <h2 className="text-4xl font-bold">Our Happy Customers</h2>
          <p>
            “HR Solutions are incredibly accommodating, diligent and competent.
            They understand the scope, needs and importance of both concerned
            parties within the interviewing and hiring process - That really
            helps with building a life and career”
          </p>
          <div>
            <h6 className="text-[18px] font-semibold">James Thomas</h6>
            <p className="text-xs">Seo Specialist</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HappyCoustomer;
