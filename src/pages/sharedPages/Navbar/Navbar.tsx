import { Link } from 'react-router-dom';
import Container from '../../../components/Container';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Change '50' to your desired scroll position
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex  h-[116px] justify-between items-center ">
          <div className="w-fit text-2xl font-bold">TechTuned Services</div>
          <div>
            <ul className="flex  justify-center gap-5">
              <li className="hover:text-brandPrimary transition-all duration-200">
                <Link to="/"> Home</Link>
              </li>
              <li className="hover:text-brandPrimary transition-all duration-200">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:text-brandPrimary transition-all duration-200">
                <Link to="/services">Services</Link>
              </li>
              <li className="hover:text-brandPrimary transition-all duration-200">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="hover:text-brandPrimary transition-all duration-200">
                <Link to="/case-studies"> Case Studies</Link>
              </li>
              <li className="hover:text-brandPrimary transition-all duration-200">
                <Link to="/page">Page</Link>
              </li>
            </ul>
          </div>
          <div>
            <button className="btn-primary">Get a Quote</button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
