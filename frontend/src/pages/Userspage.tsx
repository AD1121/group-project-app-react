import React, { useState } from "react"
import { useParams } from "react-router-dom"
import './userpage.css'
import BookingList from "../components/BookingList"

export default function Userpage() {
  const [cleanerName, setCleanerName] = useState("")
  const [calendar, setCalendar] = useState("")
  const [hours, setHours] = useState("")
  const [level, setLevel] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('accessToken');
      
      const response = await fetch("/api/works", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        
        body: JSON.stringify({ cleanerName, calendar, hours, level}),
      })
      const data = await response.json()

      console.log(data)
      
    } catch (error) {
      console.error(error)
    }
  }

  let {user} = useParams()

  return (
    <>
      <div >
        <h1 className="title">Welcome {user}</h1>
        <br />
          <form onSubmit={handleSubmit} className="form-design">
              <label>Choose a cleaner:</label>
              <br />
              <select
               name="states"
               className="cleaner" 
               onChange={e => setCleanerName(e.target.value)} 
               >
                <option value="Erik">Erik</option>
                <option value="Lisa">Lisa</option>
                <option value="Charles">Charles</option>
                <option value="Linda">Linda</option>
              </select>
              <br />
              <br />
              <label>Date:</label>
              <br />
              <input 
              type="date" 
              className="date" 
              onChange={e => setCalendar(e.target.value)}
              />
              <label >Select a time: </label>
              <input 
              type="time" 
              className="time" 
              onChange={e => setHours(e.target.value)}  
              />
            
              <br />
              <br />
              <div className="column">
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
            <br />
              <input 
                type="radio"
                name='radio' 
                value="Window" 
                onChange={e => setLevel(e.target.value)}
              />
               <label>Window</label>
            
              </div>
              <div className="btn-submit">
                <input className="booking" type="submit" />
              </div>
              
            </form>
            <br />
            <div className="form-design">
              <BookingList />
            </div>
           
        </div>
    </>
  )
}