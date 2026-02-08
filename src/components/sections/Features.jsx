import featureImage from "../../assets/f60bac0a80587cae68f9d90a8b1c2c3387d3f2eb.png";

const Features = () => {
  return (
    <section id="features" className="w-full bg-white py-24">
      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          md:px-10
          lg:px-[100px]
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-20
          items-center
        "
      >
        {/* ================= LEFT CONTENT ================= */}
        <div>
          <h3
            className="
              max-w-[558px]
              font-saira
              text-[40px]
              font-semibold
              leading-[130%]
              capitalize
              text-gray-900
            "
          >
            The Best Furniture Manufacturer
            <br />
            of your choice
          </h3>

          <p
            className="
              mt-6
              max-w-[570px]
              font-saira
              text-[20px]
              font-normal
              leading-[170%]
              text-gray-600
            "
          >
            Furnitre power is a software as services for multiperpose
            business management system, expecially for them who are
            running two or more business exploree the future Furnitre
            power is a software as services
          </p>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={featureImage}
            alt="Furniture Kitchen"
            loading="lazy"
            className="
              w-[598px]
              h-[399px]
              object-cover
              rounded-xl
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
