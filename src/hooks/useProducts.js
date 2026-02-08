import { useEffect, useState } from "react";
import { getProducts } from "../api/productService";

const useProducts = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts(page, 8)
      .then((res) => {
        setData(res.products);
        setTotalPages(res.totalPages);
      })
      .finally(() => setLoading(false));
  }, [page]);

  return {
    products: data,
    page,
    setPage,
    totalPages,
    loading,
  };
};

export default useProducts;
