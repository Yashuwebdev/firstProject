import { createContext, useEffect, useState } from "react"
                        
export let CartContext = createContext()
      
 
function CartContextProvider({ children }) {
   function addToCart (){
    
   }
    
    return (
        <>

            <CartContext.Provider value={{addToCart}}>
                {children}
            </CartContext.Provider>

        </>
    )
}
export default CartContextProvider