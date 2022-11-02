export const setStatusFilter = value => {
  return {
    type: 'filters/setStatusFilter',
    payload: value,
  };
};

// const setStatusFilter = {
//   type: 'filters/setStatusFilter',
//   payload: 'Filter value',
// };