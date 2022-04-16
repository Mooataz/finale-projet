import React from 'react'
import { useState } from 'react'
import { TextField ,Button} from '@mui/material'
import Images from './Images'
import {add} from '../../redux/actions/Actions'
import { useDispatch } from 'react-redux'
import {connect} from 'react-redux'


function UpdateList() {
 const [modele,setModele]=useState();
 const [pcba,setPcba]=useState();
 const [block,setBlock]=useState();
 const [sub,setSub]=useState();
 const [batterie,setBatterie]=useState();
 const [annonce,setAnnonce]=useState();
 const [image,setImage]=useState();

  const pak={
    modele:modele,
        pcba:pcba,
        block:block,
        sub:sub,
        battery:batterie,
        src:annonce,
        srcimg:image
  }
  return (
    <div><br/> <h2>Ajouter un modele</h2><br/>
     
     <TextField id="standard-basic" label="Nom de modele" variant="standard"
      onChange={(e)=>setModele(e.target.value)}/>  <br/>

     <TextField id="standard-basic" label="Prix carte mere" variant="standard"  type="number"
      onChange={(e)=>setPcba(e.target.value)}/> <br/>

     <TextField id="standard-basic" label="Prix afficheur" variant="standard"  type="number"
      onChange={(e)=>setBlock(e.target.value)}/> <br/>

     <TextField id="standard-basic" label="Prix circuit de charge" variant="standard" type="number"
      onChange={(e)=>setSub(e.target.value)} /> <br/>

     <TextField id="standard-basic" label="Prix batterie" variant="standard"  type="number"
      onChange={(e)=>setBatterie(e.target.value)}/>  <br/>

     <TextField id="standard-basic" label="Liens vers annonce" variant="standard"  type="url"
      onChange={(e)=>setAnnonce(e.target.value)}/> <br/>

     <TextField id="standard-basic" label="Lien vers une image de produit" variant="standard"
      onChange={(e)=>setImage(e.target.value)}/> <br/>
   
<br/><br/>
<Button variant="contained" onClick={add(pak)} >Enregistrer</Button>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
 <Images />
 
    </div>
  )
}
export default UpdateList
