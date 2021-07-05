import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

   /* const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');*/
    const [userInput, setUserInput]= useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:''
    })

    const titleChangeHandler = (event) => {
        // setEnteredTitle(event.target.value);                               Multi state approach
        // setUserInput({...userInput,enteredTitle: event.target.value});    Single state approach but here no guarantee of always getting the latest value of the userInput for ...userInput
        setUserInput((previousState) => {                            //Single state approach but here the previousState always have the latest value. So recommended approach.
            return {...previousState,enteredTitle: event.target.value};
        });

    }
    const amountChangeHandler = (event) => {
        // setEnteredAmount(event.target.value);
        setUserInput({...userInput,enteredAmount: event.target.value});
    }
    const dateChangeHandler = (event) => {
        // setEnteredDate(event.target.value);
        setUserInput({...userInput,enteredDate: event.target.value});
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='1' step='1' onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );

}

export default ExpenseForm;
