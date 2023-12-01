import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.sass";
import cn from "classnames";
import Breadcrumbs from "../../components/Breadcrumbs";
import TextInput from "../../components/TextInput";
import Checkbox from "../../components/Checkbox";

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
  const [remember, setRemember] = useState(true);

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
              <TextInput className={styles.field} label="Email Address" type="email" name="address" />
              <TextInput className={styles.field} label="Password" type="password" name="password" />
              <Checkbox className={styles.checkbox} label="Remember me" type="checkbox" value={remember} onChange={() => setRemember(!remember)} />
              <div className={styles.buttons}>
                <button className={cn("button button-green button-wide")}>Login</button>
              </div>
              <div className={styles.row}>
                <div className={styles.col}>
                  <Link className={cn("button button-border button-wide", styles.button)} to="/sign-up">
                    Create Account
                  </Link>
                </div>
                <div className={styles.col}>
                  <Link className={styles.link} to="#">
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
