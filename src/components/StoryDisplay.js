import React, { useEffect, useRef, useState } from 'react';
import Choices from './Choices';
import './../component css/StoryDisplay.css';
import scrollBg from './../assets/scroll-bg.png'

function StoryDisplay({ newText, newImage, resetKey, options, onChoice }) {
  const [eventLog, setEventLog] = useState([]);
  const logEndRef = useRef(null);
  const newTextRef = useRef(newText);
  const newImageRef = useRef(newImage);

  useEffect(() => {
    newTextRef.current = newText;
    newImageRef.current = newImage;
  }, [newText, newImage]);

  // Add new events to the log when newText or newImage changes
  useEffect(() => {
    if (newText || newImage) {
      const newEvent = {};
      if (newText) newEvent.text = newText;
      if (newImage) newEvent.image = newImage;
      setEventLog(prev => [...prev, newEvent]);
    }
  }, [newText, newImage]);

  // Clear event log and add opening scene when resetKey changes
  useEffect(() => {
    setEventLog(() => {
      const openingEvent = {};
      if (newTextRef.current) openingEvent.text = newTextRef.current;
      if (newImageRef.current) openingEvent.image = newImageRef.current;
      return openingEvent.text || openingEvent.image ? [openingEvent] : [];
    });
  }, [resetKey]);

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
              {event.text && (
                <div className={
                  'text' + (index === eventLog.length - 1 ? ' typewriter' : '')
                }>
                  {event.text}
                </div>
              )}
              {event.image && (
                <img src={event.image} className='image' alt='' onError={(e) => e.target.style.display = 'none'} />
              )}
            </div>
          ))}
          <Choices options={options} onChoice={onChoice} />
          <div ref={logEndRef} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default StoryDisplay;