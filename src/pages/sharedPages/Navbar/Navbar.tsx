import { Link } from 'react-router-dom';
import Container from '../../../components/Container';
import { useEffect, useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
          <div
            className={`lg:static absolute transition-all duration-200 bg-white w-full lg:w-fit ${
              isOpen ? 'left-0 top-24' : '-left-[100%] top-24'
            }`}
          >
            <ul className={`  lg:flex text-center  justify-center gap-5`}>
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
          <div className="lg:hidden block">
            <button onClick={() => setIsOpen(prev => !prev)}>
              {!isOpen ? <FaBars /> : <FaXmark />}
            </button>
          </div>
          <div className="hidden lg:block">
            <button className="btn-primary ">Get a Quote</button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
