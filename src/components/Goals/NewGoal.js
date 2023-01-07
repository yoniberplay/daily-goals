import React,{useState} from 'react';
import "./NewGoal.css"
import Button from '../UI/Button/Button';

export const NewGoal = ( props )=> {

    
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
      };

  const formSubmitHandler = event => {
    event.preventDefault();
    if ( !enteredValue ) return;
     props.onSubmit(enteredValue);
    setEnteredValue('');
  };

  
    return (
      <div className='formulario'>
        <form onSubmit={formSubmitHandler}>
          <div className="form-control">
            <label>Daily Goals</label>
            <input type="text" placeholder='type your next goal' onChange={goalInputChangeHandler} value={enteredValue}/>
            <Button className="btn" type="submit">Add Goal</Button>
          </div>
         
        </form>
        
        </div>
      );

}