import { createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllUser = createAsyncThunk(`fetchUsers`, 
 async()=>{
    try{
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        return data; 

    }catch(err){
        return err.message
    }
 }) 


 export const createUser = createAsyncThunk('createUser', 
    async(userDetails)=>{
        try{
            const {data} = await axios.post(`https://jsonplaceholder.typicode.com/users`, 
                JSON.stringify(userDetails))
            return data
            
        }
        catch(err){
            return err.message
        }
    }
 )

 export const updateUser = createAsyncThunk('updateExistingUser', 
    async(updatedDetail)=>{

        try{
            const {data} = await axios.put(`https://jsonplaceholder.typicode.com/users/${updatedDetail.id}`,
                (updatedDetail))
            return data
        }catch(err){
            return err.message
        }
    }
 )

 export const deleteUser = createAsyncThunk('deleteExistingUser', 
    async(deletingUserDetailId)=>{
        try {
            const {data} = await axios.delete(`https://jsonplaceholder.typicode.com/users/${deletingUserDetailId}`)
            if(Object.keys(data).length===0){
                return deletingUserDetailId; 
            }
        } catch (err) {
            return err.message
        }
    }
 )