export const matchType = (type: string, timeStamp: number) => {
  switch (type) {
    case 'finished':
      return 'ended';
    case 'inprogress':
      return 'live';
    case 'canceled':
      return 'cancelled';
    case 'notstarted':
      return `${timeConverter(timeStamp)}`;

    default:
      return type;
  }
};

const timeConverter = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes() === 0 ? `${date.getMinutes() + '0'}` : date.getMinutes();
  return `${month} ${day}${getDayEnding(day)}  ${year} ${hour} : ${min}`;
};

const getDayEnding = (dayNumber: number) => {
  switch (dayNumber) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};
