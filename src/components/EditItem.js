import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { modifiedItem } from '../store/actions/action';
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";



class EditItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editedContent: "",
    };
  }
  handleEditItem = e => {
    const {modifiedItem, history} = this.props;
    const {editedContent} = this.state;
    e.preventDefault();
    modifiedItem(this.state.editedContent);
    history.push("/");
  };

  handleChange = e => {
    this.setState({
      editedContent: {
        name: e.target.value,
        id: this.props.match.params.id
      }
    });
  };
  render() {
    return (
      <React.Fragment>
        <Form onSubmit={this.handleEditItem}>
          <FormGroup>
            <Input
              placeholder="write your edit to do here"
              onChange={this.handleChange}
            />
            <Button
              type="submit"
              color="warning"
              className="margin_left_medium"
            >
              edit
            </Button>
          </FormGroup>
        </Form>
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    modifiedItem: editedContent => {
      dispatch(modifiedItem(editedContent));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EditItem);
