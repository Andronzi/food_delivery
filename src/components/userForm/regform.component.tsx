import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useAppSelector } from "@redux/hooks/hooks";
import { User, createUser } from "@redux/slices/registerSlice";
import { useNavigate } from "react-router-dom";
import styles from "./form.module.scss";
import useAuthRequest from "./hooks/useAuthRequest";
import useAuthResHandler from "./hooks/useAuthResHandler";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const RegForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<User>({
    criteriaMode: "all",
  });
  const navigate = useNavigate();
  const profile = useAppSelector(state => state.profile);
  const registration = useAppSelector(state => state.registration);
  const { handleResponse } = useAuthResHandler();
  const [phoneState, setPhoneState] = React.useState();

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
    if (profile.user.email != null) {
      navigate("/");
    }
  }, [profile.user?.email]);

  const { sendRequest } = useAuthRequest();
  const onSubmit: SubmitHandler<User> = async data => {
    await sendRequest(createUser, data);
  };

  return (
    <>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.input}
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
          className={styles.input}
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
          className={styles.input}
          type="password"
          placeholder="Пароль"
          {...register("password", {
            required: "Данное поле является обязательным",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/i,
              message:
                "Пароль должен содержать не меньше 8 символов, а также минимум 1 цифру",
            },
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
          className={styles.input}
          placeholder="Дата рождения"
          type="date"
          {...register("birthDate", {
            required: "Данное поле не является обязательным :)",
          })}
        />

        <input
          className={styles.input}
          placeholder="Адрес"
          {...register("address", {
            required: "Данное поле не является обязательным :)",
          })}
        />

        <PhoneInput
          className={styles.PhoneInput}
          placeholder="Номер телефона"
          {...register("phoneNumber", {
            required: "Данное поле не является обязательным :)",
          })}
          value={phoneState}
          //@ts-ignore
          onChange={setPhoneState}
        />

        <input
          className={styles.submit}
          type="submit"
        />
      </form>
      <>
        {registration.error && (
          <p className={styles.error}>При отправке формы возникла проблема</p>
        )}
      </>
    </>
  );
};

export default RegForm;
