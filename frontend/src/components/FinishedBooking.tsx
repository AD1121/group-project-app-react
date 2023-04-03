import { useEffect, useState } from 'react'
import './bookingList.css'

interface IBookings {
  cleanerName: string,
  calendar: string,
  hours: string,
  level: string
}

// const finishedBookings: Array<any> = [
//   {
//       id: 1,
//       cleanerName: 'Erik',
//       calendar: '16/04/2023',
//       hours: '10:35',
//       level: 'Top'
//   },
//   {
//       id: 2,
//       cleanerName: 'Lisa',
//       calendar: '17/04/2023',
//       hours: '12:55',
//       level: 'Window'
//   },
//   {
//       id: 3,
//       cleanerName: 'Linda',
//       calendar: '22/04/2023',
//       hours: '20:35',
//       level: 'Basic'
//   },
//   {
//       id: 4,
//       cleanerName: 'Charles',
//       calendar: '22/04/2023',
//       hours: '08:35',
//       level: 'Diamont'
//   },
//   {
//       id: 5,
//       cleanerName: 'Lisa',
//       calendar: '16/04/2023',
//       hours: '18:35',
//       level: 'Basic'
//   }
// ]

export default function FinishedBooking() {
  const [bookings, setBookings] = useState<IBookings[]>([{
    cleanerName: 'Erik',
    calendar: '16/04/2023',
    hours: '10:35',
    level: 'Top'
},
{
    cleanerName: 'Lisa',
    calendar: '17/04/2023',
    hours: '12:55',
    level: 'Window'
},
{
    cleanerName: 'Linda',
    calendar: '22/04/2023',
    hours: '20:35',
    level: 'Basic'
},
{
    cleanerName: 'Charles',
    calendar: '22/04/2023',
    hours: '08:35',
    level: 'Diamont'
},
{
    cleanerName: 'Lisa',
    calendar: '16/04/2023',
    hours: '18:35',
    level: 'Basic'
}]);

const [selectedItems, setSelectedItems] = useState<number[]>([])

function handleItemSelect(index: number) {
  setSelectedItems(selectedItems => {
    if (selectedItems.includes(index)) {      
      return selectedItems.filter(itemIndex => itemIndex !== index)
    } else {
      return [...selectedItems, index]
    }
  })
}

function handleDelete() {
  setBookings(items => items.filter((item, index) => !selectedItems.includes(index)));
  setSelectedItems([]);
}

  return (
    <div>
      <h3>Finished Bookings:</h3>
      <ul className="booking-list">
      {bookings.map((booking, index) => <li className='booking-li' key={index}> <input type="checkbox" onChange={() => handleItemSelect(index)}/> {booking.calendar} <span> {booking.hours} </span> <span> {booking.cleanerName} </span> <span> {booking.level} </span> </li>)}
      </ul>
      <button className='btn-delete' onClick={handleDelete}>Delete All</button>
    </div>
  )
}
