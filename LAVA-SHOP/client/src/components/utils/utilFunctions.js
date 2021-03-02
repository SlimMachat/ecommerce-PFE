export const calculateSubtotal = (arr) =>{
  let subtotalCalc = null;
  cart.cartItems.map(calc => {
    const subtotal = calc.price * calc.quantity;
    return subtotalCalc += subtotal;
  });
}