
// import './App.css';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Card from './components/reusableComponent/Card';
import {getAllUser, createUser, updateUser, deleteUser} from './redux/crudReducer/CrudAsyncActions'


function App() {
  const dispatch = useDispatch()
  const {crud:{metaData}} = useSelector(state=>state)
  // console.log(metaData)


  useEffect(()=>{
    let componentMount = true; 
    if(componentMount){
      dispatch(getAllUser())
    }
    return ()=>{
      componentMount = false
    }
  },[])


  const postData= {
    id:"1",
    name: "xxxxxxxxxxyyyxxxxClementina DuBuque",
    username: "xxxxxxxxxxxxxxxxxMoriah.Stanton",
    email: "xxxxxxxxxxxxxxxRey.Padberg@karina.biz",
    phone: "024-648-3804"
    
  }

const post = ()=>{
  dispatch(createUser(postData))
}
const update1 = ()=>{
  let id = 1;
  let pp = postData 
  dispatch(updateUser(postData)) 
}

const deleteID =()=>{
  dispatch(deleteUser(1))
} 

return (
    <div className="App">
      {/* <h1>CRUD_AUTOBAHN_REDUX</h1>
      <button onClick={post}>ClickPost</button>
      <button onClick={update1}>Update-1-Post</button>
      <button onClick={deleteID}>DeLETTEE+++(1)+++</button> */}

      <Header/>

      <Layout/>
      
    </div>
  );
}

export default App;
