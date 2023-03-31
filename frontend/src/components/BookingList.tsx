import { useEffect, useState } from 'react';
import './bookingList.css'
import axios from 'axios';

interface IPost {
  _id: string,
  cleanerName: string;
  calendar: string;
  hours: string;
  level: string;
}

export default function BookingList() {

  const [posts, setPosts] = useState<IPost[]>([])

  const token = localStorage.getItem('accessToken')

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/works", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
          })

      const data = await response.json();
      setPosts(data);

    };

    fetchPosts();
  })

  return (
    <div>
      <h3>Bookings:</h3>
      <ul className="booking-list">
      {posts.map(booking => <li className='booking-li' key={booking._id}> {booking.calendar} <span> {booking.hours} </span> <span> {booking.cleanerName} </span> <span> {booking.level} </span> <button className='delete'><i className="fa-solid fa-trash"></i></button> </li>)}
      </ul>
    </div>
  )
}