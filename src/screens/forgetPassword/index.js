import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./forgetPassword.module.sass";
import cn from "classnames";
import Breadcrumbs from "../../components/Breadcrumbs";
import TextInput from "../../components/TextInput";
import { AuthAction } from "../../redux/auth";
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
    title: "checkOtp",
    url: "/checkOtp",
  },
  {
    title: "Sign Up",
  },
];

function SignUp() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { isLoading, errorForgetPassword, messageSuccessForgetPassword } =
    useSelector((state) => state.auth);

  const emailOnchange = (event) => {
    setEmail(event.target.value);
  };

  const onRegister = (e) => {
    e.preventDefault();
    dispatch(AuthAction.forgetPassword({ email }));
  };

  return (
    <>
      <Breadcrumbs value={breadcrumbs} />
      <div className={cn("section")}>
        <div className={styles.details}>
          <div className={cn("center")}>
            <div className={cn("stage")}>- Forget</div>
            <h2 className={cn("title title_mb-lg")}>Forget Password</h2>
            <form className={styles.form} action="">
              {errorForgetPassword ? (
                <div className={cn("errorMessage")}>{errorForgetPassword}</div>
              ) : (
                <div className={cn("errorMessage")}>
                  {messageSuccessForgetPassword}
                </div>
              )}

              <div className={styles.wrap}>
                <div className={cn(styles.status, styles.success)}></div>
                <TextInput
                  className={styles.field}
                  label="Email Address"
                  type="email"
                  onChange={emailOnchange}
                />
              </div>

              <div className={styles.row}>
                <div className={styles.col}>
                  <button
                    className={cn(
                      "button button-green button-wide",
                      styles.button
                    )}
                    onClick={onRegister}
                  >
                    {isLoading ? "Loading..." : "Submit"}
                  </button>
                </div>
                <div className={styles.col}></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
