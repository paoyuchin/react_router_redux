import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addItemAction } from "../store/actions/action";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "../scss/App.scss";
import { Nav, NavItem, NavLink } from "reactstrap";
import Item from "./Item";


class Query extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoContent: ""
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
      .filter(
        item =>
          // queryContent === "" ||
          (queryContent && item.name.includes(queryContent))
      )
      .map(item => {
        return <Item key={item.id} _item={item} />;
      });
    console.log('items',items)
    return (
      <React.Fragment>
        <Form onSubmit={this.handleEditItem}>
          <FormGroup>
            <Input
              placeholder="search your todos!!"
              onChange={this.handleChange}
            />
          </FormGroup>
        </Form>
        <div className="item-container">{items}</div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
  };
};


const mapStateToProps = state => {
  console.log('query', state)
  return {
    toDoList: state.toDoList
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Query);
