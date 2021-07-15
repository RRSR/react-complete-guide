import React, {useState} from "react";
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = props => {
    const expenses = props.expenses;
    const [filteredYear, setFilteredYear] = useState('2021');
    const onSelection = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onSelection={onSelection} selected={filteredYear}/>
                {expenses.map(expense => <ExpenseItem date={expense.date}
                                                      title={expense.title}
                                                      amount={expense.amount}/>)}
            </Card>
        </div>

    );
}

export default Expenses;
