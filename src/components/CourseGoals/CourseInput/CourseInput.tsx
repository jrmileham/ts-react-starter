import { ChangeEvent, FormEvent, useState } from 'react';

import Button from '@App/components/UI/Button/Button';
import './CourseInput.scss';


function CourseInput (props): JSX.Element {
  const defaultState: string = "";

  const [enteredValue, setEnteredValue] = useState<string>(defaultState);

  const goalInputChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
    setEnteredValue(defaultState);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue}/>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
