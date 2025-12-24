import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import ProductCard from "../components/ProductCard";

function Home() {
  const dispatch = useDispatch();
  const { list, status, error } = useSelector(s => s.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") return <p className="state-text">در حال بارگذاری...</p>;
  if (status === "failed") return <p className="state-text error">{error}</p>;

  return (
    <div className="page page-home">
      <h2 className="page-title">لیست محصولات</h2>
      <div className="grid">
        {list.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Home;
