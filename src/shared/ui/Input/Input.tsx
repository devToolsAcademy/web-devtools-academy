'use client';

import React from 'react';
import { Input } from '@nextui-org/react';
import IconEye from '../icon/eye';
import IconEyeInvisible from '../icon/eyeSlash';
import IconMail from '../icon/mail';

interface InputComponentProps {
  label: string;
  type?: "text" | "email" | "password" | string;
  icon?: React.ReactNode;
  required?: boolean;
  placeholder?: string;
  text?: string;
  error?: boolean;
  
  endContent?: React.ReactNode;
  startContent?: React.ReactNode;
  variant?: 'underlined' | 'flat' | 'faded' | 'bordered';
}

const InputComponent: React.FC<InputComponentProps> = ({
  //show an information text
  label,
  type = 'text',
  icon,
  required = false,
  placeholder = '',
  text = '',
  error = false,
  endContent,
  startContent,
  variant = 'underlined'
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const renderEndContent = () => {
    if (endContent) {
      return endContent;
    } else if (type === 'password') {
      return (

        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            < IconEye className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <IconEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      );
    }
    return null;
  };
  console.log("hola mundo")
  return (
    <div className="input-group">
      {icon && <span className="icon">{icon}</span>}
      <Input
        isRequired ={required}
        variant={variant}
        type={type === 'password' ? (isVisible ? 'text' : 'password') : type}
        label={label}
        placeholder={placeholder}
        
        endContent={renderEndContent()}
        startContent={startContent}
        
        className={`input ${variant} ${error ? 'error' : ''}`}
      />
      {error && <label className="error-label">{label}*</label>}
      {!error && text && <div className="input-helper-text">{text}</div>}
    </div>
  );
};

export default InputComponent;
