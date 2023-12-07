import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import $ from "jquery";
import "slick-slider";
import styles from "./Categories.module.sass";

const items = [
  {
    url: "/category",
    title: "On Sale",
    pic: "/images/categories/shopping-bag.svg",
  },
  {
    url: "/category",
    title: "Featured",
    pic: "/images/categories/trending.svg",
  },
  {
    url: "/category",
    title: "Masks",
    pic: "/images/categories/skincare.svg",
  },
  {
    url: "/category",
    title: "Eye Care",
    pic: "/images/categories/eye-care.svg",
  },
  {
    url: "/category",
    title: "Moisturizers",
    pic: "/images/categories/natural.svg",
  },
  {
    url: "/category",
    title: "Treatments",
    pic: "/images/categories/protection.svg",
  },
  {
    url: "/category",
    title: "Night Care",
    pic: "/images/categories/night-care.svg",
  },
  {
    url: "/category",
    title: "Sun Care",
    pic: "/images/categories/after-sun.svg",
  },
  {
    url: "/category",
    title: "On Sale",
    pic: "/images/categories/shopping-bag.svg",
  },
];

function Categories() {
  const slider = useRef();

  const settings = {
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: true,
    speed: 600,
    infinite: true,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  useEffect(() => {
    const sliderCategory = slider.current;
    $(sliderCategory).slick(settings);
    return () => {
      $(sliderCategory).slick("unslick");
    };
  });

  return (
    <div className={cn("section", styles.categories)}>
      <div className={cn("center")}>
        <div className={cn("stage", styles.stage)}>The Categories</div>
        <h2 className={cn("title title_mb-lg", styles.title)}>Browse by Category</h2>
        <div className={styles.container}>
          <div ref={slider} className={cn("slider-category", styles.slider)}>
            {items.map((x, i) => (
              <div className={styles.slide} key={i}>
                <Link className={styles.item} to={x.url}>
                  <div className={styles.icon}>
                    <img className={styles.pic} src={x.pic} alt="" />
                  </div>
                  <div className={styles.text}>{x.title}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
