import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
const sections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
}
const Footer = ({
  logo = {
    url: "/",
    src: "/images/logo_400.png",
    alt: "logo",
    title: "LittleMonster.com",
  },
}: Footer7Props) => {
  return (
    <section className="py-32 pb-8 relative bg-gradient-to-b from-background to-muted ">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 origin-bottom blur-[2px] opacity-70 overflow-hidden scale-400 user-select-none pointer-events-none  flex justify-center items-end">
          <svg
            width="100%"
            height="148"
            // className="user-select-none pointer-events-none"
            viewBox="0 0 440 148"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient
                cx="14.959%"
                cy="47.774%"
                fx="14.959%"
                fy="47.774%"
                r="131.603%"
                gradientTransform="matrix(.68793 .03676 -.01639 .64716 .055 .163)"
                id="b"
              >
                <stop stopColor="#ffbb00" offset="0%" />
                <stop stopColor="#ffffff" offset="100%" />
              </radialGradient>
              <filter
                x="-34.8%"
                y="-50.5%"
                width="169.6%"
                height="201.1%"
                filterUnits="objectBoundingBox"
                id="a"
              >
                <feGaussianBlur stdDeviation="32" in="SourceGraphic" />
              </filter>
            </defs>
            <g fill="none" fillRule="evenodd">
              <path d="M0 0h440v148H0z" />
              <path
                d="M0 95c0 52.467 33.7 95 75.273 95h125.454C242.3 190 276 147.467 276 95S242.3 0 200.727 0H75.273C33.7 0 0 42.533 0 95"
                filter="url(#a)"
                transform="translate(82 87)"
                fill="url(#b)"
                fillRule="nonzero"
                opacity=".746"
              />
            </g>
          </svg>
        </div>
      <div className="container relative   ">
       
        <footer>
          <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
            <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
              {/* Logo */}
              <div className="flex items-center gap-2 lg:justify-start">
                <a href="https://shadcnblocks.com">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-8 object-contain "
                    style={{ filter: "contrast(999%) grayscale(100%)" }}
                    width={74}
                    height={32}
                  />
                </a>
                {/* <h2 className="text-xl font-semibold">{logo.title}</h2> */}
              </div>
              <p className="text-sm text-muted-foreground  ">
                Et occaecat et sint deserunt mollit deserunt proident.
                Consectetur minim irure irure sint aliqua labore anim in minim.
              </p>
              <ul className="flex items-center space-x-6 text-muted-foreground">
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaInstagram className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaFacebook className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaTwitter className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaLinkedin className="size-6" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-6 lg:gap-20">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-6 font-bold">{section.title}</h3>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
            <p>© 2025 AhaYue. All rights reserved.</p>
            <ul className="flex justify-center gap-4 lg:justify-start">
              <li className="hover:text-primary">
                <a href="#"> Terms and Conditions</a>
              </li>
              <li className="hover:text-primary">
                <a href="#"> Privacy Policy</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };
