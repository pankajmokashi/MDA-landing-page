import Button from "../components/Button";
import Card from "../components/Card";
import FadeInSection from "../components/FadeInSection";

const secretaryServices = [
  {
    title: "Corporate Governance & Compliance",
    image: "/img1.png",
    desc: [
      "Compliance with Companies Act & regulations",
      "Maintaining statutory registers & records",
      "Board & Meeting Facilitation",
    ],
  },
  {
    title: "Corporate Restructuring",
    image: "/img2.png",
    desc: [
      "Mergers & Acquisitions (M&A) compliance",
      "Buybacks, demergers, and spin-offs",
      "Corporate reorganization & liquidation",
    ],
  },
  {
    title: "Company Formation & Registration",
    image: "/img3.png",
    desc: [
      "Incorporation of Private, Public, Section 8 companies, and LLPs",
      "Drafting MOA & AOA",
      "License procurement & director registration",
    ],
  },
  {
    title: "Secretarial Audit & Due Diligence",
    image: "/img4.png",
    desc: [
      "Compliance audits & secretarial checks",
      "M&A due diligence",
      "Filing and regulatory compliance",
    ],
  },
  {
    title: "Shareholder Services",
    image: "/img5.png",
    desc: [
      "Share transfers, allotments & certificates",
      "Managing dividends & shareholder disputes",
    ],
  },
  {
    title: "Regulatory Compliance & Liaison",
    image: "/img1.png",
    desc: [
      "SEBI, FEMA, RBI reporting",
      "Industrial licenses & government liaison",
    ],
  },
  {
    title: "Corporate Legal Advisory",
    image: "/img7.png",
    desc: [
      "Drafting contracts & legal documents",
      "Legal opinions on company law",
      "Director duties & compliance advisory",
    ],
  },
  {
    title: "Corporate Finance & Taxation",
    image: "/img8.png",
    desc: [
      "Tax planning & CSR compliance",
      "ESOP management",
      "Public issues & private placements",
    ],
  },
];

const advisoryServices = [
  {
    title: "Fundraising",
    image: "/img9.png",
    desc: [
      "Assisting businesses in securing capital from public and private markets.",
      "-Includes IPOs, debt issuance, and private equity.",
    ],
  },
  {
    title: "M&A Advisory",
    image: "/img10.png",
    desc: [
      "Strategic guidance during mergers and acquisitions.",
      "- Services include target identification, valuation, and negotiation.",
    ],
  },
  {
    title: "Corporate Finance",
    image: "/img11.png",
    desc: [
      "Support through mergers, demergers, buybacks, and financial restructuring.",
      "Guidance on investment strategies for optimal business growth.",
    ],
  },
  {
    title: "Restructuring & Strategic Advisory",
    image: "/img1.png",
    desc: [
      "Support through mergers, demergers, buybacks, and financial restructuring.",
      "Market trend analysis and competitor insights.",
      "Market trend analysis and competitor insights.",
      "Advising on joint ventures, exit strategies, and long-term growth planning.",
    ],
  },
];

function Services() {
  return (
    <div className="w-full">
      <FadeInSection>
        <div className="w-full px-8">
          <div className="mx-auto max-w-screen-xl py-12 flex flex-col md:flex-row-reverse items-center justify-between">
            <div className="w-full mb-4 xm:mb-8 md:mb-0 md:w-1/2 md:pl-12">
              <img className="mx-auto" src="/h-img1.png" alt="img-1" />
            </div>
            <div className="w-full sm:text-center md:text-left md:w-1/2 md:pr-4">
              <div className="text-3xl xm:text-5xl font-bold text-[#282828] mb-2 xm:mb-4">
                Service Details
              </div>
              <p className="text-[#656D78] text-xs xm:text-sm mb-4 xm:mb-8">
                At <span className="text-black">More Daliya & Associates</span>,
                we offer expert corporate and financial advisory services,
                ensuring your business stays compliant while driving growth.
                With a focus on corporate governance and capital markets, we
                help businesses thrive with confidence.
              </p>
              <div>
                <Button name="Get Started" background="black" />
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="bg-[#EDFBF4]">
          <div className="w-full px-8">
            <div className="mx-auto max-w-screen-xl py-16">
              <div
                id="Company-Secretary-Services"
                className="text-center md:text-left text-3xl xm:text-5xl font-bold text-[#282828] mb-8 xm:mb-16"
              >
                Company Secretary Services
              </div>
              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {secretaryServices.map((item, ind) => (
                  <Card key={ind} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="bg-[#F5F4FE] border-t">
          <div className="w-full px-8">
            <div className="mx-auto max-w-screen-xl py-16">
              <div
                id="investment-banking-capital-advisory-services"
                className="text-center md:text-left text-3xl xm:text-5xl font-bold text-[#282828] mb-8 xm:mb-16"
              >
                Investment Banking & Capital Advisory Services
              </div>
              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {advisoryServices.map((item, ind) => (
                  <Card key={ind} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="relative">
          <img className="w-full" src="/f-img1.png" alt="footer-img" />
          <div className="w-full h-full px-16 absolute top-0 text-white">
            <div className="h-full flex flex-col items-center justify-center gap-4 sm:gap-8">
              <p className="text-center text-xl xm:text-3xl sm:text-5xl md:text-7xl">
                See what we can do for you firm
              </p>
              <div className="font-medium text-[10px] sm:text-sm">
                <Button name="Schedule a Expert Call" background="white" />
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default Services;
