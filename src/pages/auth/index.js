import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const isAuth = (Component) => {
  return function IsAuth(props) {
    const router = useRouter();
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
      if (!user || !user.token) {
        router.push("/login");
      }
    }, []);

    return user && user.token ? <Component {...props} /> : null;
  };
};

export default isAuth;
