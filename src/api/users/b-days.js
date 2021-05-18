const API_endpoint = "https://birthday-api.anromsocial.com/api/birthdays";

const today = new Date();

const getAnniversaries = async (dateFrom, dateTo) => {
  if (!dateTo) {
    if (!dateFrom) throw new Error("invalid timespan!");
    const qs = composeQS({ dateFrom, dateTo: dateFrom });
    const response = await fetch(`${API_endpoint}${qs}`);
    const data = await response.json();

    if (dateFrom === "02.28" && !isItALeapYear(today.getFullYear())) {
      const response29Feb = await fetch(
        `${API_endpoint}?dateFrom=02.28&dateTo=02.29`
      );
      const data29Feb = await response29Feb.json();

      return [...data.users, ...data29Feb.users];
    }
    return data.users;
  }
  const qs = composeQS({ dateFrom, dateTo });
  const response = await fetch(`${API_endpoint}/${qs}`);
  const data = await response.json();

  return data.users;
};

export default getAnniversaries;

const isItALeapYear = (year) =>
  (0 === year % 4 && 0 !== year % 100) || 0 === year % 400;

const composeQS = (dict) =>
  Object.entries(dict).reduce((acc, el) => `${acc}${el[0]}=${el[1]}&`, "?");
