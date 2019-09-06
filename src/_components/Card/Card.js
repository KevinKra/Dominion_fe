import React from "react";
import "./Card.scss";

export default function Card({ name, desc, type, image, cost, tags }) {
  const handleRender = () => {
    if (type !== undefined) {
      if (type[0] === "Action") {
        return (
          <article className='card'>
            <header style={{ backgroundColor: "silver" }}>{name}</header>
            {image ? (
              <img src={require(`../../assets/card_images/${image}`)} alt='' />
            ) : null}
            <div className='card-details'>
              {tags.map((tag, i) => (
                <p className='tag' key={i}>
                  {tag}
                </p>
              ))}
              <p className='description'>{desc}</p>
            </div>
            <footer>
              <p>{cost}</p>
              <p>{type}</p>
            </footer>
          </article>
        );
      } else if (type[0] === "Treasure") {
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
    } else {
      return <p>Loading</p>;
    }
  };

  return handleRender();
}
