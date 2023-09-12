import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import React,{useState} from 'react';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) =>{

  const [filteredYear,setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  return (
    <Card className="expenses">
    <ExpenseFilter selected={filteredYear} onChangeFilter = {filterChangeHandler} />
      {props.itemhai.map(
        expense => <ExpenseItem
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
        />
      )}
    </Card>
  );
}

export default Expenses;
