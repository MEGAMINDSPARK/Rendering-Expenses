import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Grocessary",
    amount: 250,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e2",
    title: "Book",
    amount: 220,
    date: new Date(2021, 6, 2),
  },
  {
    id: "e3",
    title: "Tutor fee",
    amount: 823,
    date: new Date(2021, 4, 3),
  },
  {
    id: "e4",
    title: "Food",
    amount: 459,
    date: new Date(2021, 5, 5),
  },
];

const App = ()=> {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE); 

  
  const addExpenseHandler = (expense) => {
    
    // const updatedExpense = [expense, ...expenses];
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses itemhai={expenses} />
    </div>
  );
}

export default App;
