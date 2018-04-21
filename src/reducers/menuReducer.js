const { List } = require('immutable');

const menuReducer = (state = List(), action = {}) => {
  switch (action.type) {
    case 'ADD_MENU':
      return state.push({id: action.id, name: action.name, items: []});

    case 'EDIT_MENU_NAME':
      return state.map(menu =>
        (menu.id === action.id)
          ? {...menu, name: action.name}
          : menu
      );

    case 'REMOVE_MENU':
      return state.delete(state.findIndex(menu => menu.id === action.id));

    case 'ADD_ITEM':
      return state.map(menu =>
        (menu.id === action.menuId)
          ? {...menu, items: menu.items.concat([action.itemId])}
          : menu
      );

    case 'REMOVE_ITEM':
      return state.map(menu =>
        (menu.id === action.menuId)
          ? {...menu, items: menu.items.filter(id => id !== action.itemId)}
          : menu
      );

    default:
      return state;
  }
};

export default menuReducer