import React, { useState, useEffect } from "react";
import cn from "classnames";
import Breadcrumbs from "../../components/Breadcrumbs";
import styles from "./blogDetail.module.sass";

const breadcrumbs = [
    {
      title: "Home Page",
      url: "/",
    },
    {
      title: "Blog",
      url: "/blog"
    },
  ];

const PostInfo  = [
    {
        title: "The Ultimate Guide to Camping with Kids",
        img: "/images/content/blog/blog-pic-4.jpg",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",

    },
]


function BlogDetail() {
    return (
      <>
        <Breadcrumbs value={breadcrumbs} />
        <div className={cn("section", styles.category)}>
          <div className={cn("center")}>
          {PostInfo.map((x, i) => (
            <div>
                <h2 className={cn("title title_mb-lg")}>
                {x.title}
                </h2>
                <div className={styles.image} style={{ backgroundImage: `url(${x.img})` }}></div>
                <div>
                {x.content}
                </div>
            </div>
        ))}
          </div>
        </div>
        
      </>
    );
  }
  
  export default BlogDetail;
