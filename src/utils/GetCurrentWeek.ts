
export const getCurrentWeek = () => {
    const today = new Date();
  
    // Get the day of the week (0 is Sunday, 1 is Monday, etc.)
    const currentDayOfWeek = today.getDay();
  
    // In Sweden, the week starts on Monday, so calculate the start of the week (Monday)
    const startOfWeek =
      today.getDate() - currentDayOfWeek + (currentDayOfWeek === 0 ? -6 : 1);
  
    const daysInSwedish = ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"]; // Days of the week in Swedish
  
    // Generate the week as an array of objects with date and dayName
    return Array.from({ length: 7 }, (_, index) => {
      const date = new Date(today); // Create a new date object to avoid mutation
      date.setDate(startOfWeek + index); // Set the correct day for the week
  
      // Define date formatting options
      const dateOptions: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "2-digit",
      };
  
      // Format the date as "DD/MM"
      const formattedDate = date.toLocaleDateString("sv-SE", dateOptions);
  
      // Return both the formatted date and the corresponding day name in Swedish
      return {
        date: formattedDate,
        dayName: daysInSwedish[date.getDay()], // Get day name using current day of the week index
      };
    });
  };
  