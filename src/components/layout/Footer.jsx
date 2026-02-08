import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#1F232E] text-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[100px] pt-12 sm:pt-16 lg:pt-[80px] pb-8 sm:pb-10 lg:pb-[40px]">

        {/* Top */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-0">
          <h2 className="font-saira text-[20px] sm:text-[24px] font-semibold">
            FurniShop
          </h2>

          <div className="flex gap-3 sm:gap-4">
            {[
              FaInstagram,
              FaFacebookF,
              FaTwitter,
              FaGithub,
              FaDribbble,
            ].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2A2F3D] flex items-center justify-center cursor-pointer hover:bg-[#3A4052] transition"
              >
                <Icon size={14} className="sm:w-4 sm:h-4" />
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/20 my-8 sm:my-10 lg:my-[40px]" />

        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 text-[14px]">

          <FooterColumn
            title="Our Products"
            items={[
              "The Support Suite",
              "The Sales Suite",
              "Support",
              "Guide",
            ]}
          />

          <FooterColumn
            title="Top Features"
            items={[
              "Ticketing System",
              "Knowledge Base",
              "Community Forums",
              "Help Desk Software",
            ]}
          />

          <FooterColumn
            title="Resources"
            items={[
              "Product Support",
              "Request Demo",
              "Library",
              "Peoplepower Blog",
            ]}
          />

          <FooterColumn
            title="Company"
            items={[
              "About Us",
              "Press",
              "Investors",
              "Events",
            ]}
          />

          <FooterColumn
            title="Favourite Things"
            items={[
              "For Enterprise",
              "For Startups",
              "For Benchmark",
              "For Small Business",
            ]}
          />

        </div>

        {/* Bottom */}
        <p className="text-center text-white/60 text-[12px] sm:text-[14px] mt-10 sm:mt-12 lg:mt-[60px]">
          © Rulif Fadria Nirwansyah 2026 - All Rights Reserved
        </p>

      </div>
    </footer>
  );
};

const FooterColumn = ({ title, items }) => {
  return (
    <div>
      <h4 className="font-semibold mb-4 text-[15px] sm:text-[16px]">{title}</h4>
      <ul className="space-y-3 text-white/70">
        {items.map((item, i) => (
          <li
            key={i}
            className="hover:text-white cursor-pointer transition text-[13px] sm:text-[14px]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;