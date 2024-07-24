import { Color, Variant } from "./types";

export interface Props {
    id?: number;
    name?: string;
    value?: number;
    className?: string;
    type?: string;
    disable?: boolean; 
    color: Color;
    width?: number;
    variant?: Variant; 
    label: string;
    onClick?: ()=>void;
    startContent?:React.ReactNode;
    endContent?:React.ReactNode;
    isLoading?:boolean;
    }