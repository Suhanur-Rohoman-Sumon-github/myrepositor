import { useState } from 'react';
import HeadingText from '../../../components/HeadingText';
import TabContent from '../../../components/TabContent';

const AboutUsSection = () => {
  const [toggle, setToggle] = useState('mission');
  return (
    <div className=" lg:flex gap-10 my-[116px] justify-between ">
      <div className="lg:w-1/2">
        <img
          className="w-full rounded-r-lg rounded-tr-[200px]"
          src="https://s3-alpha-sig.figma.com/img/b30f/4265/91e160b03e0081c978b3f5108d7068cc?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dBRFz94pEB3x0ikYWhWsikLBNg4NUGNXjJN8iPBiUnfMzCuvti8pWV7uiUOIrdXNLoRv~PS7mxozGBk9wDHFDXsjZEm3Xa7l9nzkxPZki9aSZmejCftpkcyfPz8Ka~7cdBs-aLKOTd3~75hVFMgxvKOFMwgsZFqcOWyLV9MIwBLKSVhhdw89zvfD69J~DZk0x73GG-jXDaM0fTKb~mWLwrymB202ZSSYrz-~pHk5Q301W3Vz2oteNHzrLUy~9t50KLD4JrKfzyLWGK65REZyq-X10l71YPfz6rU9zvS4W4RdBr6Qd2HVnOgn1O1WewkJvIIVzsZ9tXGcC~HIe6JM-A__"
          alt=""
        />
      </div>
      <div className="lg:w-1/2 space-y-5 p-5">
        <HeadingText
          style="w-2/3"
          subheading="about us"
          heading="One Stop Solution For All Your HR Needs"
        />
        <p className="">
          It is a long established fact that a reader will be distracted by the
          readable content of <br /> a page when looking at its layout.
        </p>
        <div>
          <div className="flex font-semibold  gap-5 items-center">
            <button
              className={`${
                toggle === 'mission' &&
                'text-brandPrimary border-b-2 border-brandPrimary'
              } pb-1 px-2`}
              onClick={() => setToggle('mission')}
            >
              Our Mission
            </button>
            <button
              className={`${
                toggle === 'vission' &&
                'text-brandPrimary border-b-2 border-brandPrimary'
              } pb-1 px-2`}
              onClick={() => setToggle('vission')}
            >
              Our Vission
            </button>
          </div>
          <hr />
          {/* tab content here */}
          <div className="mt-5">
            {toggle === 'mission' ? (
              <TabContent
                firstPera="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                secondPera="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint."
              />
            ) : (
              <TabContent
                firstPera="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint."
                secondPera="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
              />
            )}
          </div>
        </div>
        <div>
          <button className="btn-primary">About us</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
