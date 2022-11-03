import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Paper } from '@mui/material';

import styled from '@emotion/styled';

const ProfileContainer = styled.div`
  display:flex;
  flex-direction:column;
 align-items:center;

`

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}; 

export default function InfoModalPopUp({handleOpen, open, handleClose, infoDetails}) {



    const nameofUser = infoDetails?.name ?? 'NOT FOUND';
    const phoneofUser = infoDetails?.phone ?? 'NOT FOUND';
    const cityofUser = infoDetails?.address?.city ?? 'NOT FOUND';
    const streetofUser = infoDetails?.address?.street ?? 'NOT FOUND';
    const suiteofUser = infoDetails?.address?.suite ?? 'NOT FOUND';
    const zipcodeofUser = infoDetails?.address?.zipcode ?? 'NOT FOUND';

   
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <ProfileContainer>
                <Avatar sx={{bgcolor:"grey" }}></Avatar>
                <Paper sx={{padding:"20px"}}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {nameofUser}
                    </Typography>
                     <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                         {phoneofUser}
                     </Typography>
                     <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                         {cityofUser}
                     </Typography>
                     <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                         {streetofUser}
                     </Typography>
                     <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                         {suiteofUser}
                     </Typography>
                     <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        {zipcodeofUser}
                     </Typography>
                </Paper>
            </ProfileContainer>
          </Box>
        </Fade> 
      </Modal>
    </div>
  );
}
