export const selectNextWeek = (state) => {
  return Object.keys(state.dates).reduce((acc, dateStr) => {
    if (dateStr > state.today) acc[dateStr] = state.dates[dateStr];
    return acc;
  }, {});
};

export const selectPastWeek = (state) => {
  return Object.keys(state.dates).reduce((acc, dateStr) => {
    if (dateStr < state.today) acc[dateStr] = state.dates[dateStr];
    return acc;
  }, {});
};

export const selectTodayEvents = (state) => {
  return { [state.today]: state.dates[state.today] };
};
