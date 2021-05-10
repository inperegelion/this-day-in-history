const API_endpoint = "https://uk.wikipedia.org/api/rest_v1/feed/onthisday/";

const today = new Date();

const getEventsOnThisDay = async (
  month = today.getMonth() + 1,
  dayDate = today.getDate()
) => {
  const response = await fetch(`${API_endpoint}/${month}/${dayDate}`, {
    method: "GET",
  });
  const data = await response.json();
  return data.selected;
};

export default getEventsOnThisDay;
