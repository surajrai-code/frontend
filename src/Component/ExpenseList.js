import React from "react";
import "./ExpenseList.css";

const ExpenseList = (props) => {
    return (
        <div className="expenses-list">
            <h2>Expenses List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.expense.map((expense, index) => (
                        <tr key={index}>
                            <td>{expense.amount}</td>
                            <td>{expense.disc}</td>
                            <td>{expense.category}</td>
                            <td>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseList;