import React, { useState, useEffect } from "react";
import cn from "classnames";
import Breadcrumbs from "../../components/Breadcrumbs";
import styles from "./blog.module.sass";
import Blog from "./Blog";


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



function BlogPage() {
  return (
    <>
      <Breadcrumbs value={breadcrumbs} />
      <div className={cn("section", styles.category)}>
        <div className={cn("center")}>
          <div className={cn("stage")}>- Camping posts</div>
          <h2 className={cn("title title_mb-lg")}>
            Tip and trick about <br />
            Camping
          </h2>
          <Blog />
        </div>
      </div>
      
    </>
  );
}

export default BlogPage;