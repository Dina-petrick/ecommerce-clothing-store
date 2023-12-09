import { createContext, useEffect, useState } from "react";


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {}
})


const addProductCart = (cartItems, productToAdd) => {
  //if the cart Item exist
  let existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  // if is it exist add quantity
  if(existingCartItem){
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
    {...cartItem, quantity : cartItem.quantity + 1} : 
    cartItem
    )
  }
  // if not exist add a new array 
  return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeItemCart = (cartItems, productToRemove) => {
   let existingItem = cartItems.find(cartItem => cartItem.id === productToRemove.id);

   if(existingItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
   }

   return cartItems.map(cartItem => cartItem.id === productToRemove.id ?
    {...cartItem, quantity: cartItem.quantity - 1} : cartItem
    )
} 
 
const clearCartItem = (cartItems, itemToClear) => {
  return cartItems.filter(cartItem => cartItem.id !== itemToClear.id)
} 


const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const [cartItems, setCartItems] = useState([]);
    const [count , setCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0)


    useEffect(() => {
        let countValue = cartItems.reduce((total, cartItem) => {
          return total + cartItem.quantity}, 0);
          setCount(countValue)
    }, [cartItems])

    useEffect(() => {
      let totalValue = cartItems.reduce((total, cartItem) => {
        return total + cartItem.quantity * cartItem.price}, 0);
        setCartTotal(totalValue)
  }, [cartItems])



    const addItemToCart = (productToAdd) => {
      setCartItems(addProductCart(cartItems, productToAdd))
    }

    const removeItemFromCart = (productToRemove) => {
      setCartItems(removeItemCart(cartItems, productToRemove))
    }

    const clearItemFromCart = (itemToClear) => {
      setCartItems(clearCartItem(cartItems, itemToClear))
    }


    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, removeItemFromCart, clearItemFromCart, count, cartTotal};


  return (
    <CartContext.Provider value= {value}>{children}</CartContext.Provider>
  )
}

export default CartProvider;