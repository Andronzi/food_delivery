import Input from "@components/ui/input/input.component";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./form.module.scss";

interface IFormInput {
  name: string;
  gender: string;
  phone: number;
}

const RegForm = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="ФИО"
        register={register}
        required
        value="name"
      />

      <Input
        placeholder="Пол"
        register={register}
        required
        value="gender"
      />

      <input
        className={styles.submit}
        type="submit"
      />
    </form>
  );
};

export default RegForm;
