import { useSelector } from "react-redux";

function Dashboard() {
  const cart = useSelector(s => s.cart);
  const user = useSelector(s => s.auth.user);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="page page-dashboard">
      <h2>داشبورد مدیریت</h2>

      <div className="dashboard-grid">
        <div className="card">
          <h3>کاربر فعلی</h3>
          <p>{user ? user : "وارد نشده‌اید"}</p>
        </div>

        <div className="card">
          <h3>آمار سبد خرید</h3>
          <p>تعداد آیتم‌ها: {totalItems}</p>
          <p>مجموع قیمت: {totalPrice.toFixed(2)} $</p>
        </div>

        <div className="card">
          <h3>تعداد محصولات</h3>
          <p>از تب محصولات مشاهده کنید</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
