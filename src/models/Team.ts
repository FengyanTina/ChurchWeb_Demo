import { User } from "./User";

export interface Team {
  id: string;
  TeamName: string;
  TeamLeader: User;
  TeamMember: User[];
}
