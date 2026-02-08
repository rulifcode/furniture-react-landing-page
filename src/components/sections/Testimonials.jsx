import { useState } from "react";
import { useTestimonials } from "../../hooks/useTestimonials";
import Loader from "../ui/Loader";
import roomImage from "../../assets/649dc57e7e45630bf89f9157ff262817a8c5adcb.jpg";

const Testimonials = () => {
  const { testimonials, loading, error } = useTestimonials();
  const [index, setIndex] = useState(0);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!testimonials?.length) return null;

  const current = testimonials[index];

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto lg:h-[480px] lg:px-[100px] px-4 py-8 lg:py-0 flex items-center">
        <div className="grid lg:grid-cols-2 grid-cols-1 w-full items-center lg:gap-0 gap-6">

          {/* LEFT CONTENT */}
          <div>
            {/* TITLE */}
            <h2
              className="
                font-saira
                font-semibold
                lg:text-[40px]
                text-[24px]
                leading-[130%]
                capitalize
                max-w-[635px]
                lg:mb-[36px]
                mb-6
              "
            >
              What people are saying about us
            </h2>

            {/* PROFILE */}
            <div className="flex items-center gap-[12px] lg:mb-[28px] mb-4">
              <img
                src={current.image}
                alt={current.name}
                className="lg:w-[80px] lg:h-[80px] w-[50px] h-[50px] rounded-full object-cover"
              />

              <div className="lg:w-[210px] lg:h-[46px]">
                <p
                  className="
                    font-saira
                    font-semibold
                    lg:text-[20px]
                    text-[16px]
                    leading-[100%]
                    lg:mb-[6px]
                    mb-1
                  "
                >
                  {current.name}
                </p>
                <p
                  className="
                    font-saira
                    font-normal
                    lg:text-[14px]
                    text-[12px]
                    leading-[100%]
                    opacity-50
                  "
                >
                  {current.title}
                </p>
              </div>
            </div>

            {/* MESSAGE */}
            <p
              className="
                font-saira
                font-normal
                lg:text-[20px]
                text-[14px]
                leading-[170%]
                max-w-[570px]
                lg:mb-[40px]
                mb-6
              "
            >
              "{current.message}"
            </p>

            {/* IMAGE - MOBILE ONLY */}
            <div className="lg:hidden mb-6">
              <img
                src={roomImage}
                alt="testimonial visual"
                className="
                  w-full
                  h-auto
                  object-cover
                  rounded-[6px]
                "
              />
            </div>

            {/* NAVIGATION */}
            <div className="flex items-center justify-center lg:justify-start gap-[24px]">
              {/* PREV */}
              <button
                onClick={() =>
                  setIndex(index === 0 ? testimonials.length - 1 : index - 1)
                }
                className="
                  w-[36px]
                  h-[36px]
                  rounded-full
                  flex
                  items-center
                  justify-center
                  border
                  border-[#E6E8EC]
                  hover:border-gray-400
                  transition-colors
                "
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.6804 8.64014L3.60042 8.64014" stroke="#23262F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.64038 13.6799L3.60038 8.63993L8.64038 3.59993" stroke="#23262F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* NEXT */}
              <button
                onClick={() =>
                  setIndex(index === testimonials.length - 1 ? 0 : index + 1)
                }
                className="
                  w-[36px]
                  h-[36px]
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-[#286F6C]
                  hover:bg-[#1f5754]
                  transition-colors
                  shadow-lg
                "
                style={{
                  filter: 'drop-shadow(0px 4px 10px rgba(15, 27, 51, 0.05))'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.31958 9.35986H14.3996" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.35962 4.32007L14.3996 9.36007L9.35962 14.4001" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE - DESKTOP ONLY */}
          <div className="lg:flex hidden justify-end">
            <img
              src={roomImage}
              alt="testimonial visual"
              className="
                w-[562px]
                h-[340px]
                object-cover
                rounded-[6px]
              "
            />
          </div>

        </div>
      </div>
    </section>

    
  );
};

export default Testimonials;