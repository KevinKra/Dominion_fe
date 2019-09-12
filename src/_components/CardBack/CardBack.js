import React from "react";
import "./CardBack.scss";

export default function CardBack() {
  return (
    <article className='card'>
      <img
        src={"https://tsdbcg.herokuapp.com/card_images/cardBack.jpg"}
        alt='card decoration'
        style={{ flex: 1 }}
      />
    </article>
  );
}
