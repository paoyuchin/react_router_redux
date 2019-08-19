import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import { deleteItemAction } from "../store/actions/action";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  to
} from "reactstrap";
import "../scss/App.scss";

class Item extends Component {
  handleDeleteItem = () => {
    this.props.deleteItem(this.props._item);
  };
  render() {
    return (
      <React.Fragment>
        <ListGroup flush>
          <ListGroupItem>
            <span className="name three-child">{this.props._item.name}</span>
            <div className="btnsWrap">
              <Button
                outline
                color="primary"
                // size="sm"
                tag={Link}
                to={`/edit_item/${this.props._item.id}`}
              >
                edit
              </Button>
              <Button className="margin_left_medium" onClick={this.handleDeleteItem}>delete</Button>
            </div>
          </ListGroupItem>
        </ListGroup>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemInfo: state.toDoList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteItem: deleteItem => {
      dispatch(deleteItemAction(deleteItem));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
