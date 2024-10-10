import { FaFacebook, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
import Container from '../../../components/Container';
import { Link } from 'react-router-dom';
import { IoMailOpenOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <div className="bg-brandPrimary mt-[116px]">
      <Container>
        <div className="py-12 text-white lg:flex space-y-10 lg:space-y-0 justify-between items-center gap-10">
          <div className="flex items-center gap-2">
            <IoMailOpenOutline className="text-5xl" />
            <p>
              Email: <br />
              <Link
                className="cursor-pointer hover:text-orange-300 transition-all"
                to="mailto:seoideaplanet@gmail.com"
              >
                seoideaplanet@gmail.com
              </Link>
            </p>
          </div>{' '}
          <div className="join lg:w-1/2 ">
            <input
              className="input text-black rounded-full join-item w-10/12"
              placeholder="Email"
            />
            <button className="btn join-item bg-black text-white rounded-full z-10">
              Subscribe
            </button>
          </div>
        </div>
        <hr />
        <footer className="lg:flex  space-y-5 lg:space-y-0 justify-between gap-10 py-12 text-white  ">
          <aside className="lg:w-1/3  space-y-3">
            <div className="flex items-center gap-2">
              {' '}
              <img
                className="w-[50px] h-[50px] rounded-full"
                src="/public/techTuendLogo.png"
                alt=""
              />
              <h4 className="text-xl font-semibold font-headingFont">
                SEO IDEA PLANET <br /> SERVICE
              </h4>
            </div>
            <p>26 James Street, Southampton, United Kingdom, SO14 1PJ</p>

            <div className="flex gap-2">
              <Link
                target="_blank"
                to="https://www.facebook.com/profile.php?id=61566783665410"
                className="p-5 rounded-full border"
              >
                <FaFacebook />
              </Link>
              <Link
                target="_blank"
                to="https://www.linkedin.com/in/seoidea-planet-service-782298332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="p-5 rounded-full border"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                target="_blank"
                to="https://youtube.com/@seoideaplanetservice?si=CVq5aoylA-F97oC-"
                className="p-5 rounded-full border"
              >
                <FaYoutube />
              </Link>
            </div>
          </aside>

          <nav className="">
            <h6 className="footer-title text-lg font-bold mb-3">Company</h6>
            <div className="flex flex-col gap-1">
              {' '}
              <Link to="/about" className="link link-hover  hover:text-white">
                About Us
              </Link>
              <Link
                to="/case-studies"
                className="link link-hover  hover:text-white"
              >
                Our Story
              </Link>
              <Link
                to="/services"
                className="link link-hover  hover:text-white"
              >
                Our Work
              </Link>
            </div>
          </nav>

          {/* Resources */}
          <nav>
            <h6 className="footer-title text-lg font-bold mb-3">Resources</h6>
            <div className="flex flex-col gap-1">
              {' '}
              <Link to="/blog" className="link link-hover  hover:text-white">
                Blog
              </Link>
              <Link
                to="/contact-us"
                className="link link-hover  hover:text-white"
              >
                Contact Us
              </Link>
              <Link
                to="/why-we-are"
                className="link link-hover  hover:text-white"
              >
                Why SEO IDEA PLANET SERVICE
              </Link>
            </div>
          </nav>

          {/* Support */}
          <nav>
            <h6 className="footer-title text-lg font-bold mb-3">Support</h6>
            <div className="flex flex-col gap-1">
              {' '}
              <Link to="/support" className="link link-hover hover:text-white">
                Support
              </Link>
              <Link
                to="/terms-condition"
                className="link link-hover  hover:text-white"
              >
                Terms
              </Link>
              <Link
                to="/privacy-policy"
                className="link link-hover  hover:text-white"
              >
                Privacy Policy
              </Link>
            </div>
          </nav>
          <nav>
            <h6 className="footer-title text-lg font-bold mb-3">Payments</h6>
            <div className="flex items-center gap-2">
              <img
                className="w-12 h-12  rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbOsJUPXMDaZXyJA2PxFYv2gEVkGofB0fsyQ&s"
                alt=""
              />
              <img
                className="w-12 h-12  rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToJHTQcSmS0EhhMlMbQhhYhhY2b8Xy-QBkkA&s"
                alt=""
              />
              <img
                className="w-12 h-12  rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdoGGjkkP5qb9H1KKyAmgYB1rMdwxANNDnRjyuOCldFQ36MfQo5cR4SIj2ZMjl19wBPZk&usqp=CAU"
                alt=""
              />
              <img
                className="w-12 h-12  rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVzKAavG-adXiPOhhYj2Er2fI32SRF_-kXzg&s"
                alt=""
              />
            </div>
          </nav>
        </footer>
      </Container>
      <div className="p-5 bg-orange-500 text-white text-center">
        © Copyright 2024 SEO IDEA PLANET SERVICE. - All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
