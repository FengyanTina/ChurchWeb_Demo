import { useState } from "react";
import "./form.css";
import { Box, Slider } from "@mui/material";
import { Event } from "../../models/Event";
import formatDateTime from "../../utils/FormatDateTime";
import { formatTime } from "../../utils/FormatDateOrTime";

interface EventDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: Event | null;
}
export default function EventDetailsModal({
  isOpen,
  onClose,
  event,
}: EventDetailsModalProps) {
  if (!isOpen || !event) return null;

  const [fontSize, setFontSize] = useState(16);
  const handleFontSizeChange = (newValue: number | number[]) => {
    setFontSize(newValue as number); // Cast newValue to number
  };

  return (
    <Box className="modal-overlay">
      <Box className="modal-content" style={{ fontSize: `${fontSize}px` }}>
        <button onClick={onClose} className="close-button">
          X
        </button>
        <h1>{event.title}</h1>
        {event.image && (
          <>
            {Array.isArray(event.image) ? (
              <img src={event.image[0]} alt={event.title} />
            ) : (
              <img src={event.image} alt={event.title} />
            )}
          </>
        )}
        <p>{event.description}</p>
        {event.startTime && (
          <p>
            {formatDateTime(event.startTime)}
            {event.endTime && ` - ${formatTime(event.endTime)}`}
          </p>
        )}
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
      </Box>
    </Box>
  );
}
