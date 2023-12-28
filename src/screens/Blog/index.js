import React from "react";
import cn from "classnames";
import Breadcrumbs from "../../components/Breadcrumbs";
import styles from "./Blog.module.sass";
import Posts from "./Posts"


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
          <Posts />
        </div>
      </div>
      
    </>
  );
}

export default BlogPage;
