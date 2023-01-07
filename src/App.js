import React from 'react';
import { uid } from 'uid';

import { NewGoal } from './components/Goals/NewGoal';
import  CourseGoalList  from './components/Goals/CourseGoalList';

import './App.css';

function App() {
  const [courseGoals, setCourseGoals] = React.useState([]);

  React.useEffect(() => {
    const storage = localStorage.getItem("lista");
    setCourseGoals(!storage ? [] : JSON.parse(storage));
  }, []);

  const addGoalHandler = (enteredText) => {
    const updatedGoals = courseGoals.unshift({ text: enteredText, id: uid() });
    localStorage.setItem("lista", JSON.stringify(updatedGoals));
    setCourseGoals(updatedGoals);
  };

  const deleteItemHandler = (goalId) => {
    const updatedGoals = courseGoals.filter((goal) => goal.id !== goalId);
    localStorage.setItem("lista", JSON.stringify(updatedGoals));
    setCourseGoals(updatedGoals);
  };

  return (
    <div className="App">
      <header className="App-header">
        <NewGoal onSubmit={addGoalHandler} />
        {courseGoals.length > 0 ? (
          <p className="no-goals">No goals found. Maybe add one?</p>
        ) : (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        )}
        {content}
      </header>
    </div>
  );
}


export default App;
