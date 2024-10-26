import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import { Typography } from "@mui/material";

import './form.css'
import { formatDate, formatTime } from "../../utils/FormatDateOrTime";
interface CustomEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  allDay: boolean;
  description?: string;
  location?: string;
}

interface ScheduleEventDetailsDialogProps {
  open: boolean;
  event: CustomEvent | null;
  onClose: () => void;
}
export default function ScheduleEventDetailDialog({
  open,
  event,
  onClose,
}: ScheduleEventDetailsDialogProps) {
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState<DialogProps["maxWidth"]>("sm");



  const handleMaxWidthChange = (event: SelectChangeEvent<typeof maxWidth>) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value
    );
  };

  const handleFullWidthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFullWidth(event.target.checked);
  };
  return (
    <React.Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={onClose}
      >
        <DialogTitle
          sx={{
            display: "flex",
            m: "auto",
            width: "fit-content",
          }}
        >
          {event?.title}
        </DialogTitle>
        <DialogContent dividers>
          {/* Event Date */}
          <Typography variant="h6" gutterBottom>  
          {event ? (
        event.allDay ? (
            <>
                <strong>Whole Day Event on</strong> {formatDate(event.start)}
            </>
        ) : (
            <>
                <strong>Date:</strong> {formatDate(event.start)}
            </>
        )
    ) : (
        "No event date available"
    )}
         </Typography>

          {/* Event Time (if not all day) */}
          {event && !event.allDay && (
            <>
              <Typography variant="h6" gutterBottom>
             <strong>Time: </strong> {event.end
                  ? `${formatTime(event.start)} - ${formatTime(event.end)}`
                  : `${formatTime(event.start)}`}
              </Typography>
            </>
          )}

          {/* Event Location */}
          <Typography variant="h6" gutterBottom>
          <strong>Location: </strong>  {event?.location || "No location specified."}
          </Typography>
        </DialogContent>

        {/* Description Section */}
        <DialogContent dividers>
            <Typography variant="h6"  sx={{
            display: "flex",
            m: "auto",
            width: "fit-content",
          }}> Details</Typography>
          <Typography variant="body1"gutterBottom>
            {event?.description || "No description provided."}
          </Typography>
        </DialogContent>
        <DialogContent>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
            }}
          >
            <FormControl sx={{ mt:1, minWidth: 120 }}>
              <InputLabel htmlFor="max-width">maxWidth</InputLabel>
              <Select
                autoFocus
                value={maxWidth}
                onChange={handleMaxWidthChange}
                label="maxWidth"
                inputProps={{
                  name: "max-width",
                  id: "max-width",
                }}
              >
                <MenuItem value={false as any}>false</MenuItem>
                <MenuItem value="xs">xs</MenuItem>
                <MenuItem value="sm">sm</MenuItem>
                <MenuItem value="md">md</MenuItem>
                <MenuItem value="lg">lg</MenuItem>
                <MenuItem value="xl">xl</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              sx={{ mt: 1 }}
              control={
                <Switch checked={fullWidth} onChange={handleFullWidthChange} />
              }
              label="Full width"
            />
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
