import React from 'react';
import Breadcrumbs from "../../components/Breadcrumbs";
import styles from "./Games.module.sass";
import img1 from "./img/nhau_dau_nhau_day.png";
import img2 from "./img/merge_fruit.png";
import img3 from "./img/giai_ma.png";

const breadcrumbs = [
  {
    title: "Home page",
    url: "/",
  },
  {
    title: "Games",
  },
];

const gamesData = [
  {
    title: 'Nhau Dau Nhau Day',
    image: img1,
    url: '/games/nhau_dau_nhau_day',
  },
  {
    title: 'Merge Fruit',
    image: img2,
    url: '/games/merge_fruit',
  },
  {
    title: 'Giai Ma',
    image: img3,
    url: '/games/giai_ma',
  }
]

function Games() {
  return (
    <>
      <Breadcrumbs value={breadcrumbs}/>

      <div className={styles.list}>
        {gamesData.map((game, index) => (
          <div key={index} className={styles.game_card}>
            <img src={game.image} alt={game.title} className={styles.game_image} />
            <h3 className={styles.game_title}>{game.title}</h3>
            {/* Use an anchor tag for navigation */}
            <a href={game.url} className={styles.play_button}>Play</a>
          </div>
        ))}
      </div>
    </>   
  )
}

export default Games;
