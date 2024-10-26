import { BaseModel } from "./BaseModel";
import { Step } from "./Step";

export interface BaptismSectionModel extends BaseModel {
    subtitle?: string; 
    images: string | string[]; 
    steps?: Step[]; 
    showAllAsFeatured?: boolean;
    };
  