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

    const {name,phone, address:{city, street, suite, zipcode}} = infoDetails
   
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
                        {name??`Not Found`}
                    </Typography>
              
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        city:  {  city ?? `Not Found`}
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        street:  {street ?? `Not Found`}
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        suite:  { suite ?? `Not Found`}
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        zipcode:  {zipcode ?? `Not Found`}
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        phone:  {phone ?? `Not Found`}
                    </Typography>
                </Paper>
            </ProfileContainer>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
