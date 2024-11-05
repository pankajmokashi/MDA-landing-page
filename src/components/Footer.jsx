import { Link } from "react-router-dom";
import FooterLink from "./FooterLink";

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Companies Act", link: "/services#Company-Secretary-Services" },
      { name: "Securities Law", link: "/services#Company-Secretary-Services" },
      {
        name: "Financial Services",
        link: "/services#Company-Secretary-Services",
      },
      {
        name: "Investment Banking",
        link: "/services#investment-banking-capital-advisory-services",
      },
      {
        name: "Risk Management",
        link: "/services#investment-banking-capital-advisory-services",
      },
      {
        name: "Audit",
        link: "/services#investment-banking-capital-advisory-services",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "About Us", link: "/about" },
      { name: "Blogs", link: "/blogs" },
      { name: "Contact Us", link: "#" },
    ],
  },
  {
    title: "Contact information",
    links: [
      { name: "+91 299366311", link: "#" },
      { name: "+91 299366311", link: "#" },
      { name: "infor@moredaliya.com", link: "#" },
    ],
  },
];

function Footer() {
  return (
    <footer className="w-full">
      <div className="px-8">
        <div className="mx-auto w-full max-w-screen-xl ">
          <div className="py-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
            <div className="flex flex-col items-center md:block md:col-span-2">
              <Link to="/">
                <img className="w-40" src="/logo1.svg" alt="logo" />
              </Link>
              <p className="text-center text-sm font-medium mt-2 mb-6 max-w-80 md:text-left">
                712, Lokmat Bhawan,A WING, Ramdaspeth, Nagpur, Maharashtra
                440010
              </p>
              <div className="flex gap-5 items-center">
                <a href="#">
                  <img
                    className="mt-0.5 w-6 h-6"
                    src="/instagram.svg"
                    alt="instgram"
                  />
                </a>
                <a href="#">
                  <img className="w-7 h-7" src="/youtube.svg" alt="youtube" />
                </a>
                <a href="#">
                  <img className="w-6 h-6" src="/linkedin.svg" alt="linkedin" />
                </a>
                <a href="#">
                  <img className="w-6 h-6" src="/twitter.svg" alt="twitter" />
                </a>
              </div>
            </div>
            {footerLinks.map((item, ind) => (
              <FooterLink key={ind} data={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-200 pt-2 pb-8">
        <div className="px-8 text-xs">
          <div className="mx-auto w-full max-w-screen-xl flex gap-4 flex-col items-center justify-between sm:flex-row">
            <p>© More Daliya Inc. All rights reserved.</p>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-6 text-center">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
