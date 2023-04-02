import { useEffect, useState } from 'react'
import './bookingList.css'

// interface IProps {
//   bookings: Array<any>;
// }

const finishedBookings: Array<any> = [
  {
      id: 1,
      cleanerName: 'Erik',
      calendar: '16/04/2023',
      hours: '10:35',
      level: 'Top'
  },
  {
      id: 2,
      cleanerName: 'Lisa',
      calendar: '17/04/2023',
      hours: '12:55',
      level: 'Window'
  },
  {
      id: 3,
      cleanerName: 'Linda',
      calendar: '22/04/2023',
      hours: '20:35',
      level: 'Basic'
  },
  {
      id: 4,
      cleanerName: 'Charles',
      calendar: '22/04/2023',
      hours: '08:35',
      level: 'Diamont'
  },
  {
      id: 5,
      cleanerName: 'Lisa',
      calendar: '16/04/2023',
      hours: '18:35',
      level: 'Basic'
  }
];

export default function FinishedBooking() {
  // const [booking, setBooking] = useState<IProps[]>([])

  return (
    <div>
      <h3>Finished Bookings:</h3>
      <ul className="booking-list">
      {finishedBookings.map(booking => <li className='booking-li' key={booking._id}> <input type="checkbox" /> {booking.calendar} <span> {booking.hours} </span> <span> {booking.cleanerName} </span> <span> {booking.level} </span> </li>)}
      </ul>
      <button className='btn-delete'>Delete</button>
    </div>
  )
}
