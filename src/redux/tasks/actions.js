import { nanoid } from 'nanoid';

export const addTask = text => {
  return {
    type: 'tasks/addTask',
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
};
export const deleteTask = taskId => {
  return {
    type: 'tasks/deleteTask',
    payload: taskId,
  };
};

export const toggleCompleted = taskId => {
  return {
    type: 'tasks/toggleCompleted',
    payload: taskId,
  };
};

// const addTask = {
//     type: 'tasks/addTask',
//     payload: {
//       id: 'Generated id',
//       text: 'User entered text',
//       completed: false,
//     },
//   };

//   const deleteTask = {
//     type: 'tasks/deleteTask',
//     payload: 'Task id',
//   };

// const toggleCompleted = {
//   type: 'tasks/toggleCompleted',
//   payload: 'Task id',
// };
