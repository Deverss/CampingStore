import React from "react";
import cn from "classnames";
import styles from "./About.module.sass";

function About() {
  return (
    <div className={cn("section", styles.about)}>
      <div className={cn("center", styles.center)}>
        <div className={cn("stage")}>- Why Us</div>
        <h2 className={cn("title title_mb-lg", styles.title)}>Why People Choose Us</h2>
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="#000" strokeWidth="2.5" strokeLinejoin="round">
                <path d="M29 21.52V10.365a2.8 2.8 0 0 0-.373-1.393c-.244-.423-.594-.775-1.016-1.02L17.89 2.374a2.77 2.77 0 0 0-2.778 0L5.39 7.952c-.422.245-.772.596-1.016 1.02A2.8 2.8 0 0 0 4 10.365V21.52a2.8 2.8 0 0 0 .373 1.393c.244.423.594.775 1.016 1.02l9.722 5.578a2.77 2.77 0 0 0 2.778 0l9.722-5.578a2.78 2.78 0 0 0 1.016-1.02A2.8 2.8 0 0 0 29 21.521z"></path>
                <path d="M4.375 8.914L16.5 15.957l12.125-7.043M16.5 30V15.943" strokeLinecap="round"></path>
              </svg>
            </div>
            <div className={styles.category}>Easy Returns</div>
            <div className={styles.text}>Our return policy is simple and that is why customers love our shop.</div>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="#000" strokeWidth="2.5" strokeLinejoin="round">
                <path d="M28 30v-3a6 6 0 0 0-6-6H10a6 6 0 0 0-6 6v3" strokeLinecap="round"></path>
                <path d="M16 14a6 6 0 1 0 0-12 6 6 0 1 0 0 12z"></path>
              </svg>
            </div>
            <div className={styles.category}>Customer Service</div>
            <div className={styles.text}>We offer amazing customer service no matter what happens.</div>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
                <path d="M16 3l4.326 8.557L30 12.938l-7 6.657L24.652 29 16 24.557 7.348 29 9 19.595l-7-6.657 9.674-1.38L16 3z" stroke="#000" strokeWidth="2.5" strokeLinejoin="round"></path>
              </svg>
            </div>
            <div className={styles.category}>High Quality</div>
            <div className={styles.text}>All of our products go through very strict inspection before we dispatch them.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
