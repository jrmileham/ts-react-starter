import { ChangeEvent } from "react";
import './ExpensesFilter.scss';

export type ExpensesFilterProps = {
  selected: number;
  onChangeFilter: (year: number) => void;
};

const defaultProps: Pick<ExpensesFilterProps, "selected"> = {
  selected: 2021
}

function ExpensesFilter(props: ExpensesFilterProps): JSX.Element {

  const dropdownChangeHandler = (event: ChangeEvent<HTMLSelectElement>): void => {
    props.onChangeFilter(parseInt(event.target.value));
  };
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
}

ExpensesFilter.defaultProps = defaultProps;
export default ExpensesFilter;