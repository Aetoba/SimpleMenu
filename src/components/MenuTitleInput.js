import React, { Component } from 'react';

import save from '../icons/save.png'
import cancel from '../icons/cancel.jpg'


class MenuTitleInput extends Component {
  constructor(props) {
    super(props);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      currName: this.props.currName
    }
  }

  onKeyPress(evt) {
    if (evt.charCode === 13) {
      this.onSubmit()
    }
  }

  onInputChange(evt) {
    this.setState({currName: evt.target.value})
  }

  onSubmit() {
    this.props.onSubmit(this.state.currName)
  }

  render() {
    return (
      <div className="MenuTitle MenuTitleStyle">
        <div className="Title">
        <input className="MenuNameInput" type="text" placeholder="Menu name" value={this.state.currName}
               autoFocus="autoFocus" onChange={this.onInputChange} onKeyPress={this.onKeyPress}/>
        </div>
        <div className="Buttons">
          <input type="image" src={save} name="Save" onClick={this.onSubmit} alt="Save_button"/>
          <input type="image" src={cancel} name="Cancel" onClick={this.props.onCancel} alt="Cancel_button"/>
        </div>
      </div>
    )
  }
}

export default MenuTitleInput