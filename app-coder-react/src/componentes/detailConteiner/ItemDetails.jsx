import '../styles/CardDetails.css'

import { useState } from 'react';
import { Card} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useCartContext } from '../CartContext';

import ItemCount from '../ItemCount'
import swal from 'sweetalert'

 const ItemDetails = ({items = {}}) => {
  const [cambio, setcambio] = useState(true)


    const {agregarCarrito, cartList} = useCartContext()

    const onAdd = (count) =>{
      swal({ 
        title:"Se a Agregagdo al Carrito",
        text:  count + "Productos",
        timer:1500,
      })

        agregarCarrito({...items, cantidad:count})
        setcambio(false)
    }

    console.log(cartList)
  
  return ( 
<>
    <div className='cardDi'>
    <Card className='cardDt'>
       <Card.Body>
      <Card.Img className='cardF' variant="top" src={items.image} />
         <Card.Title className='title2'>{items.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
          <div className='cardInfo'>
           Stock:{items.stock}
           <br></br>
           Price:{items.Price}$ c/u
          <br></br>
          </div>
          <div className='data'>
           {items.data}
         <br></br>
         </div>
        {
        cambio ?
        <ItemCount initial={1} stock={40} onAdd={onAdd}/>:

        <Link to='/cart'>
        <button className='changeButton' >Ir al Carrito</button>
        </Link> 
    
         }
           <br></br>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
</>


  )
}

export default ItemDetails
