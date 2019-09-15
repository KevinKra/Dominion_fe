import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../_redux/actions/";
import { TimelineMax } from "gsap";
import { gsapCardsCycleIn } from "../../greenSock/animations";
import TreasureCard from "../TreasureCard/TreasureCard";
import ActionCard from "../ActionCard/ActionCard";
import Card from "../Card/Card";
import "./PlayerHand.scss";

export class PlayerHand extends Component {
  constructor(props) {
    super(props);
    this.cards = [];
    this.tl = new TimelineMax({ paused: true });
  }

  componentDidUpdate(prevProps) {
    // Animate cards during the first round
    if (this.props.round === 1 && this.props.playerHand.length === 5) {
      gsapCardsCycleIn(this.tl, this.cards, this.showUserHand);
      this.tl.play();
    }
    // Animate if the playerDeck has changed and the hand has content
    if (prevProps.playerDeck !== this.props.playerDeck && this.props.playerHand.length) {
      gsapCardsCycleIn(this.tl, this.cards, this.showUserHand);
      this.tl.play();
    }
  }

  showUserHand = () => {
    // after the gsap animation completes, this callback will be invoked.
    // this callback updates the store and causes the player's hand to translateY in.
    this.props.triggerHandAnimation();
  };

  render() {
    this.tl
      .kill()
      .clear()
      .pause(0);
    const { playerHand, animateHand } = this.props;

    const animationSequence = (
      <section className='hand-animations'>
        {playerHand.length &&
          playerHand.map((card, i) => {
            console.log(card);
            return (
              <div className='animated-card' key={i} ref={div => (this.cards[i] = div)}>
                <p>{card.name}</p>
              </div>
            );
          })}
      </section>
    );

    const playersCurrentHand = (
      <section
        className='PlayerHand'
        style={
          animateHand
            ? { transform: "translateY(50%)" }
            : { transform: "translateY(100%)" }
        }
      >
        {animateHand &&
          playerHand.map(card => {
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
    return (
      <Fragment>
        {animationSequence}
        {playersCurrentHand}
      </Fragment>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  triggerHandAnimation: () => dispatch(actions.triggerHandAnimation())
});

export const mapStateToProps = state => ({
  playerHand: state.playerHand,
  playerDeck: state.playerDeck,
  animateHand: state.animateHand,
  round: state.round
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerHand);
