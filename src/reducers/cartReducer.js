const initialState = {
  items: [
    {
      id: 1,
      price: 1.0,
      name: "test 1",
      description: "1 Lorem ipsum dolor sit amet consectetu"
    },
    {
      id: 2,
      price: 2.5,
      name: "test 2",
      description: "2 Lorem ipsum dolor sit amet consectetu"
    },
    {
      id: 3,
      price: 3.75,
      name: "test 3",
      description: "3 Lorem ipsum dolor sit amet consectetu"
    }
  ],
  addedItems: [],
  total: 0
};
const CartReducer = (state = initialState, action) => {
  return state;
};

export default CartReducer;
