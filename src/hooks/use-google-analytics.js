import React from 'react';

import { gaEvent } from '../utils';

const useGoogleAnalytics = ({ pathname = '', search = '' }) => {
  React.useEffect(() => {
    const click = evt => {
      if (window.gtag) {
        const rootNode = document;
        let element = evt.target;
        while (element && element !== rootNode) {
          const category = element.getAttribute('data-ga-event-category');
          if (category) {
            gaEvent(
              category,
              element.getAttribute('data-ga-event-action'),
              element.getAttribute('data-ga-event-label')
            );
            break;
          }
          element = element.parentNode;
        }
      }
    };
    document.addEventListener('click', click);
    return () => {
      document.removeEventListener('click', click);
    };
  }, []);
};

export default useGoogleAnalytics;
