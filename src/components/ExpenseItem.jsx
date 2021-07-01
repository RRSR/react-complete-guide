import './ExpenseItem.css'

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div> 15th August 2020</div>
            <div className="expense-item__description">Independence Day Celebrations</div>
            <div className="expense-item__price">₹1453.93</div>
        </div>);
}

export default ExpenseItem;
