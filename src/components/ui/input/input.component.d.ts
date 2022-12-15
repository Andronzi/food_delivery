/// <reference types="react" />
import { UseFormRegister } from "react-hook-form";
interface InputProps {
    label?: string;
    placeholder?: string;
    pattern?: {
        value: RegExp;
        message: string;
    };
    errors?: any;
    register: UseFormRegister<any>;
    value: string;
    required: boolean;
}
declare const Input: ({ label, placeholder, pattern, register, value, required, errors, }: InputProps) => JSX.Element;
export default Input;
