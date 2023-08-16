import { useState, useEffect } from 'react';

const breakpoints = [
   { name: 'xs', value: '(max-width: 320px)' },
   { name: 'sm', value: '(max-width: 640px)' },
   { name: 'md', value: '(max-width: 768px)' },
   { name: 'lg', value: '(max-width: 1280px)' },
   { name: 'xl', value: '(min-width: 1280px)' },
];

function debounce(fn, delay) {
   let timeoutId;
   return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), delay);
   };
}

function getCurrentBreakpoint() {
   const matchingBreakpoint = breakpoints.find(bp => window.matchMedia(bp.value).matches);
   return matchingBreakpoint ? matchingBreakpoint.name : null;
}

export function useBreakpointValue(values) {
   const [currentBreakpoint, setCurrentBreakpoint] = useState(getCurrentBreakpoint);

   useEffect(() => {
      const handleResize = debounce(() => {
         setCurrentBreakpoint(getCurrentBreakpoint());
      }, 50); // 50ms debounce

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   return values[currentBreakpoint];
}
