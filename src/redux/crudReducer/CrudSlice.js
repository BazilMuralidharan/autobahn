import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

import { getAllUser, createUser, updateUser, deleteUser} from './CrudAsyncActions'

const initialState={
        metaData:[],
        loading:false,
        error:false,
        status : false,
        
}
const CrudReducer = createSlice({
    name:'crudSlice',
    initialState,
    reducers:{
        
    },
    extraReducers(buillder){
        buillder
        .addCase(getAllUser.fulfilled,(state, action)=>{
            state.loading= false
            state.metaData= (action.payload)
        })
        .addCase(getAllUser.pending, (state, action)=>{
            state.loading= true
        })
        .addCase(getAllUser.rejected, (state, action)=>{
            state.loading = false
            state.error = true
        })

        .addCase(createUser.pending, (state, action)=>{
            state.loading= true
        })
        .addCase(createUser.fulfilled, (state, action)=>{
            state.loading= false
            state.metaData.push(action.payload)
        })
        .addCase(createUser.rejected,(state, action)=>{
            state.error = true
        })

        .addCase(updateUser.pending, (state, action)=>{
            state.loading=true
        })
        .addCase(updateUser.fulfilled, (state, action)=>{
            state.loading = false
            const findId= state.metaData.find(el => el.id ===action.payload.id)
            const index = state.metaData.indexOf(findId)
            state.metaData[index] = action.payload
        })
        .addCase(updateUser.rejected, (state,action)=>{
            state.error=true
        })

        .addCase(deleteUser.pending, (state, action)=>{
            state.loading = true
        }) 
        .addCase(deleteUser.fulfilled, (state,action)=>{
            state.loading= false
            const findId = state.metaData.find(el=>el.id === action.payload)
            const indexOfElement = state.metaData.indexOf(findId)
            state.metaData.splice(indexOfElement, 1)
            
        })
        .addCase(deleteUser.rejected, (state, action)=>{
            state.error= true
        })

    }
  
})

export default CrudReducer.reducer; 

