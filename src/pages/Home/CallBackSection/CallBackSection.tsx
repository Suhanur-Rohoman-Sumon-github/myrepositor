import Container from "../../../components/Container";
import HeadingText from "../../../components/HeadingText";

const CallBackSection = () => {
  return (
    <div className="bg-[url(https://i.ibb.co.com/YPJj2Xs/contact.png)] lg:h-[850px]  bg-center bg-cover my-[116px] bg-no-repeat lg:flex justify-between items-center">
      <Container>
        <div className="lg:flex justify-between gap-10">
          <div className="lg:w-1/2">
            <HeadingText
              style=""
              heading="Request A Replay Back From Us"
              subheading="get a quote"
            />
            <p className="mt-5 text-[#7D7D7D]">
              Contact to us when you have questions for our solution or
              something elses.
            </p>
            <div className="mt-8">
              <form className="space-y-6   rounded-lg ">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Interested In"
                  className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button type="submit" className="btn-primary ">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className=" relative -top-24">
            <img
              className=" w-full"
              src="https://i.ibb.co.com/YhCQDH5/contact-Lady.png"
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CallBackSection;
