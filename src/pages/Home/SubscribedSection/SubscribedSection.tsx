import Container from '../../../components/Container';

const SubscribedSection = () => {
  return (
    <Container>
      <div className="bg-[url(https://s3-alpha-sig.figma.com/img/6167/4e3f/f4f939b7b11f9cd18f0d9d81b3988c33?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P8sXsNVdsN3r7JVy~mw0PmO3RvvOafn3eYy~HE~uvEEu4FkHuPqclDPTQv9ZMgYrzt4fH-JVuQYEAzgvGwMUKkkd88KGLJRAajR1hyxg43lgydkuFtdsRkbse5du99LyRCuyM--I1LivfVW9vh~SczS5rxSEQqsVYArwdMRFzgCgFwqMx2DUTcUi5KGWW5H~FZV3s7R~up4Xr4~EQRvTRoP58prlcKy9f9SBqy1zb7chhqUvlOA-vo7OkpFEmqJti5rdS-aLI-vxNP02mNUfGckYZHft0KluSG0iGaZg~JCM8SWR5VzzcrBlZ12SfLsHkFhWJmJtnDAO8U9hxsROPA__)] lg:h-[314px] w-full h-fit rounded-lg p-5 lg:p-0 my-[116px] lg:flex justify-center items-center text-white">
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
