import { useEffect, useState } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import { useInView } from "react-intersection-observer";

interface OdometerCounterProps {
  value: number;
}

const OdometerCounter: React.FC<OdometerCounterProps> = ({ value }) => {
  const [odometerValue, setOdometerValue] = useState<number>(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (inView) {
      timer = setTimeout(() => setOdometerValue(value), 1000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [inView, value]);

  return (
    <span ref={ref}>
      <Odometer value={odometerValue} format="(ddd)" />
    </span>
  );
};

export default OdometerCounter;
