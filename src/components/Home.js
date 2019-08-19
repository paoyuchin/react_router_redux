import React, { Component } from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { Alert } from "reactstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryContent: ""
    };
  }
    handleChange = e => {
      this.setState({
        queryContent: e.target.value
      });
    };
  render() {
    const { toDoList } = this.props;
    const { queryContent } = this.state;
    let items = toDoList.list
      // .filter(
      //   item =>
      //     queryContent === "" ||
      //     (queryContent && item.nsame.includes(queryContent))
      // )
      .map(item => {
        return <Item key={item.id} _item={item} />;
      });

    return (
      <React.Fragment>
        <div className="item-container">{items}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    toDoList: state.toDoList
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);
