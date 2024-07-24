import { Button } from '@nextui-org/react';
import { Color, Variant} from './types';
import React from 'react'
import Styles from './Button.module.css';
import   { Props }  from './interface';


const colorClass: {[key in Color]:string} = {
  white:Styles.ButtonWhite,
  blue: Styles.ButtonBlue,
  green: Styles.ButtonGreen,
  sinFondo: Styles.ButtonSinFondo
}

export const Button1:React.FC<Props>= ({color,width,variant,label,onClick,startContent,endContent,isLoading }) => {
  const colorClasses = colorClass[color]

  return (
    <div>
      <Button 
      className={colorClasses} 
      style={{width: `${width}px`}}
      variant = {variant}
      onClick={onClick}
      startContent={startContent}
      endContent={endContent}
      isLoading={isLoading}
      >
        <span>{label}</span>
      </Button>
    </div>
  )
}


