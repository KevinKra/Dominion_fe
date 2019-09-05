import React from "react";
import images from "../../assets/card_images/Village.jpg";
import "./Card.scss";

export default function Card({ name, desc, type, image, cost }) {
  const handleRender = () => {
    if (type === "Action") {
      return (
        <article className='card'>
          <header style={{ backgroundColor: "silver" }}>{name}</header>
          {image ? (
            <img src={require(`../../assets/card_images/${image}`)} alt='' />
          ) : null}
          <p className='description'>{desc}</p>
          <footer>
            <p>{cost}</p>
            <p>{type}</p>
          </footer>
        </article>
      );
    } else if (type === "Treasure") {
      return (
        <article className='card'>
          <header style={{ position: "relative", backgroundColor: "gold" }}>
            {name}
          </header>
          {image ? (
            <img
              src={require(`../../assets/card_images/${image}`)}
              alt={name}
              style={{ flex: 1 }}
            />
          ) : null}
          <footer>
            <p>{cost}</p>
            <p>{type}</p>
          </footer>
        </article>
      );
    } else {
      return (
        <article className='card'>
          <header style={{ position: "relative", backgroundColor: "lightGreen" }}>
            {name}
          </header>
          {image ? (
            <img
              src={require(`../../assets/card_images/${image}`)}
              alt={name}
              style={{ flex: 1 }}
            />
          ) : null}
          <footer>
            <p>{cost}</p>
            <p>{type}</p>
          </footer>
        </article>
      );
    }
  };

  return handleRender();
}
