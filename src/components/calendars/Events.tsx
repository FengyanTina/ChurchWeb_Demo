import { EventInput } from "@fullcalendar/core";

let eventGuid = 0;
// let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
interface CustomEvent extends EventInput {
  description?: string; // Optional description property
  location?:string;
}
export const INITIAL_EVENTS: CustomEvent[] = [
  {
    id: createEventId(),
    title: "All-day event",
    start: new Date().toISOString().split("T")[0], // Today
    end: new Date().toISOString().split("T")[0], // All-day event ends at the same day
    description: "This is an all-day event.",
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: new Date().toISOString().split("T")[0] + "T12:00:00",
    end: new Date().toISOString().split("T")[0] + "T13:00:00", // Event ends 1 hour later
    description: "This is a timed event.",
  },
];
export function createEventId() {
  return String(eventGuid++);
}
