export default function formatDateTime(date: Date): string {
    if (!(date instanceof Date)) {
      throw new Error("Invalid date object");
    }
  
    // Format the date as 'YYYY-MM-DD'
    const formattedDate = date.toLocaleDateString("sv-SE");
  
    // Format the time as 'HH:mm'
    const formattedTime = date.toLocaleTimeString("sv-SE", {
      hour: "2-digit",
      minute: "2-digit",
    });
  
    // Combine and return the date and time
    return `${formattedDate} ${formattedTime}`;
  }