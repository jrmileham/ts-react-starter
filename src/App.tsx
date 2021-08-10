import { useState } from 'react';
import pkg from '@package';

import CourseGoalList from '@App/components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from '@App/components/CourseGoals/CourseInput/CourseInput';
import Goal from '@App/model/Goal';
import './App.scss';

/**
 * Main function
 */
function App(): JSX.Element {

  const [courseGoals, setCourseGoals] = useState<Goal[]>([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const addGoalHandler = (enteredText: string): void => {
    setCourseGoals((prevGoals: Goal[]): Goal[] => {
      const updatedGoals: Goal[] = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId: string): void => {
    setCourseGoals( (prevGoals: Goal[]): Goal[] => {
      const updatedGoals: Goal[] = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content: JSX.Element = <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>;

  if (courseGoals.length > 0) {
    content = <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />;
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
}

export default App;