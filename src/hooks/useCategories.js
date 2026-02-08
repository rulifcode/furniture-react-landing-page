import { useEffect, useState } from "react";
import { getCategories } from "../api/categoryService";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return { categories, loading };
};

export default useCategories;
