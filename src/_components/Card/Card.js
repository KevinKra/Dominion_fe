import React from "react";
import "./Card.scss";

export default function Card({ name, desc, category, image, cost, tags, id }) {
  const handleRender = () => {
    if (category !== undefined) {
      if (category[0] === "Action") {
        return (
          <article className='card' id={id} data-name={name}>
            <header style={{ backgroundColor: "silver" }}>{name}</header>
            {image ? (
              <img src={image} alt='' />
            ) : null}
            <section className='card-details-section'>
              <div className='card-details'>
                {tags.map((tag, i) => (
                  <p className='tag' key={i}>
                    {tag}
                  </p>
                ))}
                <p className='description'>{desc}</p>
              </div>
            </section>
            <footer>
              <p>{cost}</p>
              <p>{category}</p>
            </footer>
          </article>
        );
      } else if (category[0] === "Treasure") {
        return (
          <article className='card' id={id} data-name={name}>
            <header style={{ backgroundColor: "gold" }}>{name}</header>
            {image ? (
              <img
                src={image}
                alt={name}
                style={{ flex: 1 }}
              />
            ) : null}
            <footer>
              <p>{cost}</p>
              <p>{category}</p>
            </footer>
          </article>
        );
      } else {
        return (
          <article className='card' id={id} data-name={name}>
            <header style={{ backgroundColor: "lightGreen" }}>{name}</header>
            {image ? (
              <img
                src={image}
                alt={name}
                style={{ flex: 1 }}
              />
            ) : null}
            <footer>
              <p>{cost}</p>
              <p>{category}</p>
            </footer>
          </article>
        );
      }
    } else {
      return <p>Loading</p>;
    }
  };

  const cardType = handleRender();
  return cardType;
}
