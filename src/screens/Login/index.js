import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./Login.module.sass";
import cn from "classnames";
import Breadcrumbs from "../../components/Breadcrumbs";
import TextInput from "../../components/TextInput";
import Checkbox from "../../components/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction, loginSuccess } from "../../redux/auth/index";

const breadcrumbs = [
  {
    title: "Home Page",
    url: "/",
  },
  {
    title: " Categories",
    url: "/Category",
  },
  {
    title: "Login",
  },
];

function Login() {
  const history = useHistory();
  const [remember, setRemember] = useState(true);
  //state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const emailOnChange = (event) => {
    setEmail(event.target.value);
  };
  const passwordOnChange = (event) => {
    setPassword(event.target.value);
  };
  const onLogin = (e) => {
    e.preventDefault();
    const res = dispatch(AuthAction.login({ email, password }));
    res.then((result) => {
      if (AuthAction.login.fulfilled.match(result)) {
        dispatch(
          loginSuccess({
            userId: result.payload.userId,
            accessToken: result.payload.accessToken,
          })
        );
        window.location.href = "/";
      }
    });
  };
  return (
    <>
      <Breadcrumbs value={breadcrumbs} />
      <div className={cn("section")}>
        <div className={styles.details}>
          <div className={cn("center")}>
            <div className={cn("stage")}>- Login</div>
            <h2 className={cn("title title_mb-lg")}>
              Login to Your <br />
              Account
            </h2>
            <form className={styles.form} action="">
              {error && <div>{error}</div>}
              <TextInput
                className={styles.field}
                label="Email Address"
                type="email"
                onChange={emailOnChange}
              />
              <TextInput
                className={styles.field}
                label="Password"
                type="password"
                onChange={passwordOnChange}
              />
              <Checkbox
                className={styles.checkbox}
                label="Remember me"
                type="checkbox"
                value={remember}
                onChange={() => setRemember(!remember)}
              />
              <div className={styles.buttons}>
                <button
                  className={cn("button button-green button-wide")}
                  onClick={onLogin} // Removed the unnecessary parentheses
                >
                  {isLoading ? "Loading..." : "Login"}
                </button>
              </div>
              <div className={styles.row}>
                <div className={styles.col}>
                  <Link
                    className={cn(
                      "button button-border button-wide",
                      styles.button
                    )}
                    to="/sign-up"
                  >
                    Create Account
                  </Link>
                </div>
                <div className={styles.col}>
                  <Link className={styles.link} to="/forgetPassword">
                    Forgot Password?
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
