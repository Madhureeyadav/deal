import React from 'react'
import BookingForm from './components/BookingForm'


const EnqiryForm = () => {
    const [showBookingForm, setShowBookingForm] = useState(false);
  return (
 
       <div>
      {/* Toggle the visibility of BookingForm component */}
      <button
        onClick={() => setShowBookingForm(!showBookingForm)}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out"
      >
        Make An Enquiry
      </button>

      {/* Conditionally render the BookingForm component */}
      {showBookingForm && <BookingForm />}
    </div>
   
  )
}

export default EnqiryForm
