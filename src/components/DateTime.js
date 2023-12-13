import React, { useState, useEffect } from 'react';
import CurrentDate from './CurrentDate';
import CurrentTime from './CurrentTIme';

const DateTime = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
  
    const tick = () => {
      setCurrentDateTime(new Date());
    };
  
    useEffect(() => {
      const intervalId = setInterval(tick, 1000);
  
      return () => clearInterval(intervalId);
    });
  
    return (
      <div>
        <CurrentDate currentDate={currentDateTime} />
        <CurrentTime currentTime={currentDateTime} />
      </div>
    );
  };
  
  export default DateTime;
