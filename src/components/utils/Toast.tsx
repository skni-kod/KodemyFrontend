import React, { useEffect, useState } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";

interface ToastProps {
  message: string;
  type: 'success' | 'danger' | 'info' | 'warning';
  durationMs: number;
}

const Toast: React.FC<ToastProps> = ({ message, type, durationMs }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, durationMs);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  let bgColor = '';
  let shadowColor = '';

  switch (type) {
    case 'success':
      bgColor = 'bg-green-500';
      shadowColor = 'shadow-greenShadow'
      break;
    case 'danger':
      bgColor = 'bg-red-500';
      shadowColor = 'shadow-redShadow'
      break;
    case 'info':
      bgColor = 'bg-blue-500';
      shadowColor = 'shadow-blueShadow'
      break;
    case 'warning':
      bgColor = 'bg-yellow-500';
      shadowColor = 'shadow-yellowShadow'
      break;
  }

  return (
    <div className={`flex flex-row items-center justify-around h-24 sm:h-auto fixed bottom-0 right-0 sm:m-6 p-4 w-full sm:w-80 rounded ${bgColor} ${shadowColor} text-white`}>
      <p>{message}</p>
      <div className='flex items-center justify-center'>
        <IoIosCloseCircleOutline className='w-8 sm:w-5 h-8 sm:h-5 ml-3 cursor-pointer' onClick={() => setIsVisible(false)}/>
      </div>
    </div>
  );
};

export default Toast;