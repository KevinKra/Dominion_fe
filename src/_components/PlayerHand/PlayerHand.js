import React, { Component } from "react";
import { connect } from "react-redux";
import "./PlayerHand.scss";
import TreasureCard from "../TreasureCard/TreasureCard";
import ActionCard from "../ActionCard/ActionCard";
import Card from "../Card/Card";

export class PlayerHand extends Component {
  render() {
    return (
      <section className='PlayerHand'>
        {this.props.playerHand.map(card => {
          if (card.category[0] === "Money") {
            return <TreasureCard card={card} key={card.id} />;
          }
          if (card.category[0] === "Action") {
            return <ActionCard card={card} key={card.id} />;
          }
          if (card.category[0] === "Victory") {
            return (
              <Card
                name={card.name}
                desc={card.desc}
                category={card.category}
                image={card.image}
                cost={card.cost}
                id={card.id}
                key={card.id}
              />
            );
          }
        })}
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  playerHand: state.playerHand
});

export default connect(mapStateToProps)(PlayerHand);
