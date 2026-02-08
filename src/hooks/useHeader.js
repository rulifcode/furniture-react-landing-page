import { useEffect, useState } from "react";
import { getHeader } from "../api/headerService";

export default function useHeader() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeader = async () => {
      try {
        const result = await getHeader();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHeader();
  }, []);

  return { data, loading, error };
}
