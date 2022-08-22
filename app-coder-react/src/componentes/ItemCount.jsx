import './styles/CardDetails.css'

import React, { useState } from 'react'
import swal from 'sweetalert'

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)

        const data = (count) =>{
            swal({ 
                title:"Se a Agregagdo al Carrito",
                text:  count + "Productos",
                timer:1500,
              })
    }

    const suma = () => {
        if(count < stock){
           setCount(count + 1) 
        }else{swal({ 
                title:"objetos maximos alcanzados",
                timer:1500,
              })
        }
    }
    const resta = () => {
        if(count > initial){
            setCount(count - 1) 
         }else{

            swal({ 
                title:`compra minima: ${initial}`,
                timer:1500,
              })
        }
    }
  return (
    <>
    <div className='CardCompra'>
     <button className='seleccion' onClick={suma}>+</button>

     {count}

     <button className='seleccion' onClick={resta}>-</button>
     <br></br>
     <button onClick={() =>{ onAdd(count)}}>Agregar al Carrito</button> 
    </div>
     
     
    </>
  );
}

export default ItemCount
