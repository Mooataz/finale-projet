import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import {modif} from '../../redux/actions/Actions'
import { connect } from 'react-redux';
import {CssTextField,RedditTextField,ValidationTextField } from './annexList'
import { useSelector } from 'react-redux';
import { useState } from 'react';

// const top100Films = [mapStateToProps.listModele.map((el,key)=>{return el.modele})]

function ChangeList(props) {
  const models=useSelector(state=>state.reducerms.model);
  const filterModels=models.map((el)=>el.modele)
  const [name1,setName1]=useState("Vivo_V23")
  const findModel=models.find((el)=>el.modele==name1)

  const [pak,setPak]=useState();
// setPak.id(models.length+1);
const handleChange=(e)=>{setPak({...pak,[e.target.name]:e.target.value});

}
console.log(pak)
  
  return (
    <div><br/>
<h2>ChangeList</h2><br/><br/>
<Box
      component="form"
      noValidate
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '30% 30%' },
        gap: 2,
      }}
    >
      
 
    
       <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={filterModels}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Models" />}
      onChange={(e,value)=>setName1(value)}
      
    /> 
   

      <ValidationTextField
        label="Nouveau nom"
        variant="outlined"
        id="validation-outlined-input"
        name='modele'
        onChange={handleChange}
      />
      <CssTextField label="Prix carte mere"  disabled id="custom-css-outlined-input" value={findModel.pcba} />
      <RedditTextField
        label="Nouveau"
        Value={findModel.pcba}
        id="reddit-input"
        variant="filled"
        type="number"
        name='pcba'
        onChange={handleChange}

      />
       <CssTextField label="Prix Afficheur" value={findModel.block} disabled id="custom-css-outlined-input" />
      <RedditTextField
        label="Nouveau"
        defaultValue
        id="reddit-input"
        variant="filled"
        type="number"
        name='block'
        onChange={handleChange}

      />
      <CssTextField label="Prix circuit de charge" value={findModel.sub} disabled id="custom-css-outlined-input" />
      <RedditTextField
        label="Nouveau"
        defaultValue
        id="reddit-input"
        variant="filled"
        type="number"
        name='sub'
        onChange={handleChange}

      />
      <CssTextField label="Prix batterie" value={findModel.battery} disabled id="custom-css-outlined-input" />
      <RedditTextField
        label="Nouveau"
        id="reddit-input"
        variant="filled"
        type="number"
        name='battery'
        onChange={handleChange}

      />
      <CssTextField label="Liens vers site originale" value={findModel.src} disabled id="custom-css-outlined-input" />
      <ValidationTextField
        label="Url"
        required
        variant="outlined"
        id="validation-outlined-input"
        name='src'
        onChange={handleChange}

      />
      <CssTextField label="Liens vers une image" value={findModel.srcimg} disabled id="custom-css-outlined-input" />
      <ValidationTextField
        label="Url"
        required
        variant="outlined"
        id="validation-outlined-input"
        name='srcimg'
        onChange={handleChange}

      />

   <br/><br/>
    <Button variant="contained" >Enregistrer</Button>

    <br/> 
   
   </Box>
    </div>
  )
    }
export default ChangeList