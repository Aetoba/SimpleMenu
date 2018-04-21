import React, { Component } from 'react';
import { connect } from 'react-redux'

import ItemList from './ItemList'
import MenuTitleInput from './MenuTitleInput'
import { editMenuName } from '../actions'

import edit from '../icons/edit.svg'
import del from '../icons/delete.png'


class Menu extends Component {
  constructor(props) {
    super(props);
    this.handleEditingMenu = this.handleEditingMenu.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.state = {
      editingName: false,
    }
  }

  handleEditingMenu() {
    this.setState({editingName: true})
  }

  onSubmit(name) {
    this.props.editMenuName(this.props.mid, name);
    this.setState({editingName: false})
  }

  onCancel() {
    this.setState({editingName: false})
  }

  render() {
    const menuTitle = (this.state.editingName
      ? <MenuTitleInput currName={this.props.mname} onSubmit={this.onSubmit} onCancel={this.onCancel} />
      : <div className="MenuTitle MenuTitleStyle">
          <div className="Title">
          {this.props.mname}
          </div>
          <div className="Buttons">
            <input type="image" src={edit} name="edit" onClick={this.handleEditingMenu} alt="Edit_button"/>
            <input type="image" src={del} name="delete" onClick={this.props.remMenu} alt="Delete_button"/>
          </div>
        </div>
      );

    return (
      <div>
        {menuTitle}
        <ItemList items={this.props.items} mid={this.props.mid} />
        <div className="center"> _______ </div>
      </div>
    )
  }
}

const mapStatetoProps = state => ({
});

const mapDispatchtoProps = dispatch => ({
  editMenuName: (id, name) => dispatch(editMenuName(id, name))
});

export default connect(mapStatetoProps, mapDispatchtoProps)(Menu)