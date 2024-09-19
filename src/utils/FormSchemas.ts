import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: "Completa este campo",
  },
  string: {
    email: "Debe ser un correo valido",
    min: "El campo debe tener al menos 8 caracteres",
    max: "El campo no debe superar los caracteres",
  },
});

export const RegisterSchema = new Yup.ObjectSchema({
  username: Yup.string().max(30).required(),
  email: Yup.string().email().required(),
  password: Yup.string().required().min(8),
});

export const ForgotPasswordSchema = new Yup.ObjectSchema({
  email: Yup.string().email().required(),
});
