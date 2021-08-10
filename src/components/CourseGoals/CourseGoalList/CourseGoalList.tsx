import { FC } from 'react';
import CourseGoalItem from '@App/components/CourseGoals/CourseGoalItem/CourseGoalItem';
import Goal from '@App/model/Goal';
import './CourseGoalList.scss';

export type CourseGoalListProps = {
  items: Goal[];
  onDeleteItem: (goalId: string) => void;
}

const CourseGoalList: FC<CourseGoalListProps> = (props): JSX.Element => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
