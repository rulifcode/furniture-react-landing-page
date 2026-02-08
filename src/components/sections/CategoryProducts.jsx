import { useEffect, useState } from "react";

const CategoryProducts = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const res = await fetch(
                    "https://lumoshive-api-furniture.vercel.app/api/category"
                );
                const data = await res.json();
                setCategories(data.category);
            } catch (error) {
                console.error("Error fetching category: - CategoryProducts.jsx:16", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategory();
    }, []);

    return (
        <section className="w-full bg-white py-20">
            <div className="w-full max-w-[1240px] mx-auto px-6">
                {/* HEADER */}
                <div className="mb-12 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-0">
                    {/* Left side - Title & Description */}
                    <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                        <h2 className="font-saira text-[24px] lg:text-[32px] font-semibold leading-[130%] text-gray-900 lg:w-[180px]">
                            New In <br /> Store Now
                        </h2>

                        <p className="font-saira text-[14px] lg:text-[16px] leading-[170%] tracking-[1%] text-gray-600 lg:w-[280px] lg:pt-1">
                            Get the latest items immediately with promo prices
                        </p>
                    </div>

                    {/* Check All - Desktop only */}

                    <a
                        href="#"
                        className="hidden lg:flex font-saira text-[16px] font-medium text-gray-900 items-center gap-2 hover:underline lg:pt-1"
                    >
                        Check All
                        <span className="text-lg">→</span>
                    </a>

                </div>

                {/* SLIDER */}
                {loading ? (
                    <p className="font-saira text-gray-500">Loading...</p>
                ) : (
                    <div className="relative -mx-6 lg:mx-0">
                        {/* Mobile: scroll from edge, Desktop: normal grid */}
                        <div className="
                            flex gap-4 overflow-x-auto scrollbar-hide pl-6 pr-6
                            lg:grid lg:grid-cols-4 lg:gap-6 lg:pl-0 lg:pr-0
                        ">
                            {categories.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative min-w-[160px] h-[240px] lg:min-w-0 lg:h-[360px] rounded-xl overflow-hidden group flex-shrink-0"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* OVERLAY */}
                                    <div className="absolute inset-0 bg-black/20" />

                                    {/* TITLE */}
                                    <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 font-saira text-[14px] lg:text-[20px] font-semibold text-white text-center">
                                        {item.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CategoryProducts;