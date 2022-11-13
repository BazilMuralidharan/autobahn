import React, {useEffect, useMemo} from "react";
import {useParams, useLocation} from 'react-router-dom';
import axios from "axios";
import { useState } from "react";

import {useSelector, useDispatch} from 'react-redux'
import { getOneUserDatailsFromMetaData } from "../../redux/crudReducer/CrudSlice"; 
import { useCallback } from "react";
import FormUser from "../extraComponent/FormUser";

export default function FormCard(){
    const {id } = useParams();
    const [formData, setFormData] = useState({})
    const {crud:{metaData}} = useSelector(state =>state)

    const cb =()=>{
        const fixDataForm =metaData.find(el=>el.id === +id)
        setFormData(fixDataForm)
        console.log(fixDataForm)
    }
///// NOTE --- persisting the data even after refresh __techinq:inside this useEffefct  callling function and add it to depdency 
/////// cg() -dep: cb in useEfffect 
    useEffect(()=>{        
        cb()
    },[id, cb])

    return (
        <div>
            <h1>FORM: {id} :::: {formData?.name}</h1> 
            <FormUser/>
        </div>
    )
}