import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <div className="product-thumb">
        <img src={product.image} alt={product.title} />
      </div>
      <h4 className="product-title">{product.title}</h4>
      <p className="product-price">{product.price} $</p>

      <div className="product-actions">
        <Link to={`/product/${product.id}`} className="btn btn-outline">
          جزئیات
        </Link>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(addToCart(product))}
        >
          افزودن به سبد
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
