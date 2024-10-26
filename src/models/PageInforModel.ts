import { BaseModel } from "./BaseModel";

export interface PageInforModel extends BaseModel {
    category?: string;
    subtitle?: string;
    linkSubtitle?: string;
    buttonText?: string;
   startTime?:Date;
   endTime?:Date;
   location?:string
   buttonLink?:string
  }