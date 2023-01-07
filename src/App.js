import React,{useState} from 'react';
import './App.css';
import { NewGoal } from './components/Goals/NewGoal';
import { uid } from 'uid';
import  CourseGoalList  from './components/Goals/CourseGoalList';

function App() {
  
   let storage  = localStorage.getItem('lista');

  
  const [courseGoals, setCourseGoals] = useState( (!storage) ?  [
  ] : JSON.parse(storage) );

  const addGoalHandler = ( enteredText ) => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id:  uid() });
      localStorage.setItem('lista',JSON.stringify(updatedGoals));
      return updatedGoals;
    });
    
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      localStorage.setItem('lista',JSON.stringify(updatedGoals));
      return updatedGoals;
    });
  };

  let content = (
    <p className='no-goals'>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }
  return (
    <div className="App">
      <header className="App-header">
       <NewGoal onSubmit={addGoalHandler} >
       </NewGoal>
       {content}
      </header>
    </div>
  );
}

export default App;
