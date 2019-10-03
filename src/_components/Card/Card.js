import React from 'react';
import { connect } from 'react-redux';
import './Card.scss';

export const Card = ({
  name,
  desc,
  category,
  image,
  cost,
  tags,
  id,
  discardImage
}) => {
  const handleRender = () => {
    if (category !== undefined) {
      if (category[0] === 'Action') {
        return (
          <article className="card" id={id} data-name={name} key={id}>
            <header style={{ backgroundColor: 'silver' }}>{name}</header>
            {image ? <img src={image} alt="" /> : null}
            <section className="card-details-section">
              <div className="card-details">
                {tags.map((tag, i) => (
                  <p className="tag" key={i}>
                    {tag}
                  </p>
                ))}
                <p className="description">{desc}</p>
              </div>
            </section>
            <footer>
              <p>{cost}</p>
              <p>{category}</p>
            </footer>
          </article>
        );
      } else if (category[0] === 'Money') {
        return (
          <article className="card" id={id} data-name={name} key={id}>
            <header style={{ backgroundColor: 'gold' }}>{name}</header>
            {image ? <img src={image} alt={name} style={{ flex: 1 }} /> : null}
            <footer>
              <p>{cost}</p>
              <p>{category}</p>
            </footer>
          </article>
        );
      } else {
        return (
          <article className="card" id={id} data-name={name} key={id}>
            <header style={{ backgroundColor: 'lightGreen' }}>{name}</header>
            {image ? <img src={image} alt={name} style={{ flex: 1 }} /> : null}
            <footer>
              <p>{cost}</p>
              <p>{category}</p>
            </footer>
          </article>
        );
      }
    } else {
      return (
        <article className="card">
          {!discardImage ? (
            <p className="card-X">X</p>
          ) : (
            <img src={discardImage} alt={'Discard Pile'} style={{ flex: 1 }} />
          )}
        </article>
      );
    }
  };

  const cardType = handleRender();
  return cardType;
};

const mapStateToProps = store => ({
  discardImage: store.discardImage
});

export default connect(mapStateToProps)(Card);
