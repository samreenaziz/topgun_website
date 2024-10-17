import React, { useEffect } from 'react';

const BookeoWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://bookeo.com/widget.js?a=315079MCLT182C22AFE81";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="bookeoWidget" style={{ width: '100%', height: '600px' }}>
      {/* Bookeo widget will be injected here */}
    </div>
  );
};

export default BookeoWidget;
