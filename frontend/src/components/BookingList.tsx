import { useEffect, useState } from 'react';
import './bookingList.css'

interface IPost {
  _id: string,
  cleanerName: string;
  calendar: string;
  hours: string;
  level: string;
}

interface IUser {
  userName: string | undefined
}

export default function BookingList({userName}: IUser) {

  const [posts, setPosts] = useState<IPost[]>([])

  const token = localStorage.getItem('accessToken')

  let worker: boolean = false

  if (userName === 'Charles') {
     worker = true
  }

  useEffect(() => {

    if (!worker) {
      const fetchPosts = async () => {
      const response = await fetch("/api/works", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
          })

      const data = await response.json()      
      setPosts(data)
    }

    fetchPosts();
    } else {
      const fetchPosts = async () => {
        const response = await fetch("/api/works/all", {
              method: "GET",
              headers: {
                "Content-Type": "application/json"
              },
            })
  
        const data = await response.json()      
        setPosts(data)
      }
  
      fetchPosts();
    }
    
  })

  const handleDelete = async (id: string) => {
    try {
      const token = localStorage.getItem('accessToken');
      
      const response = await fetch(`/api/works/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        
      })
      const data = await response.json()

    } catch (error) {
      console.error(error)
    }
  }

  return (
   <>
      {!worker ? (
        <div> 
          <h3>Bookings:</h3>
          <ul className="booking-list">
          {posts.map(booking => <li className='booking-li' key={booking._id}> {booking.calendar} <span> {booking.hours} </span> <span> {booking.cleanerName} </span> <span> {booking.level} </span> <button className='delete' onClick={() => handleDelete(booking._id)}><i className="fa-solid fa-trash"></i></button> </li>)}
          </ul>
        </div>
      ) : (
        <div> 
          <h3>Bookings:</h3>
          <ul className="booking-list">
          {posts.map(booking => <li className='booking-li' key={booking._id}> {booking.calendar} <span> {booking.hours} </span> <span> {booking.cleanerName} </span> <span> {booking.level} </span> </li>)}
          </ul>
        </div>
      )}
    </>
  )
}