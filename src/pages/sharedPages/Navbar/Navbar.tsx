import { Link, NavLink } from 'react-router-dom';
import Container from '../../../components/Container';
import { useEffect, useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks/hooks';
import { logout } from '../../../Redux/features/auth/authSlice';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const user = useAppSelector(state => state.authTechTuend.user);
  const dispatch = useAppDispatch();

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex  h-[116px] justify-between items-center ">
          <Link to="/">
            {' '}
            <div className="w-fit flex items-center gap-2 text-2xl font-bold">
              <img
                className="w-[50px] h-[50px] rounded-full"
                src="/public/techTuendLogo.png"
                alt=""
              />
              TechTuned Services
            </div>
          </Link>
          <div
            className={`lg:static absolute transition-all duration-200 lg:bg-transparent bg-white w-full lg:w-fit ${
              isOpen ? 'left-0 top-24 p-5' : '-left-[100%] top-24 p-5'
            }`}
          >
            <ul
              className={`  lg:flex text-center  justify-center space-y-8 lg:space-y-0 lg:gap-5 active-links`}
            >
              <li className="hover:text-brandPrimary transition-all duration-200">
                <NavLink to="/"> Home</NavLink>
              </li>
              <li className="hover:text-brandPrimary transition-all duration-200">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="hover:text-brandPrimary transition-all duration-200">
                <NavLink to="/services">Services</NavLink>
              </li>
              <li className="hover:text-brandPrimary transition-all duration-200">
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li className="hover:text-brandPrimary transition-all duration-200">
                <NavLink to="/case-studies"> Case Studies</NavLink>
              </li>
              <li className="hover:text-brandPrimary transition-all duration-200">
                <NavLink to="/privacy-policy">Privacy Policy</NavLink>
              </li>
              <li className="hover:text-brandPrimary transition-all duration-200">
                <NavLink to="/terms-condition">Terms & Condition</NavLink>
              </li>
            </ul>
          </div>
          <div className="lg:hidden block">
            <button onClick={() => setIsOpen(prev => !prev)}>
              {!isOpen ? <FaBars /> : <FaXmark />}
            </button>
          </div>
          <div className="hidden lg:block">
            {user ? (
              <div className="relative">
                <div
                  onClick={() => setShowMenu(!showMenu)}
                  className="w-12 cursor-pointer h-12 flex justify-center items-center text-white rounded-full relative bg-brandPrimary"
                >
                  <p className="text-3xl font-bold">
                    {user?.name?.slice(0, 1)}
                  </p>
                </div>
                <div
                  className={`absolute ${
                    showMenu ? 'block' : 'hidden'
                  } -left-12 w-52 -bottom-[150px] shadow-lg rounded-md bg-white text-black p-5`}
                >
                  <div>
                    <h4 className="text-xl font-semibold">{user?.name}</h4>
                    <p>{user?.email}</p>
                  </div>
                  <button
                    onClick={() => dispatch(logout())}
                    className="btn-primary mt-3"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login">
                {' '}
                <button className="btn-primary ">Login</button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
