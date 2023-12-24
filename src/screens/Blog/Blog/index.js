import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import $ from "jquery";
import "slick-slider";
import styles from "./blog.module.sass";

const posts = [
  {
    title: "How to Plan a Perfect Camping Trip in 10 Easy Steps",
    url: "/blog",
    img: "/images/content/blog/blog-pic-1.jpg",
    status: "recent",
    category: {
      title: "Top tips",
      color: "yellow",
    },
    width: "w66",
  },
  {
    title: "The Best Camping Gear and Accessories You Need to Pack",
    url: "/blog",
    img: "/images/content/blog/blog-pic-2.jpg",
    category: {
      title: "New in",
      color: "blue",
    },
    width: "w33",
  },
  {
    title: "10 Amazing Camping Destinations Around the World",
    url: "/blog",
    img: "/images/content/blog/blog-pic-3.jpg",
    status: "popular",
    category: {
      title: "How to",
      color: "pink",
    },
    width: "w33",
  },
  {
    title: "The Ultimate Guide to Camping with Kids",
    url: "/blog",
    img: "/images/content/blog/blog-pic-4.jpg",
    category: {
      title: "Masks",
      color: "green",
    },
    width: "w33",
  },
  {
    title: "How to Camp Off the Grid: How to Set Up a Solar Panel",
    url: "/blog",
    img: "/images/content/blog/blog-pic-5.jpg",
    category: {
      title: "Sun care",
      color: "yellow",
    },
    width: "w33",
  },
  {
    title: "The Benefits of Camping for Your Mind, Body, and Soul",
    url: "/blog",
    img: "/images/content/blog/blog-pic-6.jpg",
    category: {
      title: "Bestsellers",
      color: "blue",
    },
    width: "w50",
  },
  {
    title: "How to Make Delicious Meals While Camping",
    url: "/blog",
    img: "/images/content/blog/blog-pic-7.jpg",
    category: {
      title: "Top tips",
      color: "pink",
    },
    width: "w50",
  },
];

function Blog() {
  const slider = useRef();

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    speed: 600,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick",
      },
      {
        breakpoint: 768,
        settings: "",
      },
    ],
  };

  useEffect(() => {
    const sliderBlog = slider.current;
    $(sliderBlog).slick(settings);
    $(window).on("resize orientationchange", function () {
      if (this.innerWidth < 768 && !$(sliderBlog).hasClass("slick-initialized")) {
        $(sliderBlog).slick(settings);
      }
    });
    return () => {
      $(sliderBlog).slick("unslick");
      $(window).off("resize orientationchange");
    };
  });

  return (
    <div className={cn("section", styles.blog)}>
      <div>

        <div ref={slider} className={cn("slider-blog", styles.slider, styles.list)}>
          {posts.map((x, i) => (
            <Link className={cn(styles.item, styles[x.width])} to={x.url} key={i}>
              {x.status === "recent" && <div className={cn(styles.status, styles.recent)}>Recent</div>}
              {x.status === "popular" && <div className={cn(styles.status, styles.popular)}>Popular</div>}

              <div className={styles.preview} style={{ backgroundImage: `url(${x.img})` }}></div>

              <h3 className={styles.info}>{x.title}</h3>

              <div className={cn(x.category.color, styles.category)}>{x.category.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;