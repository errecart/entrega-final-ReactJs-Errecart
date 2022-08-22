import React from 'react'
import './styles/CardI.css'
import Item from './Item'

const ItemsList = ({ items }) => {
  return (
    <div className='itemList'>
        {items.map(item => <Item item={item} key={item.id} />)}
    </div>
  )
}

export default ItemsList
