import React from 'react'
import './styles/Carrito.css'

import{Button, Form} from 'react-bootstrap';
import { useCartContext } from './CartContext'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"


const CartConteiner = () => {
  const {cartList, eliminarCarrito,removeCarrito,precioTotal,contenido} = useCartContext()


  const generarComprar = async() =>{
    const order = {}
    order.buyer = {name: 'Juan', phone: '1122395514', email: 'jierrecart5@gmail.com'}

    order.items = cartList.map(items => {
      return {
          id: items.id, 
          name: items.name,
          Price: items.Price,
          cantidad: items.cantidad,
          stock: items.stock
      }})

  order.total = precioTotal()

const db = getFirestore()
const queryOrders = collection(db, 'orders')
addDoc(queryOrders, order)
.then(({id})=> console.log(id))
.catch(err => console.log(err))
 

const stockCollectiom = collection(db, 'items')

const newStock = query(
    stockCollectiom,                  
    where( documentId() , 'in', cartList.map(prod => prod.id) )         
)

const batch = writeBatch(db)

await getDocs(newStock)
.then(resp => console.log(resp))
.then(resp => resp.docs.forEach(res => batch.update(res.ref, {
    stock: res.data().stock - cartList.findIndex(item => item.id === res.id).cantidad
}) ))
.catch(err => console.log(err))

batch.commit()

} 
      
  return (
    <div className='contenido'>

    <div className=' dataBuy'>
    {contenido()}
      {
        
        cartList.map(items=> 
          <div className='dataConteiner' key={items.id} >
            <img className='imgConteiner'  src={items.image} alt="foto del producto seleccionado" />
            <div className='infoConteiner'>
            <h3>{items.name}</h3>
          Precio: {items.Price}$ c/u
          Cantidad: {items.cantidad}
            </div>
            <button  onClick={() => removeCarrito(items.id)}> X </button>      
            <br></br>
          

          </div>
          )
          
      }
            
            <br></br>
        <Button type="button" className="eliminateAll btn btn-primary mt-2" onClick={eliminarCarrito}>Eliminar todos los productos del Carrito</Button>

    </div>
      <div>
      <Form className='formBuy'>

      <Form.Group className="mb-3" controlId="formBasicName" >
        <Form.Label>Name</Form.Label>
     <Form.Control type="name" placeholder="Name" />

     <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Telephone</Form.Label>
        <Form.Control type="number" placeholder="Enter Phone Number" />
      </Form.Group>

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Verify Email</Form.Label>
        <Form.Control type="email" placeholder="Verify Email" />
      </Form.Group>
      <Button type="button" className="btn btn-primary mt-2" onClick={generarComprar}>Generar orden</Button>
    </Form>
    <br></br>
    <h5>Precio Total: {precioTotal()}$</h5>
            
    </div>


  </div>
  )
 }

export default CartConteiner    
