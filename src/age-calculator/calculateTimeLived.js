export const calculateTimeLived = (birthDate) => {
  if (!birthDate) return null;

  const currentDate = new Date();
  const birthDateObj = new Date(birthDate);
  const result = (currentDate.getTime() - birthDateObj.getTime()) / 1000;

  if (result >= 0) {
    const years = Math.floor(result / 31556952); 
    const months = Math.floor((result % 31556952) / 2629746); 
    const days = Math.floor((result % 2629746) / 86400); 

    return { years, months, days };
  }

  return null;
};