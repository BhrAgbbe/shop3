import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../store/cartSlice";

function CartDrawer() {
  const cart = useSelector(s => s.cart);
  const dispatch = useDispatch();

  if (!cart.length) {
    return <p className="cart-empty">سبد خرید خالی است</p>;
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-drawer">
      <h3>سبد خرید</h3>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            <span>{item.title}</span>
            <span>
              {item.quantity} × {item.price} $
            </span>
            <button
              className="btn btn-sm"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              حذف
            </button>
          </li>
        ))}
      </ul>
      <div className="cart-footer">
        <strong>مجموع: {total.toFixed(2)} $</strong>
        <button
          className="btn btn-outline"
          onClick={() => dispatch(clearCart())}
        >
          خالی کردن سبد
        </button>
      </div>
    </div>
  );
}

export default CartDrawer;
