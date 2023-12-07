import React from "react";
import cn from "classnames";
import Breadcrumbs from "../../components/Breadcrumbs";
import Newsletter from "../../components/Newsletter";
import Values from "./Values";
import styles from "./About.module.sass";

const breadcrumbs = [
  {
    title: "Home page",
    url: "/",
  },
  {
    title: "Navigation",
    url: "/",
  },
  {
    title: "About",
  },
];

function About() {
  return (
    <>
      <Breadcrumbs value={breadcrumbs} />

      <div className={cn("section")}>
        <div className={cn("section", styles.wrap)}>
          <div className={cn("center")}>
            <div className={cn("stage")}>- Learn More</div>
            <h2 className={cn("title title_mb-lg", styles.title)}>All About Us</h2>
            <div className={styles.bg} style={{ backgroundImage: `url(/images/content/company/company-bg.jpg)` }}></div>
          </div>
        </div>

        <div className={cn("section", styles.container)}>
          <div className={cn("center", styles.center)}>
            <div className={styles.row}>
              <div className={styles.col}>
                <div className={cn("stage")}>- How it has Started</div>
                <h2 className={cn("title", styles.title)}>How and When it has All Started</h2>
                <div className={styles.photo} style={{ backgroundImage: `url(/images/content/company/company-photo.jpg)` }}></div>
              </div>
              <div className={styles.col}>
                <div className={styles.item}>
                  <div className={styles.category}>Natural Ingredients Only</div>
                  <div className={styles.text}>
                    10 years ago, when one of the co-founders came up with the idea of making skincare and beauty products using only natural ingreadients, he did not even think twice.
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.category}>Affordable Pricing Strategy</div>
                  <div className={styles.text}>
                    One of our main goals from the start was to offer high quality products that would also have affordable prices. We just can’t believe that we have finally achieved this and now we
                    are proud of it.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Values />
      <Newsletter />
    </>
  );
}

export default About;
