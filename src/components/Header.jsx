import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

function Header() {
  const user = useSelector(s => s.auth.user);
  const cart = useSelector(s => s.cart);
  const dispatch = useDispatch();

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">
          🛍 فروشگاه من
        </Link>
        <nav className="nav">
          <NavLink to="/" className="nav-link">
            محصولات
          </NavLink>
          <NavLink to="/categories" className="nav-link">
            دسته‌بندی‌ها
          </NavLink>
          <NavLink to="/dashboard" className="nav-link">
            داشبورد
          </NavLink>
        </nav>
      </div>

      <div className="header-right">
        <Link to="/cart" className="cart-badge">
          سبد خرید
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>

        {user ? (
          <div className="user-box">
            <span className="username">{user}</span>
            <button
              className="btn btn-outline"
              onClick={() => dispatch(logout())}
            >
              خروج
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn btn-primary">
            ورود
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
