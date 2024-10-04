import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import Container from '../../../components/Container';

const Footer = () => {
  return (
    <div className="bg-brandPrimary">
      <Container>
        <footer className="footer  text-white  p-10">
          <aside className="w-1/2 space-y-3">
            <h3 className="text-2xl font-semibold">TechTuned Services</h3>
            <p>
              We are recruitment agency that help you find more talents to
              develop business
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
            <div className="flex gap-2">
              <button className="p-5 rounded-full border">
                <FaFacebook />
              </button>
              <button className="p-5 rounded-full border">
                <FaLinkedinIn />
              </button>
              <button className="p-5 rounded-full border">
                <FaTwitter />
              </button>
            </div>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
