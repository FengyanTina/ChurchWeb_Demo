
export const formatDate = (date: Date | string): string => {
    const validDate = typeof date === "string" ? new Date(date) : date;
  
    if (isNaN(validDate.getTime())) {
      throw new Error("Invalid date object or string");
    }
  
    return validDate.toLocaleDateString("sv-SE");
  };
  
  export const formatTime = (date: Date | string): string => {
    const validDate = typeof date === "string" ? new Date(date) : date;
  
    if (isNaN(validDate.getTime())) {
      throw new Error("Invalid date object or string");
    }
  
    return validDate.toLocaleTimeString("sv-SE", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  