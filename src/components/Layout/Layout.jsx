import styled from "@emotion/styled"
import Card from "../reusableComponent/Card"
import TableGrid from "../reusableComponent/TableGrrid"


const Container = styled.div`
    margin-top:100px ; 


`


export default function Layout(){
    return(
        <Container>
            <Card/>
            <TableGrid/>
        </Container>
    )
}