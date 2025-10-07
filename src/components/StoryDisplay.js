import React, { useEffect, useRef, useState } from 'react';
import './../component css/StoryDisplay.css';
import scrollBg from './../assets/scroll-bg.png'

function StoryDisplay({ newText, newImage }) {
  console.log(newText, "input");
  const [eventLog, setEventLog] = useState([]);
  const logEndRef = useRef(null);
  console.log(eventLog);

  useEffect(() => {
    if (newText || newImage) {
      const newEvent = {};
      if (newText) newEvent.text = newText;
      if (newImage) newEvent.image = newImage;
      setEventLog(prev => [...prev, newEvent]);
    }
  }, [newText, newImage]);

  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [eventLog]);

  return (
    <React.Fragment>
      <div className='container'>
        <img src={scrollBg} alt='scroll' className='scroll-image'/>
        <div className='textbox'>
          {eventLog.map((event, index) => (
            <div key={index} className='event'>
              {event.text && <div className='text'>{event.text}</div>}
              {event.image && (
                <img src={event.image} className='image' alt='' onError={(e) => e.target.style.display = 'none'} />
              )}
            </div>
          ))}
          <div ref={logEndRef} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default StoryDisplay;