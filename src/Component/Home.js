import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [amount, setAmount] = useState("");
  const [discription, setDiscription] = useState("");
  const [input, setInput] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = () => {
    axios.get("http://localhost:3000/api/get")
      .then(response => {
        setInput(response.data);
      })
      .catch(error => {
        console.error("Error fetching expenses:", error);
      });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    const newExpense = { amount: parseFloat(amount), discription };

    axios.post("http://localhost:3000/api/insert", newExpense)
      .then(() => {
        setInput([...input, newExpense]);
        setAmount("");
        setDiscription("");
      });
  };

  const deleteExpense = (index) => {
    const expenseToDelete = input[index];

    axios.delete(`http://localhost:3000/api/delete/${expenseToDelete.id}`)
      .then(() => {
        const updatedExpenses = input.filter((_, i) => i !== index);
        setInput(updatedExpenses);
      });
  };

  const totalAmout = () => {
    const total = input.reduce(
      (accumulator, expense) => accumulator + expense.amount,
      0
    );
    return total;
  };

  return (
    <>
      <form>
        <h1>Expenses form</h1>
        <label htmlFor="amount">Expense Amount:</label>
        <br />
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <label htmlFor="discr">Expense Description:</label>
        <br />
        <input
          type="text"
          id="discr"
          value={discription}
          onChange={(e) => setDiscription(e.target.value)}
        />
        <br />
        <button onClick={submitHandle}>Submit</button>
      </form>

      <h2>Expenses List</h2>
      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {input.map((expense, index) => (
            <tr key={index}>
              <td>{expense.amount}</td>
              <td>{expense.discription}</td>
              <td>
                <button onClick={() => deleteExpense(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>TOTAL AMOUNT:{totalAmout()}</p>
    </>
  );
};

export default Home;