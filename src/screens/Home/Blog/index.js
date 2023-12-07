import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import $ from "jquery";
import "slick-slider";
import styles from "./Blog.module.sass";

const posts = [
  {
    title: "Morning Skincare Routine: 10 Top Tips for you",
    url: "/blog",
    img: "/images/content/blog/blog-pic-1.webp",
    status: "recent",
    category: {
      title: "Top tips",
      color: "yellow",
    },
    width: "w66",
  },
  {
    title: "New Collection is Out",
    url: "/blog",
    img: "/images/content/blog/blog-pic-2.webp",
    category: {
      title: "New in",
      color: "blue",
    },
    width: "w33",
  },
  {
    title: "Always Stay Fresh",
    url: "/blog",
    img: "/images/content/blog/blog-pic-3.webp",
    status: "popular",
    category: {
      title: "How to",
      color: "pink",
    },
    width: "w33",
  },
  {
    title: "Improve your Skin now",
    url: "/blog",
    img: "/images/content/blog/blog-pic-4.webp",
    category: {
      title: "Masks",
      color: "green",
    },
    width: "w33",
  },
  {
    title: "Stay Safe in the Sun",
    url: "/blog",
    img: "/images/content/blog/blog-pic-5.webp",
    category: {
      title: "Sun care",
      color: "yellow",
    },
    width: "w33",
  },
  {
    title: "Explore our Bestselling Products",
    url: "/blog",
    img: "/images/content/blog/blog-pic-6.webp",
    category: {
      title: "Bestsellers",
      color: "blue",
    },
    width: "w50",
  },
  {
    title: "5 Great Tips to Get that Perfect Skin",
    url: "/blog",
    img: "/images/content/blog/blog-pic-7.webp",
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
      <div className={cn("center", styles.center)}>
        <div className={cn("stage", styles.stage)}> - Our Blog</div>
        <h2 className={cn("title title_mb-lg", styles.title)}>Check Out our Blog</h2>

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
