import React from 'react';
import Breadcrumbs from "../../components/Breadcrumbs";
import styles from "./Games.module.sass";
import img1 from "./img/nhau_dau_nhau_day.png";
import img2 from "./img/merge_fruit.png"


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
  },
  {
    title: 'Merge Fruit',
    image: img2,
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
            <button className={styles.play_button}>Play</button>
          </div>
        ))}
      </div>
    </>   
  )
}
export default Games
