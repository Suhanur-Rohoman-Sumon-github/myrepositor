import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const LeadershipCard = () => {
  return (
    <div className=" rounded-md overflow-hidden  shadow-md ">
      <figure>
        <img
          className="h-[230px] w-full"
          src="https://s3-alpha-sig.figma.com/img/8d1a/b654/39d3db81bc2ef41a5a9d660a2b1aca45?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y17cnOn3fk8ACIUo5-Lk2j7COeiTl~WjoqC4Al41q1-k9Ze4RblctNzAi-F8yrUtHuNgKLJ9WncU9csIbLb5sy~k~GsDCwzZAqDcTP7pjGJEXMmmch3Yq52CmOr1FmIWpRAZOSXS~PXFMULS3PtDcfaHe-euSTw~g0Z-RNdsImlz9S4YJB1xwmP2kMTQJ4DySl8J0H5cexEKWa~uL0y6qd97I8g352Itb0YDuS5PoenIJmIn12QaCjryfXoVl23Zx~ojy1KVSiacrCqN-hjpJdfFOmFAC~CDBluU9Lx2dPlrsXkOI6PyWeY3Dk82P-xrbqOMSM6a3ay4LsnFix0wmQ__"
          alt="Leader ship image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Kadir Miye</h2>
        <p>miye@example.com</p>
        <div className="flex gap-3 w-fit text-brandPrimary">
          <p>
            <FaLinkedin />
          </p>
          <p>
            <FaFacebook />
          </p>
          <p>
            <FaTwitter />
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadershipCard;
