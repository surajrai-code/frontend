import React, { useState } from "react";
import './Home.css';
import ExpenseList from "./ExpenseList";

const Home = () => {
    const [amount, setAmount] = useState("");
    const [disc, setDisc] = useState("");
    const [category, setCategory] = useState("");
    const [input, setInput] = useState([]);

    const submitHandle = (e) => {
        e.preventDefault();
        setInput([...input, { amount, disc, category }]);
        setAmount("");
        setCategory("");
        setDisc("");
    }
    const savedata=()=>{
        
    }


    return (
        <>
            <form>
                <h1>Expenses form</h1>
                <label htmlFor="amount">Expense Amount:</label>
                <br />
                <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <br />
                <label htmlFor="discr">Expense Description:</label>
                <br />
                <input type="text" id="discr" value={disc} onChange={(e) => setDisc(e.target.value)} />
                <br />
                <label htmlFor="category">Expense Category:</label>
                <br />
                <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Choose option</option>
                    <option value="fuel">fuel</option>
                    <option value="food">food</option>
                    <option value="clothes">clothes</option>
                    <option value="other">other</option>
                </select>
                <br />
                <br />

                <button onClick={submitHandle}>Submit</button>
            </form>
            <ExpenseList expense={input}/>
        </>
    );
};

export default Home;