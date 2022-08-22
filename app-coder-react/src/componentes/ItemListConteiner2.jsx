import React from 'react'
import './styles/CardI.css'

import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {collection, getDocs, getFirestore, query,where }  from 'firebase/firestore'

import ItemList from './ItemList'
import Loading from './Loading'


const ItemListConteiner2 = () => {
const [items, setItems] = useState([])
const [loading, setloading] = useState(true)


const {  categoriaId } = useParams()


useEffect(() =>{
  getItemsF()
},[categoriaId])

const getItemsF = () =>{
  const db = getFirestore()
  const queryCollection = collection(db,'items')
  const queryCollectionFilt = categoriaId ?
                              query(queryCollection,where('categoria','==',categoriaId))
                              :
                              queryCollection
  getDocs(queryCollectionFilt)
  .then(res=>setItems(res.docs.map(prod =>({id:prod.id, ...prod.data()}))))
  .catch(err=>console.log(err))
  .finally(() => setloading(false))
}


  return (
    <div>

    {loading ? 
                <Loading />
                :
                <ItemList items={items}/>       
                }

      
      
    </div>
  )
 }

export default ItemListConteiner2
