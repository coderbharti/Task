import React , {useEffect, useState} from 'react'
import ExpenseFrom from '../components/ExpenseFrom';
import Reminders from '../components/Reminders';
import { remove ,ref } from 'firebase/database';
import { db ,database } from '../firebase';
import{uid}from "uid";
import { doc, updateDoc, deleteField , deleteDoc,  } from "firebase/firestore";
import { app } from '../firebase';
import 'firebase/database'; 





function Home() {
  const[reminderData , setRemainderData] =useState([]);
 
  
async function sendingDate(remainder){
  const response = await fetch('https://remainder-app-7a827-default-rtdb.firebaseio.com/reminder.json', {
     method: 'POST',
    body: JSON.stringify(remainder),
    headers: {
      'Content-Type': 'application/json'
     }
   });
   const data = await response.json();
  
}

 async function getingdata(){
  
  const res = await fetch("https://remainder-app-7a827-default-rtdb.firebaseio.com//reminder.json")
  if(!res.ok){
    alert("somethings went wrong")
  }
  const data = await res.json()

 const loadedReaminder = [];
 for(const key in data){
  loadedReaminder.push({
    id:key,
    title:data[key].title,
    time:data[key].time,
    date:data[key].date
  })
  

 }
 
 setRemainderData(loadedReaminder)
 
 }


//  

 const enteredReminderData=  (data)=>{
 
    
  return(
  
    sendingDate(data),
    getingdata()
   
   
     

  )
 
 }
 const removeHandler = async (id) => {
   const filteredRemainders =  reminderData.filter((elem) => elem.id !== id)
 
 
  setRemainderData(filteredRemainders);
   const itemRef=ref( db ,`reminder/${id}`)
   await remove(itemRef);
  
}





   
 

  
 
 
 useEffect(()=>{
   getingdata()
 },[])
  
  return (
    <div>
      
      <ExpenseFrom onAdd={enteredReminderData} />
     
      <Reminders data={reminderData}onRemove={removeHandler}/>
    </div>
  )
}

export default Home;