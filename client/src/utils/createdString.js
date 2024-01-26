function calculateDateDifference(createdDateString) {
  const currentDate = new Date();
  const createdDate = new Date(createdDateString);

  // Calculate the difference in milliseconds
  const differenceInMilliseconds = currentDate - createdDate;

  // Convert milliseconds to seconds, minutes, hours, and days
  const seconds = Math.floor(differenceInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  return {
    seconds,
    minutes,
    hours,
    days,
    weeks,
    months,
    years,
  };
}
export default calculateDateDifference;
