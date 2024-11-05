import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

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
  const location = useLocation();

  return (
    <header className="w-full px-8 py-1">
      <nav className="mx-auto w-full max-w-screen-xl flex items-center justify-between text-sm">
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
        <div className="block md:hidden cursor-pointer">
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="#000000"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </div>
      </nav>
    </header>
  );
}

export default Header;
