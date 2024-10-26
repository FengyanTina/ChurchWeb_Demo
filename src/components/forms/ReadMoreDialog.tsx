import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import { Box, Slider } from '@mui/material';
import './form.css'
interface ReadMoreDialogProps {
    open: boolean;
    title:string;
    subtitle?:string;
    content:string;
    onClose: () => void;
  }
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function ReadMoreDialogs({
    open,
    title,
    subtitle,
    content,
    onClose,
  }: ReadMoreDialogProps) {
  

    const [fontSize, setFontSize] = React.useState(16);
    const handleFontSizeChange = (newValue: number | number[]) => {
      setFontSize(newValue as number); // Cast newValue to number
    };


  return (
    <React.Fragment>
      <BootstrapDialog
         open={open}
         onClose={onClose}
        aria-labelledby="customized-dialog-title"  
      >
        <Box className="modal-overlay">
        <Box  className="modal-content" style={{ fontSize: `${fontSize}px` }}>    
        <h1> 
          {title}
        </h1>
       
        {subtitle && (
             <Typography variant='h5'gutterBottom sx={{ m: 0, p: 2 }}>
            {subtitle}
           </Typography>
        )}
        
        <DialogContent dividers>
          <p>
          {content.split("\n").map((paragraph, index) => (
                <Box key={index} sx={{ display: "block", mb: 2 }}>
                  {paragraph}
                </Box>
              ))}
          </p>
         
        </DialogContent>

        <Box style={{ marginTop: "20px", textAlign: "center" }}>
          <label htmlFor="font-size-slider">Adjust text size:</label>
          <Slider
            id="font-size-slider"
            min={12}
            max={30}
            value={fontSize}
            onChange={(_e, newValue) => handleFontSizeChange(newValue)}
            style={{ width: "200px", margin: "10px auto" }}
          />
        </Box>
        
        <DialogActions>
          <Button autoFocus onClick={onClose}>
            Close
          </Button>
        </DialogActions>
        </Box>
        </Box>
      </BootstrapDialog>

    </React.Fragment>
  );
}
