
import React from 'react'
import { useState } from 'react';
import {Card,Button,ListGroup,Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Modele({model}) {

  return (
    <div>


  <Card style={{  backgroundColor :"#CCDBE1"}} >
  <Card.Title>{model.modele}</Card.Title>
     <center><Card.Img variant="" src={model.srcimg} style={{ width: '300px', height:'300px' }}/></center> 
      <Card.Body>
      
      <Card.Text></Card.Text>
     
    <Button variant="outline-secondary" >  <Link to={`/Price/${model.id}`} > Price of reparing </Link> </Button>
    <Button variant="outline-secondary" ><a href={model.src}>More details</a> </Button>
    </Card.Body>
    
   </Card>

  

       
    </div>
  )
}

export default Modele 