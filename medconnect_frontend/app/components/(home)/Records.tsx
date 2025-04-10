"use client"
import { useState, useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

const recordList = [
  { value: 5000, description: 'Active users' },
  { value: 50000, description: 'Secured health records' },
  { value: 10000, description: 'Successful appointments' },
];

const Records = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="flex flex-col gap-y-20 bg-[#EDFCFF] justify-center w-full py-20 max-w-screen-2xl mx-auto items-center"
    >
      <h3 className="text-[48px] w-[40ch] font-medium text-black opacity-80 text-center leading-[70px]">
        We put your health information back in your hands, giving you complete control over your healthcare journey.
      </h3>
      <div className="flex max-w-6xl justify-between w-full">
        {recordList.map((record, index) => (
          <Card
            key={index}
            value={record.value}
            description={record.description}
            isInView={isInView}
          />
        ))}
      </div>
    </section>
  );
};

interface CardProps {
  value: number;
  description: string;
  isInView: boolean;
}

const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const Card = ({ value, description, isInView }: CardProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, 1, {
        duration: 2.5,
        ease: 'linear',
        onUpdate: (progress) => {
          setCount(Math.floor(progress * value));
        },
        onComplete: () => {
          setCount(value); 
        },
      });

      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <div className="flex flex-col items-center gap-y-4 justify-center">
      <h4 className="text-6xl capitalize m-0">+{formatNumber(count)}</h4>
      <p className="opacity-60 text-xl capitalize">{description}</p>
    </div>
  );
};

export default Records;