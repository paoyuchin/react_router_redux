import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addItemAction } from "../store/actions/action";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "../scss/App.scss";
import { Nav, NavItem, NavLink } from "reactstrap";


class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoContent: ""
    };
  }

  handleAddTodo = e => {
    const { addItem, history } = this.props;
    e.preventDefault();
    addItem(this.state.todoContent);
    history.push("/");
  };

  handleChange = e => {
    this.setState({
      todoContent: e.target.value
    });
  };
  render() {
    return (
      <div className="form-container">
        <Form onSubmit={this.handleAddTodo}>
          <FormGroup>
            <Input
              placeholder="add your to do!!"
              onChange={this.handleChange}
            />
            <Button
              type="submit"
              color="success"
              className="margin_left_medium"
            >
              add
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: toDoContent => {
      dispatch(addItemAction(toDoContent));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddItem);
