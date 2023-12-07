import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SignUp.module.sass";
import cn from "classnames";
import Breadcrumbs from "../../components/Breadcrumbs";
import TextInput from "../../components/TextInput";
import Checkbox from "../../components/Checkbox";
import { AuthAction } from "../../redux/auth";
import { useHistory } from "react-router-dom";
import { registrationSuccess } from "../../redux/auth";
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
  const [agree, setAgree] = useState(true);
  const [email, setEmail] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const emailOnchange = (event) => {
    setEmail(event.target.value);
  };

  const onRegister = (e) => {
    e.preventDefault();
    const res = dispatch(AuthAction.register(email));

    res.then((result) => {
      
      if (AuthAction.register.fulfilled.match(result)) {
        const message = result.payload.data.status.message;
        dispatch(registrationSuccess({ email, message }));
        history.push(`/checkOtp`);
      }
    });
  };

  return (
    <>
      <Breadcrumbs value={breadcrumbs} />
      <div className={cn("section")}>
        <div className={styles.details}>
          <div className={cn("center")}>
            <div className={cn("stage")}>- Sign Up</div>
            <h2 className={cn("title title_mb-lg")}>Create Account</h2>
            <form className={styles.form} action="">
              {error && <div className={cn("errorMessage")}>{error}</div>}
              <div className={styles.wrap}>
                <div className={cn(styles.status, styles.success)}></div>
                <TextInput
                  className={styles.field}
                  label="Email Address"
                  type="email"
                  onChange={emailOnchange}
                />
              </div>

              <Checkbox
                className={styles.checkbox}
                label='I have read and agree to <a href="/legal-page">terms & conditions</a>'
                type="checkbox"
                value={agree}
                onChange={() => setAgree(!agree)}
              />
              <div className={styles.row}>
                <div className={styles.col}>
                  <button
                    className={cn(
                      "button button-green button-wide",
                      styles.button
                    )}
                    onClick={onRegister}
                  >
                    {isLoading ? "Loading..." : "Create Account"}
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
