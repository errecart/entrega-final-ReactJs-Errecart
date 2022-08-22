import { useContext,useState,createContext } from "react";
import './styles/Carrito.css'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


const CartContextProvide = ({children})=>{

    const [cartList, setCartList] = useState([])


    const agregarCarrito = (items) => {
        const itemsSelect = cartList.findIndex(Prod => Prod.id === items.id );
        itemsSelect<0?
        setCartList([
            ...cartList,
            items
        ])
        :cartList[itemsSelect].cantidad =cartList[itemsSelect].cantidad + items.cantidad;
        
    }


  

    const contenido = () =>{
        if(cartList.length == 0){
            return(
                <div className="aviso">
                <p>No hay productos en el carrito</p>
                </div>
            )
        }
    }  

    const precioTotal = ()=>{
        return cartList.reduce((prev, act) => prev = prev + (act.Price * act.cantidad) , 0) 

    }

    const productoTotal = ()=>{
        return cartList.reduce((acu, prodA) => acu + prodA.cantidad, 0)
    }


    const removeCarrito = (id) => {
            setCartList( cartList.filter(prod => prod.id !== id ) )
    }
    
    const eliminarCarrito = () =>{
        setCartList([])
    }

    return(
        <>
       <CartContext.Provider value={{
        cartList,
        agregarCarrito,
        eliminarCarrito,
        removeCarrito,
        productoTotal,
        precioTotal,
        contenido,

       }}>
        {children}
       </CartContext.Provider> 
       </>
    )
    
}

export default CartContextProvide     

