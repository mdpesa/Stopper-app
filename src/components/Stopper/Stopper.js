import Button from '../Button/Button';
import TimeConverter from '../TimeConverter/TimeConverter';
import { useState } from 'react';
import { useEffect } from 'react';

const Stopper = () => {
  const [time, setTime] = useState(0);
  const [go, setGo] = useState('');

  const start = () => {
    setGo(
      setInterval(() => {
        setTime((prevValue) => prevValue + 1);
      }, 1)
    );
  };

  useEffect(() => {
    return () => {
      if (go) clearInterval(go);
    };
  }, [go]);

  const pressStart = () => {
    start();
  };
  const pressStop = () => {
    clearInterval(go);
  };
  const pressReset = () => {
    setTime(0);
  };

  return (
    <div className='stopper'>
      <TimeConverter time={time} />
      <Button action={pressStart}>Start</Button>
      <Button action={pressStop}>Stop</Button>
      <Button action={pressReset}>Reset</Button>
    </div>
  );
};

export default Stopper;
