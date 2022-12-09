import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { authUser, Auth } from "@redux/slices/registerSlice";
import { useAppSelector } from "@redux/hooks/hooks";
import { useNavigate } from "react-router-dom";
import { changeRedirection } from "@redux/slices/profileSlice";
import styles from "./form.module.scss";
import useAuthRequest from "./hooks/useAuthRequest";
import useAuthResHandler from "./hooks/useAuthResHandler";

const AuthForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Auth>({
    criteriaMode: "all",
  });
  const navigate = useNavigate();
  const profile = useAppSelector(state => state.profile);
  const registration = useAppSelector(state => state.registration);
  const { handleResponse } = useAuthResHandler();

  React.useEffect(() => {
    if (
      registration.token != null &&
      !registration.errorMessage &&
      !profile.user.email
    ) {
      handleResponse();
    }
  }, [registration.token]);

  React.useEffect(() => {
    if (profile.user.email != null && !profile.isRedirected) {
      changeRedirection();
      navigate("/");
    }
  }, [profile.user?.email]);

  const { sendRequest } = useAuthRequest();
  const onSubmit: SubmitHandler<Auth> = async data => {
    await sendRequest(authUser, data);
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
