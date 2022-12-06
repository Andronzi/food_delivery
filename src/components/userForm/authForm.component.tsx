import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useAppDispatch } from "@redux/hooks/hooks";
import { User, authUser } from "@redux/slices/registerSlice";
import styles from "./form.module.scss";

const AuthForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<User>({
    criteriaMode: "all",
  });
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<User> = data => {
    dispatch(authUser(data));
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}>
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
        className={styles.submit}
        type="submit"
      />
    </form>
  );
};

export default AuthForm;
