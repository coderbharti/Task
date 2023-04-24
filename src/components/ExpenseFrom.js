import React ,{useState} from "react";

import "./ExpenseFrom.css"
function ExpenseFrom(props){ 
    const[title , setTitle]= useState("");
    const[time ,setTime]=useState("");
    const[date , setDate]=useState("");

       const titleChangeHandler = (e)  =>{
        setTitle(e.target.value);
       }
       const timeChangeHandler=(e)=>{
        setTime(e.target.value)
       }
       const dateChangeHandler=(e)=>{
        setDate(e.target.value)

       }

       const fromSubmitHandler= (event)=>{
        event.preventDefault();
        if(!title || !time || !date){
            alert ("plz fill all form")
            return;
        }

        const remainderEnteredData= {
            title,
            time,
            date :new Date(date)
        }
        props.onAdd(remainderEnteredData);
        setTitle("");
        setTime("");
        setDate("")
       }

      

   return (
       
   <form onSubmit={fromSubmitHandler} >
    <div className="new-expense">
       <div className="new-expense__controls">
           <div className="new-expense__control"  >
               <label>Reminder</label>
               <input type="text" value={title} onChange={titleChangeHandler}/>
           </div>
           <div className="new-expense__control">
               <label>Time</label>
               <input type="time" value={time} onChange={timeChangeHandler} />
           </div>
           <div className="new-expense__control">
               <label>Date</label>
               <input type="date" min="2019-01-01" max="2022-12-31"  value={date} onChange={dateChangeHandler}/>
           </div>
       </div>
       <div className="new-expense__actions">
            
            <button type='submit'>Add Remainder</button>
            
            </div>
            </div>
   </form>
   
)
}

export default ExpenseFrom;