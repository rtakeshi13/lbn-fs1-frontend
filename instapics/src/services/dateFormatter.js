const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const ordinalSuffix = (day) => {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export const formatPostAge2 = (createdAt) => {
  const creationDate = new Date(createdAt);
  return `${
    monthNames[creationDate.getMonth()]
  } ${creationDate.getDate()}${ordinalSuffix(creationDate.getDate())}`;
};

export const formatPostAge = (createdAt) => {
  const ageInMinutes = ((Date.now() - createdAt) / 60000).toFixed(0);
  if (ageInMinutes < 1) {
    /* less than a minute */
    return "just now";
  } else if (ageInMinutes < 59) {
    /* less than 1 hour: shows minutes */
    return `${ageInMinutes} minutes ago`;
  } else if (ageInMinutes < 119) {
    /* less than 1 day: shows hours */
    return `1 hour ago`;
  } else if (ageInMinutes < 1439) {
    const ageInHours = (ageInMinutes / 60).toFixed(0);
    return `${ageInHours} hours ago`;
  } else if (ageInMinutes < 2879) {
    /* less than 1 week: shows days */
    return `1 day ago`;
  } else if (ageInMinutes < 10079) {
    const ageInDays = (ageInMinutes / 1440).toFixed(0);
    return `${ageInDays} days ago`;
  } else {
    /* more than a week: shows day and month */
    const creationDate = new Date(createdAt);
    return `${
      monthNames[creationDate.getMonth()]
    } ${creationDate.getDate()}${ordinalSuffix(creationDate.getDate())}`;
  }
};
