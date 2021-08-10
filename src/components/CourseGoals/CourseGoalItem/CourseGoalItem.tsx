import { PropsWithChildren } from 'react';

import './CourseGoalItem.scss';

export type CourseGoalItemProps = {
  id: string;
  onDelete: (id: string) => void;
}

function CourseGoalItem(props: PropsWithChildren<CourseGoalItemProps>): JSX.Element {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = (): void => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
