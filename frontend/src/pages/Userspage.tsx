import React, { useState } from "react"


export default function Userpage() {
  const [cleanerName, setCleanerName] = useState("")
  const [calendar, setCalendar] = useState("")
  const [hours, setHours] = useState("")
  const [level, setLevel] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('accessToken');

      console.log(token);
      

      const response = await fetch("/api/works", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        
        body: JSON.stringify({ cleanerName, calendar, hours, level}),
      });
      const data = await response.json()

      console.log(data);
      console.log(cleanerName);
      

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
     <h1>Welcome user</h1>
     <br />
     <form onSubmit={handleSubmit}>
        <label>Choose a cleaner:</label>
        <select name="states" onChange={e => setCleanerName(e.target.value)} >
          <option value="Erik">Erik</option>
          <option value="Lisa">Lisa</option>
          <option value="Charles">Charles</option>
          <option value="Linda">Linda</option>
        </select><br />
        <label>Date:</label>
        <input 
        type="date" 
        onChange={e => setCalendar(e.target.value)}
        />
        <label >Select a time:</label>
        <input 
        type="time" 
        onChange={e => setHours(e.target.value)}  
        />
         <input
          type="radio" 
          name='radio' 
          value="Basic" 
          onChange={e => setLevel(e.target.value)}
          />
         <label>Basic</label><br />
         <input 
          type="radio" 
          name='radio' 
          value="Top" 
          onChange={e => setLevel(e.target.value)} 
          />
         <label >Top</label><br />
         <input 
          type="radio" 
          name='radio' 
          value="Diamond" 
          onChange={e => setLevel(e.target.value)}
          />
         <label>Diamond</label>
         <input 
          type="radio"
          name='radio' 
          value="Window" 
          onChange={e => setLevel(e.target.value)}
         />
         <label>Window</label>


         <input className="booking" type="submit" />
         
      </form>
    </>
  )
}