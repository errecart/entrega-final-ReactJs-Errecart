import React from 'react'
import './styles/CardI.css'
import {Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom'



const Item = ({item}) => {

  const {name, image} = item
  return (
  <div className='cardI'>
    <Card className='cardFondo' >
      <Card.Img className='cardFoto' variant="top" src={image} />
      <Card.Body>
        <Card.Title className='title'>{name}</Card.Title>
        <br></br>
        <Card.Text >
        </Card.Text>
        <Link to={`/detalles/${item.id}`}>
        <Button variant="primary">Mas informacion</Button>
        </Link>
      </Card.Body>
    </Card>
  </div>
  )
} 
export default Item