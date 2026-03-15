import { Home, About, FAQS, Contact, LastTrips, Trip01, Trip02, Trip03 } from "../utils/exports";
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from "react";

export const ScrollToTop = () => {
    
  const allTrips  = useLocation();

  useEffect(() => {
     window.scrollTo(0, 0);
  }, [allTrips]);
 
  return null;
};

const PageRouting = () => {
  return (
    <Routes>
        <Route path="/"            element={<Home />}>     </Route>
         <Route path="/last-trips" element={<LastTrips />}></Route>
        <Route path="/about-us"    element={<About />}>    </Route>
        <Route path="/faqs"        element={<FAQS />}>     </Route>
        <Route path="/contact"     element={<Contact />}>  </Route>
        <Route path="/trip01"     element={<Trip01 />}>    </Route>
        <Route path="/trip02"     element={<Trip02 />}>    </Route>
        <Route path="/trip03"     element={<Trip03 />}>    </Route>
    </Routes> 
  )
}

export default PageRouting
