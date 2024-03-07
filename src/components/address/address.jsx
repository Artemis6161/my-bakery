import React from 'react'
import "./address.css"
const adress = () => {
  return (
    <div className='address'>

      <h1>HOW TO FIND US</h1>
      <div className='address_wrapper'>
      <div className='address_container'>
      <h4>
      Shop timings
      </h4>
      
      <p>
Mon-Sun : 9am - 22pm</p>

<h4>
Production Unit
</h4>

<p>
NO 7 M.P.A Church Road, Vijiaya Nursery Garden, Thirumullaivoyal, Chennai-62
</p>


      </div>
 
   
    <div className='address_container' id="address">
    <h2>OUR BRANCH</h2>
    <div className='address_right'>
    <h3>AMBATTUR</h3>
      <p>NO 18, Ayyapakam Main Road, West Ambattur, Chennai-32
Contact- +91-9176677594 
</p>
    </div>
   
    </div>
    </div>
      <div id="map">
      <iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
      <a href="https://www.gps.ie/">gps devices</a>
      </iframe>
      </div>
    </div>
  )
}

export default adress
