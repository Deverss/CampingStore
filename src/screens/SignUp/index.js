import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.sass";
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
    title: "Sign Up",
  },
];

function SignUp() {
  const [agree, setAgree] = useState(true);

  return (
    <>
      <Breadcrumbs value={breadcrumbs} />
      <div className={cn("section")}>
        <div className={styles.details}>
          <div className={cn("center")}>
            <div className={cn("stage")}>- Sign Up</div>
            <h2 className={cn("title title_mb-lg")}>Create Account</h2>
            <form className={styles.form} action="">
              <div className={styles.wrap}>
                <div className={cn(styles.status, styles.success)}></div>
                <TextInput className={styles.field} label="Email Address" type="email" name="address" />
                <TextInput className={styles.field} label="Create Password" type="password" name="password" />
              </div>

              <Checkbox className={styles.checkbox} label='I have read and agree to <a href="/legal-page">terms & conditions</a>' type="checkbox" value={agree} onChange={() => setAgree(!agree)} />
              <div className={styles.row}>
                <div className={styles.col}>
                  <button className={cn("button button-green button-wide", styles.button)}>Create Account</button>
                </div>
                <div className={styles.col}>
                  <Link className={cn("button button-border button-wide", styles.button)} to="/login">
                    Login
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

export default SignUp;
