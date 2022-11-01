// Імпортуємо хук
import { useSelector } from 'react-redux';
// Імпортуємо об'єкт значень фільтра
import css from './TaskCounter.module.css';
// Імпортуємо селектор, щоб отримати зі стору таски
import { getTasks } from 'redux/tasks/selectors';

export const TaskCounter = () => {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector(getTasks);

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
