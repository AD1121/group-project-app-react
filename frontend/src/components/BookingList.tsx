import './bookingList.css'

export default function BookingList() {
  return (
    <div>
      <h3>Bookings:</h3>
      <ul className="booking-list">
        <li className='booking-li'>20/3/2023 <span>13:00</span> <span>Erik</span> <span>Diamond</span> <button className='delete'><i className="fa-solid fa-trash"></i></button> </li>
      </ul>
    </div>
  )
}