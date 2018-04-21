import React, { Component } from 'react';
import { connect } from 'react-redux'

import Menu from './Menu'
import MenuTitleInput from './MenuTitleInput'
import { removeMenu } from '../actions'
import { addMenu } from '../actions'

import add from '../icons/add.png'


class MenuList extends Component {
  constructor(props) {
    super(props);
    this.handleAddingMenu = this.handleAddingMenu.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.state ={
      addingMenu: false
    }
  }

  handleAddingMenu() {
    this.setState({addingMenu: true})
  }

  onSubmit(name) {
    this.props.addMenu(name);
    this.setState({addingMenu: false})
  }

  onCancel() {
    this.setState({addingMenu: false})
  }

  render() {
    const addField = (this.state.addingMenu
        ? <MenuTitleInput currName='' onSubmit={this.onSubmit} onCancel={this.onCancel} />
        : <div className="Buttons" onClick={this.handleAddingMenu}>
            <input type="image" src={add} name="New Menu" alt="Add_button"/>
            New Menu
          </div>);

    return (
      <div>
        { this.props.menus.map(menu =>
            <Menu key={menu.id} mid={menu.id} mname={menu.name} items={menu.items}
                  remMenu={() => this.props.removeMenu(menu.id)}/>
        )}
        <div className="MenuTitleStyle">
          {addField}
        </div>
      </div>
    )
  }
}

const mapStatetoProps = state => ({
  menus: state.menus
});

const mapDispatchtoProps = dispatch => ({
  removeMenu: id => dispatch(removeMenu(id)),
  addMenu: name => dispatch(addMenu(name))
});

export default connect(mapStatetoProps, mapDispatchtoProps)(MenuList)