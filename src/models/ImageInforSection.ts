import { PageInforModel } from "./PageInforModel";


export interface ImageInforSectionModel extends PageInforModel {
    inforSectionId:string;
     images?: string | string[]; 
     imageLeft?:boolean;
   }