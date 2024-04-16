import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Modal1({open,setOpen,handleOpen,handleClose}) {
 


  return (
    <div>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography  id="modal-modal-title" variant="h4" component="h2">
          Contact Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           03323502803
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           sheikhfaizaan608@gmail.com
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           faizaanimran333@gmail.com
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
