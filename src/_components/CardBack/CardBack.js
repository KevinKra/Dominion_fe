import React from "react";
import "./CardBack.scss";
import "../../assets/card_images/cardBack.jpg";

export default function CardBack() {
  return (
    <article className='card'>
      <img src={require(`../../assets/card_images/cardBack.jpg`)} style={{ flex: 1 }} />
    </article>
  );
}
