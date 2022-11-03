import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Delete, Edit, Info } from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import LinearLoader from "../extraComponent/LinearLoader";
import AlertDialog from "../extraComponent/AlertBox";
import { useState } from "react";
import { deleteUser } from "../../redux/crudReducer/CrudAsyncActions";
import InfoModalPopUp from "../extraComponent/InfoModal";
import {useNavigate} from 'react-router-dom'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "grey",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

export default function TableGrid() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {
        crud: { metaData, loading },
    } = useSelector((state) => state);

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [dialogContent, setDialogContent] = useState('')
    const [deleteId, setDeleteId] = useState('');
 
    const [openInfoModal, setOpenInfoModal] = useState(false);
    const [infoDetailsUser, setInfoDetailsUser] = useState()
    const handleCloseInfo = () => setOpenInfoModal(false);

    const handleInfo=(userDetail)=>{
        setOpenInfoModal(true)
        setInfoDetailsUser(userDetail)
    }

    const handleClose = () => {
        setOpenDeleteDialog(false);
    };

    const deleteItem = (id, name) => {
        setOpenDeleteDialog(true);
        setDialogContent(name)
        setDeleteId(id)
    };

    const deleteConfirmed=()=>{
        dispatch(deleteUser(deleteId))
        setOpenDeleteDialog(false)
    }
    const editItem=(userInfo) =>{
        navigate(`/update/${userInfo.id}`)
    }
    return (
        <TableContainer component={Paper}>
            {loading && <LinearLoader />}
            <Table sx={{ width: "inherit" }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">NAME</StyledTableCell>
                        <StyledTableCell align="center">EMAIL</StyledTableCell>
                        <StyledTableCell align="center">USERNAME</StyledTableCell>
                        <StyledTableCell align="center">PHONE</StyledTableCell>
                        <StyledTableCell align="center">WEBSITE</StyledTableCell>
                        <StyledTableCell align="center">INFO</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {metaData.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row" align="center">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.email}</StyledTableCell>
                            <StyledTableCell align="center">{row.username}</StyledTableCell>
                            <StyledTableCell align="center">{row.phone}</StyledTableCell>
                            <StyledTableCell align="center">{row.website}</StyledTableCell>

                            <StyledTableCell align="center">
                                <IconButton onClick={() => deleteItem(row.id, row.name)}>
                                    <Delete />
                                </IconButton>
                                <IconButton onClick={()=>editItem(row)} >
                                    <Edit />
                                </IconButton>
                                <IconButton onClick={()=>handleInfo(row)}>
                                    <Info />
                                </IconButton>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
                    <AlertDialog 
                        open={openDeleteDialog} 
                        handleClose={handleClose}  
                        dialogDeleteContent = {dialogContent}
                        deleteConfirmed = {deleteConfirmed}
                    />
                    <InfoModalPopUp
                        open={openInfoModal} 
                        handleClose={handleCloseInfo}
                        infoDetails= {infoDetailsUser}
                    />
        </TableContainer>
    );
}
