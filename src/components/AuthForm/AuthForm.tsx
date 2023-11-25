import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import classNames from "classnames/bind";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { IAuthInputs, IAuthResponse } from "@/types/Auth";
import { passwordSchema } from "@/utils/schems/passwordSchema";

import { Input } from "@/ui/Input";
import { Button } from "@/ui/Button";

import styles from "./styles.module.scss";
import { useTokenMutation } from "@/api/authApi";
import { requiredSchema } from "@/utils/schems/requiredSchema";
import { authLocalStorage } from "@/utils/authLocalStorage";

const cx = classNames.bind(styles);

const AUTH_DATA = {
  username: "bertoprime",
  password: "TESTTESTTEST",
};

const validationSchema = yup.object({
  username: requiredSchema(),
  password: passwordSchema(),
});

const AuthForm: FC = () => {
  const navigate = useNavigate();
  const [tokenRequest] = useTokenMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthInputs>({
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
    defaultValues: AUTH_DATA,
  });

  const onSubmitHandler = async (data: IAuthInputs) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);

    const resp = await tokenRequest(formData);

    if ("data" in resp && resp.data) {
      const dataResponse = resp as { data: IAuthResponse };
      if (
        dataResponse.data &&
        typeof dataResponse.data.access_token === "string"
      ) {
        authLocalStorage.set({ accessToken: dataResponse.data.access_token });
      }
    }

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className={cx("form")}>
      <h4 className={cx("form__title")}>Авторизация</h4>
      <div className={cx("form__inputs")}>
        <Input
          {...register("username")}
          autoComplete="username"
          error={errors?.username?.message}
        />
        <Input {...register("password")} error={errors?.password?.message} />
      </div>
      <Button type="submit">Войти</Button>
    </form>
  );
};

export default AuthForm;
