import React from "react";
import { UseFormRegister } from "react-hook-form";
import styles from "./input.module.scss";

interface InputProps {
  label?: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  value: string;
  required: boolean;
}

const Input = ({
  label,
  placeholder,
  register,
  value,
  required,
}: InputProps) => (
  <>
    <label>{label}</label>

    <input
      className={styles.input}
      placeholder={placeholder}
      {...register(value, { required })}
    />
  </>
);

export default Input;
