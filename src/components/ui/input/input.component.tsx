import React from "react";
import { UseFormRegister } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import styles from "./input.module.scss";

interface InputProps {
  label?: string;
  placeholder?: string;
  pattern?: { value: RegExp; message: string };
  errors?: any;
  register: UseFormRegister<any>;
  value: string;
  required: boolean;
}

const Input = ({
  label,
  placeholder,
  pattern,
  register,
  value,
  required,
  errors,
}: InputProps) => (
  <>
    <label>{label}</label>

    <input
      className={styles.input}
      placeholder={placeholder}
      {...register(value, { required, pattern })}
    />

    <ErrorMessage
      errors={errors}
      name={value}
      render={({ messages }) =>
        messages
          ? Object.entries(messages).map(([type, message]) => (
              <p key={type}>{message}</p>
            ))
          : null
      }
    />
  </>
);

export default Input;
