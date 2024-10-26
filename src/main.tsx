
// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import { router } from "./route";
import { UserProvider } from "./context/UserContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
    <AuthProvider>
        <UserProvider>
    <RouterProvider router={router} />
    </UserProvider>
    </AuthProvider>
  </React.StrictMode>
);
