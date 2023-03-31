import { useEffect, useState } from 'react';
import './bookingList.css'

type resultProps = {
  cleanerName: string;
  calendar: string;
  hours: string;
  level: string;
};

export default function BookingList() {

  const [posts, setPosts] = useState<resultProps[]>([])

  useEffect(() => {
  const getBookings = async () => {
    try {
      const token = localStorage.getItem('accessToken')
      
      const response = await fetch("/api/works", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        
      })
      const data = await response.json()

      setPosts(data)

      console.log(data);
      
    } catch (error) {
      console.error(error)
    }
  }

  

    getBookings()
    console.log(posts);
    // const api = async () => {

    //   const token = localStorage.getItem('accessToken')

    //   const data = await fetch("/api/works", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Authorization": `Bearer ${token}`,
    //     },
    //   })

    //   const jsonData = await data.json()


    //   setPosts(jsonData.results)
      
    // };

    // api();
  }, [])

  

  return (
    <div>
      <h3>Bookings:</h3>
      <ul className="booking-list">
      {/* {posts.map((booking) => <li className='booking-li'>20 /3/2023 <span>13:00</span> <span>Erik</span> <span>Diamond</span> <button className='delete'><i className="fa-solid fa-trash"></i></button> </li>} */}
      </ul>
    </div>
  )
}