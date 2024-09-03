import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: "Completa este campo",
  },
  string: {
    email: "Debe ser un correo valido",
  },
});

export const RegisterSchema = new Yup.ObjectSchema({
  username: Yup.string().required(),
  email: Yup.string().email().required(),
});
