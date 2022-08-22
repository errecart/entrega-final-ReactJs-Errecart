import { useState } from 'react'
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

import ItemDetails from './ItemDetails'


const ItemDetailConteiner = () => {
const [items, setitems]= useState([])

const {productoId} = useParams()

useEffect(() => {
  const db = getFirestore()
  const queryProduct  =  doc(db, 'items', productoId)
  getDoc(queryProduct)
  .then(resp =>  setitems( { id: resp.id, ...resp.data() } ))
}, [productoId])



return (
    <>
      <ItemDetails items={items}/>
    </>
 )
}
   
export default ItemDetailConteiner 



