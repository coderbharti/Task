import React, { useState } from "react";
import NewRemainder from "./NewRemainder";

function Reminders(props) {
  const removeHandler = (key) => {
    const updatedList = props.data.filter((elem) => elem.id !== key);
  };

  return (
    <div>
      {props.data.map((item) => {
        return (
          <NewRemainder
            key={item.id}
            data={item.title} 
            time={item.time}
            date={item.date}
            onRemove={()=>props.onRemove(item.id)}
            
           
          />
        );
      })}
    </div>
  );
}

export default Reminders;
