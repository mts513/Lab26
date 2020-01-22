import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    let itemList = this.props.items.map(item => {
      return (
        <div className="card" key="{item.id}">
          <div>
            <p className="title">{item.title}</p>
            <p className="price">{item.price}</p>
            <p className="desc">{item.description}</p>
          </div>
        </div>
      );
    });
    return (
      <div>
        <h3>Home</h3>
        <div>{itemList}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items
  };
};
export default connect(mapStateToProps)(Home);
