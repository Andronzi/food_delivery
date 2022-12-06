import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useAppDispatch } from "@redux/hooks/hooks";
import { User, createUser } from "@redux/slices/registerSlice";
import styles from "./form.module.scss";

const RegForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<User>({
    criteriaMode: "all",
  });
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<User> = data => {
    dispatch(createUser(data));
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="ФИО"
        {...register("fullName", {
          required: true,
        })}
      />

      {errors.fullName ? (
        <p className={styles.error}>ФИО является обязательным</p>
      ) : null}

      <select
        className={styles.select}
        {...register("gender")}>
        <option value="Female">Жен</option>

        <option value="Male">Муж</option>
      </select>

      <input
        placeholder="Email"
        {...register("email", {
          required: "Данное поле является обязательным",
          pattern: {
            value: /[a-z0-9]+@[a-z]+.[a-z]{2,3}/i,
            message: "Email неверный",
          },
        })}
      />

      <ErrorMessage
        errors={errors}
        name="email"
        render={({ messages }) =>
          messages
            ? Object.entries(messages).map(([type, message]) => (
                <p
                  key={type}
                  className={styles.error}>
                  {message}
                </p>
              ))
            : null
        }
      />

      <input
        placeholder="Пароль"
        {...register("password", {
          required: "Данное поле является обязательным",
        })}
      />

      <ErrorMessage
        errors={errors}
        name="password"
        render={({ messages }) =>
          messages
            ? Object.entries(messages).map(([type, message]) => (
                <p
                  key={type}
                  className={styles.error}>
                  {message}
                </p>
              ))
            : null
        }
      />

      <input
        placeholder="Дата рождения"
        type="date"
        {...register("birthDate", {
          required: "Данное поле не является обязательным :)",
        })}
      />

      <input
        placeholder="Адрес"
        {...register("address", {
          required: "Данное поле не является обязательным :)",
        })}
      />

      <input
        placeholder="Номер телефона"
        type="tel"
        {...register("phoneNumber", {
          required: "Данное поле не является обязательным :)",
        })}
      />

      <input
        className={styles.submit}
        type="submit"
      />
    </form>
  );
};

export default RegForm;
