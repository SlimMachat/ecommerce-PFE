export const addItemToCart = (cartItems, itemToAdd) => {

  const itemAdded = itemToAdd[0];
  const qty = itemToAdd[1];
  const color = itemToAdd[2];
  const size = itemToAdd[3];

  // CHECK IF ITEM BEING ADDED ALREADY EXISTS IN CART
  const existingCartItem = cartItems.find(item => item.id === itemAdded.id);
  //  IF YES, ADD 1 TO QTY
  if (existingCartItem) {
    return cartItems.map(cartItem => (
      cartItem.id === itemAdded.id
        ? {
          ...cartItem,
          quantity: cartItem.quantity + 1,
          color,
          size
        }
        : cartItem
    ));
  }
  // IF NEWLY ADDED ITEM, SET QTY TO 1
  return [...cartItems, { ...itemAdded, quantity: qty, color, size }];
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const itemRemoved= itemToRemove[0];

  // CHECK IF ITEM BEING REMOVED EXISTS IN CART
  const existingCartItem = cartItems.find(cartItem => cartItem.id === itemRemoved.id);

  // IF THERE'S ONLY ONE ITEM, REMOVE ITEM ENTIRELY
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== itemRemoved.id)
  }
  // IF QTY > 1, SUBTRACT 1 FROM QTY
  return cartItems.map(cartItem => cartItem.id === itemRemoved.id
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem
  )
}