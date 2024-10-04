import { FaQuoteRight } from 'react-icons/fa6';
import Container from '../../../components/Container';

const HappyCoustomer = () => {
  return (
    <Container>
      <div className="lg:flex justify-between items-center mt-[116px]   gap-10">
        <div className="lg:w-1/2">
          <img
            className="rounded-tr-[120px] h-[394px] rounded-bl-[120px] rounded-s-xl rounded-e-xl"
            src="https://s3-alpha-sig.figma.com/img/0a37/9ca9/c5e3fe4d932c32f93f33736219ef6891?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=odX7lKxoo78oC3fjxpzk5YX1Aj1Vm7lgo0NRKd0kc2TSwdPJ9dq9Eo~tPy2ggM1yPlQR7sQ4PBibvSJ3Owd96Jvu46FbPO-J90BfYFuDEfzphPO-V6si3semgVXnK4mbMuwSuu8uAH6enS8k0MRC-Y0caiBkkKKOHy9GzB4Z2u7GCwitEDmNkAwYYlR6DyVkfxZUj6aZx9AUIzZbSdWJ43ejM~14bV~2sKbrJ0GUqgxJr6Z8StoSoDDF9Oq2y~53dh0Q2zGNMV89KvjG05RVkSawjQWJXsGgg38~jJEwhV7aiKXUND~0MQfNyJK1dcVOVv4drsTGEa0Vd3DIKvGXBg__"
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
            <p className="text-xs">UI Designer</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HappyCoustomer;
