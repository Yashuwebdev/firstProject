import { createContext, useEffect, useState } from "react"
import { BACKEND_API } from "../backendAPI";
export let CartContext = createContext()
function CartContextProvider({ children }) {

    
    
    
    async function addToCart(productId) {
        let  userId =   localStorage.getItem("userId")

        try {
            if (userId) {
                let res = await fetch(`${BACKEND_API}/api/cart/add`, {
                    method: "post",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify({ userId, productId })
                });
                let data = await res.json();
                alert("product Add !")
                // fetchCartData()
            } else {
                alert("login your account !")
            }
        } catch (error) {
            console.log(error)
        }
    };



    return (
        <>
            <CartContext.Provider value={{ addToCart }}>
                {children}
            </CartContext.Provider>

        </>
    )
}
export default CartContextProvider