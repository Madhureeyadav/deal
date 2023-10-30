import React from 'react'

const Map = () => {
  return (
    <div>
       <div style={{ height: '350px', width: '100%' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14007.919347608446!2d77.3790427!3d28.6303664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x604c3c4160741f7b%3A0x5be6bb2f97663c66!2sPSS%20Techno%20Service%20Digital%20Marketing!5e0!3m2!1sen!2sin!4v1698655705508!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        </div>
    </div>
  )
}

export default Map
