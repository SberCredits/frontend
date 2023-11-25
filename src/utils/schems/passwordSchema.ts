import * as yup from "yup";

export const passwordSchema = () =>
  yup
    .string()
    .min(8, "The password must contain at least 8 characters")
    .required("Required field");
