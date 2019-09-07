import React from "react";
import "./Card.scss";

export default function Card({ name, desc, category, image, cost, tags }) {
  const handleRender = () => {
    if (category !== undefined) {
      if (category[0] === "Action") {
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
              <p>{category}</p>
            </footer>
          </article>
        );
      } else if (category[0] === "Treasure") {
        return (
          <article className='card'>
            <header style={{ backgroundColor: "gold" }}>{name}</header>
            {image ? (
              <img
                src={require(`../../assets/card_images/${image}`)}
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
          <article className='card'>
            <header style={{ backgroundColor: "lightGreen" }}>{name}</header>
            {image ? (
              <img
                src={require(`../../assets/card_images/${image}`)}
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

  return handleRender();
}
