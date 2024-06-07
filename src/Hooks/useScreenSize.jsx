import React, { useEffect, useState } from 'react';

const useScreenSize = (size) => {
  const [match, setMatch] = useState(null);

  useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(size);
      setMatch(matches);
    }
    changeMatch();
    window.addEventListener('resize', changeMatch);
    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [size]);
  return match;
};

export default useScreenSize;
