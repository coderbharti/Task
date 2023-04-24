import React from 'react'
import "./NewRemainder.css"

function NewRemainder(props) {
   
  const dateString = props.date;
const date = new Date(dateString);

const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;
//console.log(formattedDate);

  return (
    <div className='box'>
        <h1 className='title'>{props.data}</h1>
        <h1 className='title'>{props.time}</h1>
        <h1 className='title'>{formattedDate}</h1> 
        <button className='btn' onClick={props.onRemove}>X</button>
          
    </div>
  )
}

export default NewRemainder