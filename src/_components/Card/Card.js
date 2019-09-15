import React from "react";
import "./Card.scss";

export default function Card({ name, desc, category, image, cost, tags, id }) {
  const handleRender = () => {
    if (category !== undefined) {
      if (category[0] === "Action") {
        return (
          <article className='card' id={id} data-name={name} key={id}>
            <header
              style={{ backgroundColor: "rgb(29, 29, 29)", color: "rgb(255, 255, 255)" }}
            >
              {name}
            </header>
            {image ? <img src={image} alt='' /> : null}
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
              <p className='card-cost'>{cost}</p>
              <p>{category}</p>
            </footer>
          </article>
        );
      } else if (category[0] === "Money") {
        return (
          <article className='card' id={id} data-name={name} key={id}>
            <header style={{ backgroundColor: "gold" }}>{name}</header>
            {image ? <img src={image} alt={name} style={{ flex: 1 }} /> : null}
            <footer>
              <p className='card-cost'>{cost}</p>
              <p>{category}</p>
            </footer>
          </article>
        );
      } else {
        return (
          <article className='card' id={id} data-name={name} key={id}>
            <header style={{ backgroundColor: "lightGreen" }}>{name}</header>
            {image ? <img src={image} alt={name} style={{ flex: 1 }} /> : null}
            <footer>
              <p className='card-cost'>{cost}</p>
              <p>{category}</p>
            </footer>
          </article>
        );
      }
    } else {
      return (
        <article className='card'>
          <p className='card-X'>X</p>
        </article>
      );
    }
  };

  const cardType = handleRender();
  return cardType;
}
