let nextMenuId = 0;
let nextItemId = 0;

export const addMenu = name => {
  return {
    type: 'ADD_MENU',
    id: nextMenuId++,
    name: name,
  }
};

export const removeMenu = id => ({
  type: 'REMOVE_MENU',
  id: id,
});

export const editMenuName = (id, name) => ({
  type: 'EDIT_MENU_NAME',
  id: id,
  name: name,
});

export const addItem = (menuId, name, price) => ({
  type: 'ADD_ITEM',
  menuId: menuId,
  itemId: nextItemId++,
  name: name,
  price: price,
});

export const removeItem = (menuId, itemId) => ({
  type: 'REMOVE_ITEM',
  menuId: menuId,
  itemId: itemId,
});

export const editItem = (itemId, name, price) => ({
  type:'EDIT_ITEM',
  itemId: itemId,
  name: name,
  price: price,
});