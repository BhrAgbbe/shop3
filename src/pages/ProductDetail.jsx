import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");
  const dispatch = useDispatch();

  useEffect(() => {
    setStatus("loading");
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setStatus("succeeded");
      })
      .catch(() => setStatus("failed"));
  }, [id]);

  if (status === "loading") return <p className="state-text">در حال بارگذاری...</p>;
  if (status === "failed") return <p className="state-text error">خطا در بارگذاری محصول</p>;
  if (!product) return null;

  return (
    <div className="page page-detail">
      <div className="detail">
        <div className="detail-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="detail-info">
          <h2>{product.title}</h2>
          <p className="detail-desc">{product.description}</p>
          <strong className="detail-price">{product.price} $</strong>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(addToCart(product))}
          >
            افزودن به سبد
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
