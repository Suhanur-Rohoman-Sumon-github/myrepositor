import Container from "../../../components/Container";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="h-[892px]  overflow-hidden    relative heroSection">
      <Container>
        <div className="relative z-  top-[280px] flex justify-center items-center ">
          <div className=" lg:w-[60%] text-center space-y-5">
            <h2 className="text-5xl font-bold">
              Boost Your Business with Expert SEO & Web Solutions
            </h2>
            <p className="text-center">
              From search engine optimization to custom web development and
              ongoing maintenance, we offer tailored solutions to boost your
              online presence and drive measurable results. Let us help you turn
              your website into a powerful tool for business growth.
            </p>
            <div className="flex justify-center">
              <button className="btn-primary">Learn More</button>
            </div>
          </div>
        </div>

        {/* design in  corner */}
        <div className="absolute w-[300px] h-[300px] top-0  left-0 ">
          <img
            className="w-full h-full"
            src="https://s3-alpha-sig.figma.com/img/2c5c/ee30/7a685d0deedf6d7dcd8cb5ad8e093441?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QmMnbz6kGus0U6c3Jc3BxeDgP3Uy6Ob~OPtdGtF64idaRy2jSz~JO0tAdSFGjXlvnKBulUEBaXS~qdvBS4FG6mx0O5lvuPcEey-pOO4HuhQDq~Um1Br03F6KugHHbnKW7~1dClmd5NaIcxXI0R52WNwkcdWozmpD0Kf3-0tOCKKC33WUM9MlOhMc5hpG5lHC74z88IJ7HOuuCJ0kbdFp075Q9rXBUR8GX4xxzp8GMidfM-XRfG6eZuL5enhjL8ePnV09DvHEGZ-s5S~pavbcZ5a7MeEITuQxpctiBz4O82YY9lGL6BGN~kyQWWcXMvDlGcdMs234PdRWa1mAEoyCcw__"
            alt=""
          />
        </div>
        <div className="absolute w-[100px] h-[100px] top-0  right-5 ">
          <img
            className="w-full h-full"
            src="https://s3-alpha-sig.figma.com/img/f7d5/8ecf/cde68eda2f0752df460c0fd40a1ee961?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Js8P1gUfiRkwHJSnBfpzcFhFcOzPVUkasoTcA48IR3oQi5b2AIInzapM0bQWu2VOf7xqSQw9lscyynxZ6LhJ-mJ3JNnRu2wy5ecE8bXdMvwn4A4JUoEpLpL3dhq2pyQJ4xrvEG5xoTare2sGuFseynpR1FeEsI7eYhZMPfBu-wnIwmsgVtgUpPxVmEE9d4vn-9BTTrpZn0zbyDpw1xjr9LDyPIN4Vp2npF7FZxHQCM4BfOJSZShdCtoCyDUi13psvrdUXltt-Dhc7EWKEEvcws0-LiNqawOPrXERz~MEugoB4UqqddlE83R1I1xBfqYI0ATF1-TLvizNML~7oCpzJw__"
            alt=""
          />
        </div>

        {/* side image section one */}
        <div className="hidden lg:block">
          <img
            className="w-[237px] rounded-md  h-[300px] rotate-12 absolute left-24"
            src="https://s3-alpha-sig.figma.com/img/1df7/273c/09b8a8771681d95a4db0262ce6cdb7f2?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YphI52~IMEWX9aKGBqRK3-VfVYZZoiyviHeCfrusCFOLxhYV96nJMCSiWtGNEJJfH-ileshppU4MBnggSVAlExLAez~U3Feh6X8V3w8ab1WeK8dUgzEvPZtSij~YzJcRuGS0EeDXzUdsAex40HA8YHcdvRIAlSX0j3SEjzROaem7eY3TqW0NiLpSHkotSPWhG14089Ewlm-JfvTqN0h~KS9cg0XuyFVXgyFipjYQHAYjUjpjTwSm-g5-qnIGEmcskS1-fuBobOFXVRUh4kIDkZVD7cVwiHoeyIeyfosA7mwULh7SLMc6EHzr4ZUyNCuC431BXHTacO2ebeX1QQMdWg__"
            alt=""
          />
          <img
            className="w-[165px] rounded-md absolute top-[600px] left-[390px] -rotate-12  h-[199px]"
            src="https://s3-alpha-sig.figma.com/img/da23/6cc2/66585aeb21973c6c0a9cacee414cda4a?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nHetCIlyrlsRs97-J324XhOeSoxPgMnaGRYV1ewom6JxR3rKDhXq4eG4Ap87Ll23lhePfVsph6ccXux3nrNrzoM3zPru7rAs7BhQ9zjZI2HO3RuKSoPuUDjCmfFso0cenzaP~hu5h2s6lhFBypCtTlq55mrQioEmNZAfSYQ6TeKSwTWc25FIOp06IBsnqq8b-D61L~2YmtIA~GIp~iIJRo7Go4LEh3gXBPZlbdfeB-SWWW~qDugDwLhi-DsNzbsyxCk1D~7cLFzA-lnUEI6RZ0ID-boCk5VezPA-TzmfFANxEZZP1Icm9LxDz5p-rMqBBSDyBZK2vNYg9H4SI5N0kw__"
            alt=""
          />
        </div>
        {/* side image section 2 */}
        <div className="hidden lg:block">
          <img
            className="w-[165px] rounded-md absolute top-[200px] right-[100px] rotate-12 z-40 h-[199px]"
            src="https://s3-alpha-sig.figma.com/img/e953/b516/f37217c629551e54468d54dd9811d036?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AhJQm3g3WVUg8vYLXJdzP4hEC0AHMmapifq~UJWyE5C7i-hvnc~GiiabF0zQdOUBripMLNBwTSuBqRDGTTWNg~LUBqXMDunLpukE1Yq5fLw~D05KBg0UbjhGj8tib-32Qbz~1Cr2tRyMok9fTWsa-okvodmw-gQxQYoz6YjnMNpY8Xx138zsL8cc~8pFwMj9Zdr8ckkVvnnHdtNk~mrLbcWCQ3FuPpIdcNKatUBG0ZnANRw-yvAtn87kK-pQsXdUKeu-e3ukxVc0lfHMwtwARn5hF7szrGXrIt8zBKdKVQcwIBcvyAQuKGsRqnxIpT4C4-879dnk5XbHmmk507KHdQ__"
            alt=""
          />
          <img
            className="w-[237px] rounded-md  h-[300px] -rotate-12 absolute top-[470px] right-24"
            src="https://s3-alpha-sig.figma.com/img/dcb9/6895/9d218fc2eea10b9b24cfa33696f672fa?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CwmKMMOTmvTNRrAL2z9O597BlL2Hx2eobLWTOfft6wzBvqYDU0xbSQXrRhTVKlEoYMkA1niiO9r2xUMos8h6rYis9~~vm6EXHupBqIoCEqL48WFCEJ7~WC8zCYVXKnOas8sw72yfKFFe~VXHoGhv07eFOBTiUzPMXHka0YgH12Uxp8sJA8kpTCd7k~YEY4s3-NxlDevNJUvO-VzBzGzABai~kK3CwZEdsGY64KqBRFyJvfmxlazPntt0ms5k4Sa-o99H7tRhU~QBPDosKR6PdK3ZFNr-Phr34CwoyoqOd0tEqlTqpxWqbvgfZPmdw0yxjZqtogeh-iRyq4-ygMvK5Q__"
            alt=""
          />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
