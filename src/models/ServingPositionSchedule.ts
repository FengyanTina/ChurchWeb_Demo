import { EventCategory } from "./Event";
import { Job } from "./Job";

export interface ServingPositionSchedule {
    id:string;
    startTime: string;
    endTime: string;
    activityCategory: EventCategory;
    team: string;
    memberNeeded?: number;
    scheduleStatus: "open" | "closed"; 
    job: Job[]; 
  }