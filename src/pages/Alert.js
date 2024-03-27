import React from 'react';

const AlertMessage = ({ message, type }) => {
  const alertClass = `p-4 rounded-md ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`;

  return (
    <div className={alertClass}>
      {message}
    </div>
  );
};

export default AlertMessage;
