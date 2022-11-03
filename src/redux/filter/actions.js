export const setStatusFilter = value => {
  return {
    type: 'filters/setStatusFilter',
    payload: value,
  };
};

// import { createAction } from '@reduxjs/toolkit';

// export const addTask = createAction('tasks/AddTask', text => {
//   return {
//     payload: {
//       text,
//       id: nanoid(),
//       completed: false,
//     },
//   };
// });

// const setStatusFilter = {
//   type: 'filters/setStatusFilter',
//   payload: 'Filter value',
// };