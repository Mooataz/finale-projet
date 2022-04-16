import * as React from 'react';
import { useState } from 'react'
import price_1 from '../../img/price_1.jpg'
import price_2 from '../../img/price_2.jpg'
import price_3 from '../../img/price_3.jpg'
import {useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import {Form,ListGroup} from 'react-bootstrap'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Price() {
  const models=useSelector(state=>state.reducerms.model);
  const {id}=useParams()
  const findModel=models.find(el=>el.id==id)

  const [carte,setCarte]=useState(0);
  const [afficheur,setAfficheur]=useState(0);
  const [circuit,setCircuit]=useState(0);
  const [bat,setBat]=useState(0);
  return (
    <div >
      {findModel.modele}  <br/><br/><br/>
      
      Liste des prix hors taxe:<br/><br/>
    <ListGroup >
  <ListGroup.Item style={{  backgroundColor :"#9CC4D2"}}>Carte mere = {findModel.pcba}dt</ListGroup.Item>
  <ListGroup.Item style={{  backgroundColor :"#9CC4D2"}}>Afficheur = {findModel.block}dt</ListGroup.Item>
  <ListGroup.Item style={{  backgroundColor :"#9CC4D2"}}>Circuit de charge = {findModel.sub}dt</ListGroup.Item>
  <ListGroup.Item style={{  backgroundColor :"#9CC4D2"}}> Batterie = {findModel.battery}dt</ListGroup.Item>
</ListGroup>

<br/><br/>voules-vous reparer <br/> <br/>
          <Stack direction="row" spacing={2}>
        <Item> 
          <Form.Check aria-label="option 1"  onClick={(e)=>(e.target.checked)? setCarte(findModel.pcba):setCarte(0)}/>
        </Item>
        <Item>Carte mere</Item>
      </Stack><br></br>
      <Stack direction="row" spacing={2}>
        <Item>
        <Form.Check aria-label="option 1" onClick={(e)=>(e.target.checked)? setAfficheur(findModel.block):setAfficheur(0)} />
        </Item>
        <Item>Afficheur</Item>
      </Stack>
      <br></br>
      <Stack direction="row" spacing={2}>
        <Item>
        <Form.Check aria-label="option 1" onClick={(e)=>(e.target.checked)? setCircuit(findModel.sub):setCircuit(0)}/>    
        </Item>
        <Item>          
          circuit de charge   
        </Item>
      </Stack>
      <br></br>
      <Stack direction="row" spacing={2}>
        <Item>
        <Form.Check aria-label="option 1" onClick={(e)=>(e.target.checked)? setBat(findModel.battery):setBat(0)}/>      
        </Item>
        <Item>
        Batterie

        </Item>
      </Stack>
   <br/>
  <br/><br/>
  <p style={{  backgroundColor :"#B6C273"  }}>  Montant total = {(carte+afficheur+circuit+bat)*1.2} dt</p>
  
  
  </div>
  )
}

export default Price