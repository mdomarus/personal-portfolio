import React, {
  useState, useEffect, useCallback, useRef,
} from 'react';

const BackToTop = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [scrollPos, setScrollPos] = useState(typeof window !== 'undefined' && window.scrollY);

  // const usePrevious = (value) => {
  //   const ref = useRef();
  //   useEffect(() => {
  //     ref.current = value;
  //   }, [value]);
  //   return ref.current;
  // };

  // const scrollPos = usePrevious(window.scrollY);

  const handleClick = () => {
    window.scrollY = 0;
    setIsScrollingUp(false);
  };

  const handleScroll = useCallback(() => {
    const posY = window.scrollY;
    setScrollPos(posY);

    // const goingUp = scrollPos > window.scrollY;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const goingUp = scrollPos > typeof window !== 'undefined' && window.scrollY;
    if (goingUp !== isScrollingUp) setIsScrollingUp(goingUp);
  }, [scrollPos]);


  const classes = !isScrollingUp ? 'backToTop backToTop--active' : 'backToTop';
  return (
    <button className={classes} onClick={handleClick} type="button">
      <span role="img" aria-label="back to top">
        <svg width="24" height="24" className={classes} xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
          <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 15l-5.247-6.44-5.263 6.44-.737-.678 6-7.322 6 7.335-.753.665z" />
        </svg>
      </span>
    </button>
  );
};

export default BackToTop;
