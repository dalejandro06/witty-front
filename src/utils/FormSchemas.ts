import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: "Completa este campo",
    notType: "El campo debe contener solo números",
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

export const RegisterSupplierSchema = new Yup.ObjectSchema({
  typeBusiness: Yup.number().required(),
  email: Yup.string().email("Debe ser un correo valido").required(),
  phoneNumber: Yup.number().required(),
  nit: Yup.number(),
  address: Yup.string().required(),
});
