import React, { createContext } from 'react'
import { User } from '../models/User';
import { useLocalStorage } from '../hooks/UseLocalStorage';
import initialUsers from '../data';

export const UserContext = createContext({
    users: [] as User[],
    setUsers: (_users: User[]) => {},
    addUser: (_newUser: User) => {},
    removeUser: (_id: string) => {},
    removeUsers: (_id: string[]) => {},
  });
  
export function UserProvider({ children }: { children: React.ReactNode }) {
  
  
    const [users, setUsers] = useLocalStorage<User[]>("users", initialUsers);

    
    const addUser = (newUser: User) => {
        const updatedData = [...users, newUser];
        setUsers(updatedData);
      };
    
      const removeUser = (id: string) => {
        const updatedUsersData = users.filter((user) => user.id !== id);
        setUsers(updatedUsersData);
      };
    const removeUsers = (ids: string[]) => {
        const updatedUsersData = users.filter((user) => !ids.includes(user.id));
        setUsers(updatedUsersData);
      };
    return (
      <UserContext.Provider
        value={{ users, setUsers, addUser, removeUsers,removeUser }}
      >
        {children}
      </UserContext.Provider>
    );
  }
  