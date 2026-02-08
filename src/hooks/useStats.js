import { useEffect, useState } from "react";
import { getStats } from "../api/statsService";

export default function useStats() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await getStats();

        const mappedData = [
          {
            value: res.experience,
            label: "Year\nExperience",
          },
          {
            value: res.country,
            label: "Opened in\nthe country",
          },
          {
            value: res.sold,
            label: "Furniture\nsold",
          },
          {
            value: res.variant,
            label: "Variant\nFurniture",
          },
        ];

        setData(mappedData);
      } catch (error) {
        console.error("Failed to fetch stats - useStats.js:34", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { data, isLoading };
}
