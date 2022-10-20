export const convertDurattion = (duration) => {
  const hours = duration / 60;
  const rateHours = Math.floor(hours);
  const minutes = (hours - rateHours) * 60;
  const rateMinutes = Math.round(minutes);
  return rateHours + " hr " + rateMinutes + " min";
};
