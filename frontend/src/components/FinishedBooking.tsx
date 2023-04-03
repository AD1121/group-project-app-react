import { useEffect, useState } from 'react'
import './bookingList.css'

interface IBookings {
  id: number,
  cleanerName: string,
  calendar: string,
  hours: string,
  level: string
}

export default function FinishedBooking() {

  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [bookings, setBookings] = useState<IBookings[]>([{
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
}])

  function handleSelectItem(id: number) {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id))
    } else {
      setSelectedItems([...selectedItems, id])
    }
  }  

  function handleDelete() {
    console.log(selectedItems)
    if (selectedItems.length === 0) {
      setBookings([])
    }else {
      setBookings(bookings.filter(item => !selectedItems.includes(item.id)))
      setSelectedItems([])
    }
  }

  return (
    <div>
      <h3>Finished Bookings:</h3>
      <ul className="booking-list">
      {bookings.map(booking => <li className='booking-li' key={booking.id}> <input type="checkbox" onChange={() => handleSelectItem(booking.id)}/> {booking.calendar} <span> {booking.hours} </span> <span> {booking.cleanerName} </span> <span> {booking.level} </span> </li>)}
      </ul>
      <button className='btn-delete' onClick={handleDelete}>Delete All</button>
    </div>
  )
}
