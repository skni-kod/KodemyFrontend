import React, { useEffect, useState } from 'react';

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
    <div className={`fixed bottom-0 right-0 m-6 p-4 w-72 rounded ${bgColor} ${shadowColor} text-white`}>
      {message}
    </div>
  );
};

export default Toast;