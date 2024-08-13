'use client';

import React from 'react';
import { Input } from '@nextui-org/react';
import IconEye from '../icon/input/eye';
import IconEyeInvisible from '../icon/input/eyeSlash';

interface InputComponentProps {
  label: string;
  type?: 'text' | 'email' | 'password' | string;
  icon?: React.ReactNode;
  required?: boolean;
  placeholder?: string;
  invalid?: boolean;
  errorMessage?: string;
  endContent?: React.ReactNode;
  startContent?: React.ReactNode;
  variant?: 'underlined' | 'flat' | 'faded' | 'bordered';
}

const InputComponent: React.FC<InputComponentProps> = ({
  label,
  type = 'text',
  icon,
  required = false,
  placeholder = '',
  invalid = false,
  errorMessage = '',
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
            <IconEye className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <IconEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      );
    }
    return null;
  };

  return (
    <div className="input-group">
      {icon && <span className="icon">{icon}</span>}
      <Input
        isRequired={required}
        variant={variant}
        type={type === 'password' ? (isVisible ? 'text' : 'password') : type}
        label={label}
        placeholder={placeholder}
        endContent={renderEndContent()}
        startContent={startContent}
        errorMessage={errorMessage}
        isInvalid={invalid}
      />
    </div>
  );
};

export default InputComponent;
