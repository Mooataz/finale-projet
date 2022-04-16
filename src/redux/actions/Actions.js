import {ADD,MODIF} from "./Action-type"

export const add=(pak)=>{
    return{
        type:ADD,
        payload:pak
    }
}

export const modif=(models)=>{
    return{
        type:MODIF,
        playload:models
    }
}