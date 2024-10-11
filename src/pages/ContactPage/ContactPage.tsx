import Breakpoints from "../../components/Breakpoints";
import CallBackSection from "../Home/CallBackSection/CallBackSection";
import WhoWeAreSection from "../Home/WhoWeAreSection/WhoWeAreSection";

const ContactPage = () => {
  return (
    <div className="mt-[116px]">
      <Breakpoints path="Contact us" />
      <div className="mt-12">
        <WhoWeAreSection />
        <CallBackSection />
      </div>
    </div>
  );
};

export default ContactPage;
