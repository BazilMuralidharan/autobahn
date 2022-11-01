import http from './baseUrl';

const getUserDetails = ()=>http.get(`/users`)
const specificUser=(id)=>http.get(`/users/${id}`)
const createUser=(data)=> http.post(`/users`, data)
const updateUser =(id, data)=>http.put(`/users/${id}`, data)
const deleteUser = (id)=>http.delete(`/users/${id}`)
const removeAllUser = ()=>http.delete(`/users`)

const CrudService ={
    getUserDetails,
    specificUser,
    createUser,
    updateUser,
    deleteUser,
    removeAllUser
}

export default CrudService; 