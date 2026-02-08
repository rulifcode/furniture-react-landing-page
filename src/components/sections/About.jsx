import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import aboutImage from "../../assets/About-img.jpg";

/* CHECK ICON FROM FIGMA */
const CheckIcon = ({ className = "" }) => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 12.4444C0 5.57157 5.57157 0 12.4444 0C19.3173 0 24.8889 5.57157 24.8889 12.4444C24.8889 19.3173 19.3173 24.8889 12.4444 24.8889C5.57157 24.8889 0 19.3173 0 12.4444ZM12.0833 17.0614L18.3055 10.8391C18.7934 10.3512 18.7934 9.56001 18.3055 9.07204L11.1997 14.4231L8.34992 11.5609C7.862 11.073 7.071 11.073 6.583 11.561C6.095 12.049 6.095 12.84 6.583 13.328L10.3161 17.0614C10.5498 17.297 10.8679 17.4295 11.1997 17.4295C11.5315 17.4295 11.8496 17.297 12.0833 17.0614Z"
      fill="#23262F"
    />
  </svg>
);

CheckIcon.propTypes = {
  className: PropTypes.string,
};

const About = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "https://lumoshive-api-furniture.vercel.app/api/category"
        );
        const data = await res.json();
        setCategories(data.category);
      } catch (error) {
        console.error("Error fetching categories: - About.jsx:40", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section id="about" className="w-full bg-white">
      {/* ================= ABOUT CONTENT ================= */}
      <div className="mx-auto max-w-7xl px-4 md:px-10 lg:px-20 pt-20 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* CONTENT */}
        <div className="order-1 lg:order-2">
          <h2 className="max-w-[508px] font-saira text-[40px] font-semibold leading-[130%] capitalize text-gray-900">
            We Create Your Home <br /> More Aesthetic
          </h2>

          <p className="mt-6 max-w-[587px] font-saira text-[20px] leading-[170%] text-gray-600">
            Furnitre power is a software as services for multiperpose business
            management system,
          </p>

          <div className="mt-10 max-w-[579px] space-y-8">
            <div className="flex gap-6">
              <CheckIcon className="mt-1 shrink-0" />
              <div className="space-y-2">
                <h4 className="font-saira text-[20px] font-semibold leading-[28px] text-gray-900">
                  Valuation Services
                </h4>
                <p className="max-w-[531px] font-saira text-[16px] leading-[28px] text-gray-600">
                  Sometimes features require a short description.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <CheckIcon className="mt-1 shrink-0" />
              <div className="space-y-2">
                <h4 className="font-saira text-[20px] font-semibold leading-[28px] text-gray-900">
                  Development of Furniture Models
                </h4>
                <p className="max-w-[531px] font-saira text-[16px] leading-[28px] text-gray-600">
                  Sometimes features require a short description.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center lg:justify-start order-2 lg:order-1">
          <img
            src={aboutImage}
            alt="Furniture interior"
            loading="lazy"
            className="w-full max-w-[554px] aspect-[554/443] object-cover rounded-xl"
          />
        </div>
      </div>

      {/* ================= CATEGORY SECTION ================= */}
      <section className="w-full bg-white pb-28 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr]">
          {/* LEFT CONTENT */}
          <div className="pl-4 md:pl-10 lg:pl-[100px] pt-[100px]">
            <h3 className="font-saira text-[40px] font-semibold leading-[130%] capitalize text-gray-900 max-w-[219px]">
              New In <br /> Store Now
            </h3>

            <p className="mt-6 max-w-[245px] font-saira text-[16px] leading-[170%] tracking-[1%] text-gray-600">
              Get the latest items immediately with promo prices
            </p>

            <button
              type="button"
              className="mt-8 inline-flex items-center gap-[10px] font-saira text-[16px] font-medium text-gray-900"
            >
              Check All →
            </button>
          </div>

          {/* RIGHT SLIDER */}
          <div className="pt-[70px] overflow-x-auto no-scrollbar">
            <div className="flex gap-6 pr-10 min-w-max">
              {categories.map((item) => (
                <div
                  key={item.id || item.title}
                  className="relative w-[265px] h-[400px] rounded-[5px] overflow-hidden shrink-0"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                  <h4 className="absolute bottom-4 left-1/2 -translate-x-1/2 font-saira text-[20px] font-semibold text-white text-center">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
