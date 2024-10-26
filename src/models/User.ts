export enum UserCategory {
    Pastor = "pastor",
    Admin = "admin",
    Member = "member",
    TeamLeader = "teamLeader",
    TeamMember = "teamMember",
  }
  export interface User {
    id: string;
    firstName: string;
    lastName:string;
    userId: string;
    userName: string;
    email: string;
    image?:string;
    phoneNumber: string;
    address?: string ;
    zipcode?: string ;
    category: UserCategory;
   
  }
  
  export enum UserDialogMode {
      Add = "add",
      Edit = "edit",
    }
    export function defaultUser(): User {
      return {
          id:'',
          firstName:'',
          lastName:'',
          userId:'',
          userName: '',
          email: '',
          phoneNumber: '',
          address:'',
          category:UserCategory.Member,
         
    }}