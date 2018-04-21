import React, { Component } from 'react';
import { connect } from 'react-redux'

import ItemInput from './ItemInput'
import { editItem } from '../actions'

import edit from '../icons/edit.svg'
import del from '../icons/delete.png'


class Item extends Component {
  constructor(props) {
    super(props);
    this.handleEditingItem = this.handleEditingItem.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.state = {
      editing: false,
    }
  }

  handleEditingItem() {
    this.setState({editing: true})
  }

  onSubmit(name, price) {
    this.props.editItem(this.props.iid, name, price);
    this.setState({editing: false})
  }

  onCancel() {
    this.setState({editing: false})
  }

  render() {
    const item = (this.state.editing
      ? <ItemInput currName={this.props.iname} currPrice={this.props.price}
                   onSubmit={this.onSubmit} onCancel={this.onCancel}/>
      : <div className="Item ItemStyle">
          <div className="Name">
            {this.props.iname}
          </div>
          <div className="Price">
            {this.props.price}
          </div>
          <div className="Buttons">
            <input type="image" src={edit} name="edit" onClick={this.handleEditingItem} alt="Edit_button"/>
            <input type="image" src={del} name="delete" onClick={this.props.remItem} alt="Delete_button"/>
          </div>
        </div>
      );

    return (
      <div>
         {item}
      </div>
    );
  }
}

const mapStatetoProps = state => ({
});

const mapDispatchtoProps = dispatch => ({
  editItem: (id, name, price) => dispatch(editItem(id, name, price))
});

export default connect(mapStatetoProps, mapDispatchtoProps)(Item);