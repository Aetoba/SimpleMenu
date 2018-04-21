const { List } = require('immutable');

export const test = {
  menus: List([
    {
      id: 300,
      name: 'Food',
      items: [111, 112, 113]
    },
    {
      id: 301,
      name: 'Drinks',
      items: [115]
    },
    {
      id: 303,
      name: 'Desserts',
      items: [114, 110]
    }
  ]),

  items: List([
    {
      id: 111,
      name: 'Pizza',
      price: '3$'
    },
    {
      id: 112,
      name: 'Burger',
      price: '4$'
    },
    {
      id: 113,
      name: 'French Fries',
      price: '5$'
    },
    {
      id: 115,
      name: 'Water',
      price: '200$'
    },
    {
      id: 114,
      name: 'Icecream',
      price: '10$'
    },
    {
      id: 110,
      name: 'Milkshake',
      price: '4$'
    }
  ])
};