import {configureStore} from '@reduxjs/toolkit'
import CrudSlice from './crudReducer/CrudSlice'

const Store= configureStore({
    reducer: {
        crud: CrudSlice
    },
    devTools:true
})
export default Store; 


 