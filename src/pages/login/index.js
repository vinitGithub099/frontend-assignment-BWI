import { userAPI } from "@/api/userAPI";
import { updateUserCredentials } from "@/store/features/Auth/slice";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import styles from "./index.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loginUser = async (userData) => {
    try {
      const response = await userAPI.loginUser(userData);
      if (response.token) {
        localStorage.setItem("token", response.token);
      }
      dispatch(updateUserCredentials(response));
      router.push("/");
    } catch (error) {
      console.error("Error login user: ", error);
      throw error;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.username.value;
    const password = e.target.password.value;
    if (!userName || !password) return;
    const formData = {
      username: userName,
      password: password,
    };
    loginUser(formData);
  };
  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <h3 className={styles.heading}>Login</h3>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="username"
            placeholder="@userName"
          />
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="********"
          />
          <button className={styles.submitButton} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
