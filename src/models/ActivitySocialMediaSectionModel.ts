import { BaseModel } from "./BaseModel";
import { EventCategory } from "./Event";
import { ImageGallaryItemData } from "./ImageGallaryItemData";

export interface ActivitySocialMediaScetionCardModel extends BaseModel {
    inforSectionId:string;
    subtitle?: string;
    category?:EventCategory;
    buttonLink?:string;
    images?: ImageGallaryItemData[];    
  }