import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../_redux/actions";
import "./Notification.scss";

export class Notification extends Component {
  state = {
    currentCard: ""
  };

  // componentDidUpdate() {
  //   this.setState({ currentCard: "" });
  // }

  componentWillReceiveProps(props) {
    this.setState({ currentCard: "" });
    if (props.justBought !== this.state.currentCard) {
      this.setState({ currentCard: props.justBought });
    } else {
      this.setState({ currentCard: "" });
    }
  }
  render() {
    const notification = (
      <section
        className={
          this.state.currentCard !== ""
            ? "show-notification notification"
            : "hide-notification notification"
        }
      >
        <div>
          <p>You just bought {this.state.currentCard}!</p>
        </div>
      </section>
    );
    return notification;
  }
}

const mapDispatchToProps = dispatch => ({
  clearCard: () => dispatch(actions.clearCard())
});

const mapStateToProps = state => ({
  justBought: state.justBought
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
