import { useEffect, useRef } from "react";

const useInactivityLogout = (timeoutDuration: number, onLogout: () => void) => {
    const timeoutIdRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {

    const handleActivity = () => {
        // Clear previous timeout if it exists
        if (timeoutIdRef .current) {
          clearTimeout(timeoutIdRef.current);
        }
  
        // Reset the timeout for logging out
        timeoutIdRef.current = setTimeout(() => {
          console.log('User inactive, logging out.');
          onLogout(); // Call the logout function
        }, timeoutDuration);
      };

   // Attach event listeners to detect user activity
   window.addEventListener("mousemove", handleActivity);
   window.addEventListener("keydown", handleActivity);
   window.addEventListener("click", handleActivity);
   window.addEventListener("touchstart", handleActivity); // For touch devices

   // Initialize the timeout on mount
   handleActivity();

    return () => {
        if (timeoutIdRef.current) {
            clearTimeout(timeoutIdRef.current);
          }
    
          // Clean up event listeners
          window.removeEventListener("mousemove", handleActivity);
          window.removeEventListener("keydown", handleActivity);
          window.removeEventListener("click", handleActivity);
          window.removeEventListener("touchstart", handleActivity);
        };
  }, [timeoutDuration, onLogout]);
};

export default useInactivityLogout;
