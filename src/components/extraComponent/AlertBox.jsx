import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({open, handleClose, dialogDeleteContent, deleteConfirmed}) {
  return (
    <div >
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        Are you sure you want to delete `{dialogDeleteContent}` record ?
        </DialogTitle>
        <DialogActions>
          <Button variant='contained' onClick={deleteConfirmed}>YES</Button>
          <Button variant= 'contained' onClick={handleClose} autoFocus>NO</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
