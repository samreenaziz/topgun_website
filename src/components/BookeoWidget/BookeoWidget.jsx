import React, { useEffect } from 'react';

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

        // Polling mechanism to continuously check if iframe is injected
        const intervalId = setInterval(() => {
          const iframe = document.getElementById("easyXDM_axiomct_project_default5203_provider"); // Target the specific iframe by ID
          if (iframe) {
            iframe.style.height = "513px"; // Set the height to 513px
            console.log("Iframe found and height set");
            clearInterval(intervalId); // Stop checking once the iframe is found and modified
          }
        }, 500); // Check every 500ms

        // Timeout in case the iframe never appears (avoid polling forever)
        setTimeout(() => {
          clearInterval(intervalId);
        }, 10000); // Stop polling after 10 seconds
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
    <div>
      {/* Placeholder for the widget */}
      <div id="bookeo-widget"></div>
    </div>
  );
};

export default BookeoWidget;
