import React, { Component } from 'react';

import save from '../icons/save.png'
import cancel from '../icons/cancel.jpg'


class ItemInput extends Component {
  constructor(props) {
    super(props);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onNameInputChange = this.onNameInputChange.bind(this);
    this.onPriceInputChange = this.onPriceInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      currName: this.props.currName,
      currPrice: this.props.currPrice
    }
  }

  onKeyPress(evt) {
    if (evt.charCode === 13) {
      this.onSubmit()
    }
  }

  onNameInputChange(evt) {
    this.setState({currName: evt.target.value, currPrice:this.state.currPrice})
  }

  onPriceInputChange(evt) {
    this.setState({currName: this.state.currName, currPrice: evt.target.value})
  }

  onSubmit() {
    const price = this.state.currPrice.charAt(this.state.currPrice.length-1) !== '$'
      ? this.state.currPrice + '$'
      : this.state.currPrice;

    this.props.onSubmit(this.state.currName, price)
  }

  render() {
    return (
      <div className="Item ItemStyle">
        <div className="Name">
          <input className="ItemNameInput" type="text" placeholder="Name" value={this.state.currName}
                 autoFocus="autoFocus" onChange={this.onNameInputChange} onKeyPress={this.onKeyPress}/>
        </div>
        <div className="Price">
          <input className="ItemPriceInput" type="text" placeholder="$" value={this.state.currPrice}
                 onChange={this.onPriceInputChange} onKeyPress={this.onKeyPress}/>
        </div>
        <div className="Buttons">
          <input type="image" src={save} name="Save" onClick={this.onSubmit} alt="Save_button"/>
          <input type="image" src={cancel} name="Cancel" onClick={this.props.onCancel} alt="Cancel_button"/>
        </div>
      </div>
    )
  }
}

export default ItemInput