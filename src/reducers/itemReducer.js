const { List } = require('immutable');

const itemReducer = (state = List(), action = {}) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return state.push({id: action.itemId, name: action.name, price: action.price});

    case 'REMOVE_ITEM':
      return state.delete(state.findIndex(item => item.id === action.itemId));

    case 'EDIT_ITEM':
      return state.map(item =>
        (item.id === action.itemId)
          ? {id: item.id, name: action.name, price: action.price}
          : item
      );

    default:
      return state;
  }
};

export default itemReducer