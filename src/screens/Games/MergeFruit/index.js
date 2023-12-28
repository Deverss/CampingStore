import React from 'react';
import Breadcrumbs from "../../../components/Breadcrumbs";
import Merge from "./merge.js";


const breadcrumbs = [
  {
    title: "Home page",
    url: "/",
  },
  {
    title: "Games",
    url: "/games",
  },
  {
    title: "Merge Fruit",
    url: "/games/merge_fruit",
  }
];

function MergeFruit() {
  

  return (
    <>
      <div>
        <Breadcrumbs value={breadcrumbs} />
      </div>
      <Merge />
    </>
  );
}

export default MergeFruit;
