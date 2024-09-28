import React from 'react';
import '../styles/Button.css';

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'button';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', className = '', disabled = false }) => {
  return (
    <button
      className={`custom-button ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
