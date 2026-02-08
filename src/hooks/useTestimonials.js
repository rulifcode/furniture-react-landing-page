import { useEffect, useState } from "react";
import { getTestimonials } from "../api/testimonialServices";

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await getTestimonials(1, 3);

        // 🔥 guard biar ga crash
        setTestimonials(data?.testimonials || []);
      } catch (err) {
        console.error(err);
        setError("Failed to load testimonials");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return { testimonials, loading, error };
};
