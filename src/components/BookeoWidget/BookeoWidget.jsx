import React, { useEffect } from 'react';
import './BookeoWidget.scss';

const BookeoWidget = () => {
  useEffect(() => {
    // Check if the script already exists
    const existingScript = document.querySelector(`script[src="https://bookeo.com/widget.js?a=315079MCLT182C22AFE81"]`);

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = "https://bookeo.com/widget.js?a=315079MCLT182C22AFE81";
      script.async = true;

      script.onload = () => {
        console.log("Bookeo widget script loaded");

        const intervalId = setInterval(() => {
          const iframe = document.getElementById("easyXDM_axiomct_project_default5203_provider");
          if (iframe) {
            iframe.style.height = "513px";
            iframe.style.width = "100%";
            iframe.style.maxWidth = "100%";
            iframe.style.position = "relative";
            iframe.style.zIndex = "1";
            iframe.style.maxHeight = "unset";
            iframe.style.maxWidth = "unset";
            iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-popups allow-forms');            console.log("iframe found and styles applied");

            clearInterval(intervalId);
          }
        }, 500);

        setTimeout(() => {
          clearInterval(intervalId);
        }, 10000);
      };

      document.body.appendChild(script);
    } else {
      console.log("Script already exists, skipping script load.");
    }

    return () => {
      const iframe = document.getElementById("easyXDM_axiomct_project_default5203_provider");
      if (iframe) {
        iframe.remove();
      }
    };
  }, []);

  return (
    <div style={{ padding: '1.25rem 0', marginBottom: '1.25rem' }}>
      {/* Container to hold the widget */}
      <div id="bookeo-widget-container">
        <div id="bookeo-widget"></div>
      </div>
    </div>
  );
};

export default BookeoWidget;
