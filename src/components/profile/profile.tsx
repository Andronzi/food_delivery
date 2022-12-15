import { useAppDispatch, useAppSelector } from "@redux/hooks/hooks";
import {
  editProfile,
  getProfile,
  toggleOpenOfUserEditForm,
  User,
} from "@redux/slices/profileSlice";
import React from "react";
import { useForm, SubmitHandler, UseFormRegister, Path } from "react-hook-form";
import styles from "./form.module.scss";
import close from "@icons/delete.svg";
import { getDateAsISO } from "@components/helpers/time";
import { toast, Toaster } from "react-hot-toast";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

type InputProps = {
  value: string;
  label: Path<User>;
  type: React.HTMLInputTypeAttribute;
  register: UseFormRegister<User>;
  required: boolean;
  mask?: boolean;
};

const Input = ({
  value,
  label,
  type,
  register,
  required,
  mask,
}: InputProps) => {
  const [state, setState] = React.useState(value);

  const changeInput = (e: any) => {
    setState(e.target.value);
  };

  return (
    <>
      {mask ? (
        <PhoneInput
          className={styles.PhoneInput}
          type={type}
          value={state}
          {...register(label, {
            required: required,
          })}
          //@ts-ignore
          onChange={setState}
        />
      ) : (
        <input
          type={type}
          value={state}
          {...register(label, {
            required: required,
          })}
          onChange={changeInput}
        />
      )}
    </>
  );
};

const ProfileForm = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<User>({
    criteriaMode: "all",
  });

  const profile = useAppSelector(state => state.profile);
  const onSubmit: SubmitHandler<User> = async data => {
    const editProfileResponse = await dispatch(
      editProfile({ token: localStorage.getItem("token")!, data: data }),
    );

    if (editProfileResponse.type === "editProfile/rejected") {
      toast.error("Ошибка отправки", {
        duration: 1000,
        style: { fontFamily: "Montserrat" },
      });
    } else {
      toast.success("Ваш профиль успешно изменен", {
        duration: 1000,
        style: { fontFamily: "Montserrat" },
      });
      await dispatch(getProfile(localStorage.getItem("token")!));
    }
  };

  const handleCloseClick = () => {
    dispatch(toggleOpenOfUserEditForm(false));
  };

  return (
    <>
      {profile.user.fullName ? (
        <form
          style={profile.isOpen ? { display: "block" } : { display: "none" }}
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}>
          <p className={styles.title}>Мои данные</p>
          <img
            className={styles.close}
            src={close}
            alt="закрыть"
            onClick={handleCloseClick}
          />
          <Input
            value={profile.user.fullName}
            type="text"
            label="fullName"
            register={register}
            required={true}
          />

          {errors.fullName ? (
            <p className={styles.error}>ФИО является обязательным</p>
          ) : null}

          {profile.user.gender === "Female" ? (
            <select
              className={styles.select}
              {...register("gender")}>
              <>
                <option
                  value="Female"
                  selected>
                  Жен
                </option>
                <option value="Male">Муж</option>
              </>
            </select>
          ) : (
            <>
              <select
                className={styles.select}
                {...register("gender")}>
                <>
                  <option value="Female">Жен</option>
                  <option
                    value="Male"
                    selected>
                    Муж
                  </option>
                </>
              </select>
            </>
          )}

          <Input
            value={getDateAsISO(
              profile.user.birthDate
                ? new Date(profile.user.birthDate)
                : new Date(),
            )}
            type="date"
            label="birthDate"
            register={register}
            required={true}
          />

          <Input
            value={profile.user.address}
            label="address"
            type="text"
            register={register}
            required={true}
          />

          <Input
            value={profile.user.phoneNumber}
            label="phoneNumber"
            type="tel"
            register={register}
            required={true}
            mask={true}
          />

          <input
            className={styles.submit}
            type="submit"
          />
        </form>
      ) : null}
      <Toaster />
    </>
  );
};

export default ProfileForm;
