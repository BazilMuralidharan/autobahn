import styled from "@emotion/styled"
import FormCard from "../reusableComponent/Card"
import TableGrid from "../reusableComponent/TableGrrid"

import {BrowserRouter, Routes, Route} from 'react-router-dom'
const Container = styled.div`
    margin-top:100px ; 
`

export default function Layout(){
    return(
        // <BrowserRouter>
            <Container>
                <Routes>
                    <Route exact path="/" element={<TableGrid/>}/>
                    <Route exact path="/dashboard" element={<TableGrid/>}/>
                    <Route path="/update/:id" element={<FormCard/>}/>
                    <Route path="*" element={<h1>NOT FOUND</h1>}/>
                </Routes>
            </Container> 
        // </BrowserRouter>
    )
}

