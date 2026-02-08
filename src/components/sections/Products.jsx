import useProducts from "../../hooks/useProducts";

const Products = () => {
  const { products, page, setPage, totalPages, loading } = useProducts();

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">

        {/* ===== HEADER ===== */}
        <div className="mx-auto max-w-[539px] text-center">
          <h2
            className="
              font-saira
              text-[40px]
              font-semibold
              leading-[55px]
              tracking-[0]
              text-gray-900
            "
          >
            All Product
          </h2>

          <p
            className="
              mt-4
              font-saira
              text-[16px]
              font-normal
              leading-[165%]
              tracking-[0]
              text-gray-600
            "
          >
            The products we provide only for you as our service are selected from the
            best products with number 1 quality in the world
          </p>
        </div>

        {/* ===== GRID ===== */}
        {loading ? (
          <p className="text-center mt-20">Loading...</p>
        ) : (
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((item) => (
              <div key={item.id} className="group">

                {/* ===== CARD (IMAGE ONLY) ===== */}
                <div className="relative border border-gray-200 rounded-2xl p-4 hover:shadow-md transition bg-white">
                  {/* IMAGE */}
                  <div className="aspect-square flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-contain max-h-full"
                    />
                  </div>

                  {/* PLUS BUTTON */}
                  <button
                    className="
                      absolute
                      bottom-4
                      right-4
                      w-9
                      h-9
                      rounded-full
                      bg-gray-100
                      flex
                      items-center
                      justify-center
                      text-xl
                      shadow-sm
                      hover:bg-gray-200
                      transition
                    "
                  >
                    +
                  </button>
                </div>

                {/* ===== INFO OUTSIDE CARD ===== */}
                <div className="mt-4 px-1">
                  <h4 className="font-saira font-semibold text-[18px] text-gray-900 truncate">
                    {item.title}
                  </h4>

                  <div className="mt-1 flex gap-2 items-center">
                    {item.price_after_discount ? (
                      <>
                        <span className="font-semibold text-gray-900">
                          ${item.price_after_discount}.00
                        </span>
                        <span className="text-sm line-through text-gray-400">
                          ${item.price}.00
                        </span>
                      </>
                    ) : (
                      <span className="font-semibold text-gray-900">
                        ${item.price}.00
                      </span>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* ===== PAGINATION ===== */}
        <div className="mt-16 flex justify-center items-center gap-4">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="text-xl disabled:opacity-30"
          >
            ←
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`w-2 h-2 rounded-full ${
                page === i + 1 ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="text-xl disabled:opacity-30"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
};

export default Products;
