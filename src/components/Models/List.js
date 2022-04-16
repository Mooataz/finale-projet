import React from 'react'
import { useSelector } from 'react-redux'


import Modele from './Modele'


const List=() =>{
  const models=useSelector(state=>state.reducerms.model);

  return (
    <div>
      {
        models.map((model,key)=>
        (
        <Modele model={model} /> )
        )}
    </div>
  )
}

export default List



