import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import MailIcon from '@mui/icons-material/Mail';
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
  borderRadius:'20px'
};
const fontFam = {
  fontFamily: "'Barlow Condensed', sans-serif",
  fontFamily: "'Dancing Script', cursive",
  fontFamily: "'Edu VIC WA NT Beginner', cursive",
  fontFamily: "'Indie Flower', cursive",
  fontFamily: "'Lobster', cursive",
  fontFamily: "'Oswald', sans-serif",
  fontFamily: "'Teko', sans-serif",
  fontFamily: "'ZCOOL QingKe HuangYou', sans-serif",
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
          <Typography id="modal-modal-description" sx={{ mt: 2,display:'flex',alignItems:'center',fontSize:'18px' }}>
           <SmartphoneIcon style={{margin:'10px'}}/> 03323502803
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2,display:'flex',alignItems:'center',fontSize:'18px' }}>
           <MailIcon style={{margin:'10px'}}/>  sheikhfaizaan608@gmail.com
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2,display:'flex',alignItems:'center',fontSize:'18px' }}>
           <MailIcon style={{margin:'10px'}}/>  faizaanimran333@gmail.com
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
