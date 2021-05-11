const API_endpoint =
  "https://uk.wikipedia.org/api/rest_v1/feed/onthisday/selected";

const today = new Date();

const getEventsOnThisDay = async (
  month = today.getMonth() + 1,
  dayDate = today.getDate()
) => {
  const response = await fetch(`${API_endpoint}/${month}/${dayDate}`);
  const data = await response.json();

  if (month === 2 && dayDate === 28 && !isItALeapYear(today.getFullYear())) {
    const response29Feb = await fetch(`${API_endpoint}/2/29`);
    const data29Feb = await response29Feb.json();

    return [...data.selected, ...data29Feb.selected];
  }
  return data.selected;
};

export default getEventsOnThisDay;

const isItALeapYear = (year) =>
  (0 === year % 4 && 0 !== year % 100) || 0 === year % 400;
