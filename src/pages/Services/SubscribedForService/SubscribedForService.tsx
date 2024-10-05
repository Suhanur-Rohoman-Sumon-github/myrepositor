import Container from '../../../components/Container';

const SubscribedForService = () => {
  return (
    <Container>
      <div className="bg-[url(https://s3-alpha-sig.figma.com/img/d908/197e/56587bafc1ca6970ed3f7b1239700cb4?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FuW6pPG0vZzMPOmKYEFQfW484cRzHFyB6NDpmeM~ajAGDQkKrXwH8GIplfSBOPoKA0n4tzd9QParopJ0vzHYp~wfjUBUtMK8tLuos6ZdHA1bHnZpAsipqFVptkeu34v-gNgGN-1lrj~3tLGQDG8gHaeTGOETI7AaTXoL0A0vaXEPCuHyypdNJQHjN98ZCqorOhUiTMe3IKM0qavz3AAx4ZWCs0Yc-BvjLgWa7DzWNrcYCfVHVP8snLgOLlgIk5dNYhMKa9KUKtrC6-z3AeEcqVTBcmstAKUqBSapIaicGv1eoVRET6wjESKtQ5t1zAs2Rwls1nqXOSk5jFGVanzi9A__)] lg:h-[314px] w-full h-fit rounded-lg p-5 lg:p-0 my-[116px] lg:flex justify-center items-center text-white">
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
            <button className="btn join-item bg-brandPrimary text-white rounded-full z-10">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SubscribedForService;
