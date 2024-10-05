import { HiArrowUpRight } from 'react-icons/hi2';

const ServiceCard = () => {
  return (
    <div className="w-full space-y-3 p-4 shadow-xl rounded-xl">
      <h3 className="text-xl font-semibold">Recruitment Solution</h3>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium dolor…
      </p>
      <button className="btn-service">
        Exolore now <HiArrowUpRight />
      </button>
      <div>
        <img
          className="rounded-md w-full h-[200px]"
          src="https://s3-alpha-sig.figma.com/img/0ce3/89bf/d6fe542f45690cf00eaf91dbba47b86a?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fEERFNJLYP0Z7vE6DEg4YXTsiC72LYkqJGrHypgJWB1c7~8ySy2Y2N2rwJ~BpErwsSXumjpcIfzoSRG1mel6kSXbIwrC4TUBY-dzdEhcFNkzWJXDMQomBPSkXAOOeU9HpGJ6vrxaJ5Pk-infa9whF3r88KooyCXy7Gk8zpC5tTPlPerWoK006dmRKjuglwA~VFU7ALZc5~zHlejxep6YdhtVVutwycYqOpTVBCNXjAONYyJ7o9BglgmfEjdfZXqumS9Ghs~UgUT-MXJBmmJkiiZppqey6A4hoJIrp7JmIb97kRoHqhjVDVDfe0~c9CIHOAhh0VtP-Njo2ls6KsUDHQ__"
          alt=""
        />
      </div>
    </div>
  );
};

export default ServiceCard;
