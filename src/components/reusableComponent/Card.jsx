import React, {useEffect} from "react";
import {useParams, useLocation} from 'react-router-dom';
import axios from "axios";
import { useState } from "react";

import {useSelector, useDispatch} from 'react-redux'
import { getOneUserDatailsFromMetaData } from "../../redux/crudReducer/CrudSlice"; 

export default function FormCard(){
    const {id }= useParams();
    
 

    const {crud:{metaData}} = useSelector(state =>state)
    console.log(metaData);

    const dispatch  = useDispatch() 
 
    useEffect(()=>{
        dispatch(getOneUserDatailsFromMetaData(id))
        
    },[])
    return (
        <div>
            <h1>FORM: {id}</h1>
            
        </div>
    )
}