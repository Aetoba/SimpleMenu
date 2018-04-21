import React, { Component } from 'react';
import MenuList from './MenuList'

import add from '../icons/add.png'
import edit from '../icons/edit.svg'
import del from '../icons/delete.png'
import save from '../icons/save.png'
import cancel from '../icons/cancel.jpg'

import '../css/App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Legend">
          <h3>LEGEND</h3>
          <ul className="Legend-items">
            <li>
              <img src={add} alt="Add_button"/>
              Add entry
            </li>
            <li>
              <img src={edit} alt="Edit_button"/>
              Edit entry
            </li>
            <li>
              <img src={del} alt="Delete_button"/>
              Delete entry
            </li>
            <li>
              <img src={save} alt="Save_button"/>
              Save changes
            </li>
            <li>
              <img src={cancel} alt="Cancel_button"/>
              Cancel changes
            </li>
          </ul>
        </div>

        <div className="Menus">
          <MenuList />
        </div>
      </div>
    );
  }
}

export default App;
