// src/components/LoginModal.tsx
import React from "react";
import { Dialog, DialogContent, DialogActions, Button } from "@mui/material";
import LoginPage from "./LoginPage";



interface LoginModalProps {
  open: boolean;
  handleClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogContent>
        <LoginPage onClose={handleClose} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginModal;
