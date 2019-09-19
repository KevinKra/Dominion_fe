import React, { Component } from "react";
import { connect } from "react-redux";
import "./Notification.scss";

export class Notification extends Component {
  state = {
    previousCard: ""
  };
  componentWillReceiveProps(props) {
    console.log(props);
    if (props.justBought !== this.state.previousCard) {
      this.setState({ previousCard: props.justBought });
    }
  }
  render() {
    const notification = (
      <section
        className={
          this.state.previousCard !== ""
            ? "show-notification notification"
            : "hide-notification notification"
        }
      >
        <div>
          <p>You just bought {this.props.justBought}!</p>
        </div>
      </section>
    );
    return notification;
  }
}

const mapStateToProps = state => ({
  justBought: state.justBought
});

export default connect(mapStateToProps)(Notification);
