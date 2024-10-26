import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

interface ConfirmDeleteDialogProps {
    open: boolean; // Controls whether the dialog is open or closed
    onClose: () => void; // Function to close the dialog
    onConfirm: () => void; // Function to confirm the delete action
    title?: string; // Optional: the title of the event to delete
  }
  
  const ConfirmDeleteDialog: React.FC<ConfirmDeleteDialogProps> = ({ open, onClose, onConfirm, title }) => {
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <p>
            Are you sure you want to delete the event '{title || 'Untitled Event'}'?
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onConfirm} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default ConfirmDeleteDialog;