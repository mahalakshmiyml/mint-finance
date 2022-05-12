import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

const ScrollToTop = () => {
    const [ScrollToTop, setScrollToTop] = useState(false);

    useEffect(() =>{
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setScrollToTop(true);
            } else {
                setScrollToTop(false);
            }
        })
    },[]);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behaviour: "smooth"
        });
    }
  return (
    <>
        {ScrollToTop && (
            <Button style={{position:"fixed", bottom: "50px", right: "50px", height: "50px", width: "50px"}} onClick={scrollUp} >^</Button>
        )}
    </>
  )
}

export default ScrollToTop