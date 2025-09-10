import React, { useEffect, useState } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import { useInView } from "react-intersection-observer";

const OdometerCounter = ({ value }) => {
  const [odometerValue, setOdometerValue] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setOdometerValue(value);
      }, 1000);
    }
  }, [inView, value]);

  return (
    <span ref={ref}>
      <Odometer value={odometerValue} format="(ddd)" />
    </span>
  );
};

export default OdometerCounter;
