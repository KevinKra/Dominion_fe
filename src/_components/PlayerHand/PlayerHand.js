import React, { Component } from "react";
import { connect } from "react-redux";
import "./PlayerHand.scss";
import TreasureCard from "../TreasureCard/TreasureCard";
import ActionCard from "../ActionCard/ActionCard";
import Card from "../Card/Card";
import { TimelineMax } from "gsap";
import { gsapCardsCycleIn } from "../../greenSock/animations";
import * as actions from "../../_redux/actions/";
import { mockPlayerData } from "../../mockData";

export class PlayerHand extends Component {
  constructor(props) {
    super(props);
    this.cards = [];
    this.tl = new TimelineMax({ paused: true });
    this.state = { renderHand: false };
  }
  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (this.props.round === 1 && this.props.playerHand.length === 5) {
      gsapCardsCycleIn(this.tl, this.cards, this.showUserHand);
      this.tl.play();
    }
    // if (prevProps.round !== this.props.round && this.props.playerHand.length) {
    //   gsapCardsCycleIn(this.tl, this.cards, this.showUserHand);
    //   this.tl.play();
    // }
    if (prevProps.playerDeck !== this.props.playerDeck && this.props.playerHand.length) {
      gsapCardsCycleIn(this.tl, this.cards, this.showUserHand);
      this.tl.play();
    }
  }

  showUserHand = () => {
    this.props.triggerHandAnimation();
  };

  render() {
    this.tl
      .kill()
      .clear()
      .pause(0);
    return (
      <React.Fragment>
        <section className='hand-animations'>
          {this.props.playerHand.length &&
            this.props.playerHand.map((card, i) => {
              console.log(card);
              return (
                <div className='animated-card' key={i} ref={div => (this.cards[i] = div)}>
                  <p>{card.name}</p>
                </div>
              );
            })}
        </section>

        <section
          className='PlayerHand'
          style={
            this.props.animateHand
              ? { transform: "translateY(50%)" }
              : { transform: "translateY(100%)" }
          }
        >
          {this.props.animateHand &&
            this.props.playerHand.map(card => {
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
      </React.Fragment>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  triggerHandAnimation: () => dispatch(actions.triggerHandAnimation())
});

export const mapStateToProps = state => ({
  playerHand: state.playerHand,
  playerDeck: state.playerDeck,
  round: state.round,
  animateHand: state.animateHand
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerHand);
