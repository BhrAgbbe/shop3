import { useFormik } from "formik";
import { loginSchema } from "../validation/loginSchema";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: values => {
      dispatch(login(values.username));
      navigate("/dashboard");
    },
  });

  return (
    <div className="page page-auth">
      <form className="auth-form" onSubmit={formik.handleSubmit}>
        <h2>ورود به حساب</h2>

        <label>
          نام کاربری
          <input
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.username && formik.errors.username ? "input-error" : ""
            }
          />
        </label>
        {formik.touched.username && formik.errors.username && (
          <p className="error-text">{formik.errors.username}</p>
        )}

        <label>
          رمز عبور
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.password && formik.errors.password ? "input-error" : ""
            }
          />
        </label>
        {formik.touched.password && formik.errors.password && (
          <p className="error-text">{formik.errors.password}</p>
        )}

        <button type="submit" className="btn btn-primary full-width">
          ورود
        </button>
      </form>
    </div>
  );
}

export default Login;
