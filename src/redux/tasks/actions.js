const addTask = {
    type: 'tasks/addTask',
    payload: {
      id: 'Generated id',
      text: 'User entered text',
      completed: false,
    },
  };
  
  const deleteTask = {
    type: 'tasks/deleteTask',
    payload: 'Task id',
  };