import React, { Component } from 'react';
import { connect } from 'react-redux'

import Item from './Item'
import ItemInput from './ItemInput'
import { removeItem } from '../actions'
import { addItem } from '../actions'

import add from '../icons/add.png'


class ItemList extends Component {
  constructor(props) {
    super(props);
    this.handleAddingItem = this.handleAddingItem.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.state = {
      addingItem: false,
    }
  }

  handleAddingItem() {
    this.setState({addingItem: true})
  }

  onSubmit(name, price) {
    this.props.addItem(this.props.mid, name, price);
    this.setState({addingItem: false})
  }

  onCancel() {
    this.setState({addingItem: false})
  }

  render() {
    const fullItems = this.props.allItems.filter(item => this.props.items.indexOf(item.id) !== -1);
    const addField = (this.state.addingItem
      ? <ItemInput currName='' currPrice='' onSubmit={this.onSubmit} onCancel={this.onCancel}/>
      : <div className="Buttons" onClick={this.handleAddingItem}>
          <input type="image" src={add} name="Add Item" onClick={this.handleAddingItem} alt="Add_button"/>
          Add
        </div>);

    return (
      <div>
        { fullItems.map(item =>
          <Item key={item.id} iid={item.id} iname={item.name} price={item.price}
                remItem={() => this.props.removeItem(this.props.mid, item.id)} />
        )}
        <div className="ItemStyle">
          {addField}
        </div>
      </div>
    )
  }
}

const mapStatetoProps = state => ({
  allItems: state.items
});

const mapDispatchtoProps = dispatch => ({
  removeItem: (mid, iid) => dispatch(removeItem(mid, iid)),
  addItem: (mid, name, price) => dispatch(addItem(mid, name, price))
});

export default connect(mapStatetoProps, mapDispatchtoProps)(ItemList)