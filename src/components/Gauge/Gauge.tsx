import React, { useEffect } from 'react';

import './Gauge.sass';

interface IStatus {
  status: number | string;
}

export const Gauge = ({ status }: IStatus) => {
  const firstSpinner = React.createRef<HTMLDivElement>();
  const secondSpinner = React.createRef<HTMLDivElement>();
  const thirdSpinner = React.createRef<HTMLDivElement>();
  const fourthSpinner = React.createRef<HTMLDivElement>();

  const renderProgress = (percentage: number) => {
    const progress = Math.floor(percentage);
    if (progress < 25) {
      const angle = -90 + (progress / 100) * 360;
      firstSpinner.current!.style.transform = `rotate(${angle}deg)`;
    } else if (progress >= 25 && progress < 50) {
      const angle = -90 + ((progress - 25) / 100) * 360;
      firstSpinner.current!.style.transform = 'rotate(0deg)';
      secondSpinner.current!.style.transform = `rotate(${angle}deg)`;
    } else if (progress >= 50 && progress < 75) {
      const angle = -90 + ((progress - 50) / 100) * 360;
      firstSpinner.current!.style.transform = 'rotate(0deg)';
      secondSpinner.current!.style.transform = 'rotate(0deg)';
      thirdSpinner.current!.style.transform = `rotate(${angle}deg)`;
    } else if (progress >= 75 && progress <= 100) {
      const angle = -90 + ((progress - 75) / 100) * 360;
      firstSpinner.current!.style.transform = 'rotate(0deg)';
      secondSpinner.current!.style.transform = 'rotate(0deg)';
      thirdSpinner.current!.style.transform = 'rotate(0deg)';
      fourthSpinner.current!.style.transform = `rotate(${angle}deg)`;
    }
  };

  useEffect(() => {
    // set current progress percentage
    if (status) {
      let percentage;
      if (Number(status)) {
        percentage = status;
      } else if (status === 'FT') {
        percentage = 100;
      } else if (status === 'HT') {
        percentage = 50;
      } else {
        percentage = 0;
      }
      renderProgress(Number(percentage) || 0);
    }
  });

  return (
    <div className="loader">
      <div className="loader-bg">
        <div className={`text ${status === 'FT' && 'FT'} ${status === 'HT' && 'HT'}`}>
          {(Number(status) || status === 'FT' || status === 'HT' || status === '') && status}
        </div>
      </div>
      <div className="spinner-holder-one animate-0-25-a">
        <div className="spinner-holder-two animate-0-25-b" ref={firstSpinner}>
          <div className="loader-spinner" />
        </div>
      </div>
      <div className="spinner-holder-one animate-25-50-a">
        <div className="spinner-holder-two animate-25-50-b" ref={secondSpinner}>
          <div className="loader-spinner" />
        </div>
      </div>
      <div className="spinner-holder-one animate-50-75-a">
        <div className="spinner-holder-two animate-50-75-b" ref={thirdSpinner}>
          <div className="loader-spinner" />
        </div>
      </div>
      <div className="spinner-holder-one animate-75-100-a">
        <div className="spinner-holder-two animate-75-100-b" ref={fourthSpinner}>
          <div className="loader-spinner" />
        </div>
      </div>
    </div>
  );
};