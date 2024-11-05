import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 640 && setIsOpen(false)
    );
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full px-8 py-1">
      <nav className="relative mx-auto w-full max-w-screen-xl flex items-center justify-between text-sm">
        <div>
          <Link to="/">
            <img className="w-[160px] xm:w-full" src="/logo1.svg" alt="logo" />
          </Link>
        </div>
        <ul className="hidden md:flex space-x-10">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.link}
                className={`relative group transition duration-300 pb-1 ${
                  location.pathname === item.link ? "font-bold" : ""
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <Button name="Login" background="black" />
        </div>
        <div
          className="block md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="#000000"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </div>
        {isOpen && (
          <div
            ref={dropdownRef}
            className="absolute top-16 w-full bg-white text-black xm:mt-4 p-4 rounded-lg z-10 shadow-2xl"
          >
            <ul className="flex flex-col pb-2">
              {navLinks.map((item) => (
                <li key={item.name} className="w-full p-2 flex justify-center">
                  <Link
                    to={item.link}
                    className={`mx-auto ${
                      location.pathname === item.link ? "font-bold" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="">
              <button
                className={`relative group w-full transition duration-300 p-2 bg-black text-white rounded-xl`}
              >
                Login
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
