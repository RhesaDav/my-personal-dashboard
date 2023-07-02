import React, { useState } from "react";

interface Props {
  variant?: 'info' | 'warning' | 'error' | 'success';
  show?: boolean;
  message?: string;
  onClose?: () => void; // Menambahkan prop onClose dengan tipe fungsi yang tidak mengembalikan nilai (void)
}

export const Alert = ({ variant, show = true, message, onClose }: Props) => {
  let alertCondition = '';

  if (variant === 'info') {
    alertCondition = 'alert-info';
  } else if (variant === 'warning') {
    alertCondition = 'alert-warning';
  } else if (variant === 'error') {
    alertCondition = 'alert-error';
  } else if (variant === 'success') {
    alertCondition = 'alert-success';
  }

  const [isVisible, setIsVisible] = useState(show);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose(); // Memanggil fungsi onClose jika diberikan
    }
  };

  if (!isVisible) {
    return null; // Jika isVisible bernilai false, tidak menampilkan komponen Alert
  }

  return (
    <div className={`fixed inset-x-0 bottom-24 flex items-center justify-center z-50`}>
      <div className={`alert ${alertCondition} absolute rounded-lg shadow-lg p-4 w-2/4 animate-bounce`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span className="text-primary">{message}</span>
        <div>
          <button className="btn btn-sm btn-primary" onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
};
