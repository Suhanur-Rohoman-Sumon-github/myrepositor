import Container from "../../../components/Container";

const SubscribedSection = () => {
  return (
    <Container>
      <div className="bg-[url(https://i.ibb.co.com/BThzfvL/subsbg.png)] lg:h-[314px] w-full h-fit rounded-lg p-5 lg:p-0 my-[116px] lg:flex justify-center items-center text-white">
        <div className=" p-5 lg:ms-24 w-10/12 mx-auto lg:w-1/3 lg:px-12">
          <h3 className="text-4xl  font-bold">
            Find The Best Talents & Build Relationship
          </h3>
        </div>
        <div className="lg:w-1/2 px-12 space-y-5">
          <p>
            The most complete talent relationship platform for talent sourcing,
            recruitment events and internal mobility
          </p>
          <div className="join w-full ">
            <input
              className="input text-black rounded-full join-item w-10/12"
              placeholder="Email"
            />
            <button className="btn join-item bg-black text-white rounded-full z-10">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SubscribedSection;
