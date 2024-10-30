"use client";
import { Input, Link, useDisclosure } from "@nextui-org/react";
import { Formik, FormikValues } from "formik";
import { useTransition } from "react";
import toast from "react-hot-toast";

import CustomModal from "@/components/CustomModal";
import { forgotPassword } from "@/repositories/ApiRepository";
import { ForgotPasswordSchema } from "@/utils/FormSchemas";

function RecoverPasswordModal() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [pending, startTransition] = useTransition();

  const handleForgotPassword = (values: FormikValues) => {
    startTransition(async () => {
      try {
        const res = await forgotPassword({ email: values.email });

        if (res.email) {
          toast.success(`Te hemos enviado un enlace a tu correo ${res.email}`);
          onClose();
        }
      } catch (error) {
        toast.error(
          "Hubo un error al enviar el correo, revisa que este correcto.",
        );
      }
    });
  };

  return (
    <>
      <p className="text-center mt-4">
        ¿Olvidaste tu contraseña?{" "}
        <Link className="font-bold" onPress={onOpen}>
          Recupérala
        </Link>
      </p>

      <CustomModal
        body={
          <div className="flex flex-col gap-2">
            <p>
              Ingresa tu correo para enviarte un enlace y restablecer tu
              contraseña.
            </p>
            <Formik
              initialValues={{
                email: "",
              }}
              validationSchema={ForgotPasswordSchema}
              onSubmit={handleForgotPassword}
            >
              {({ values, errors, setFieldValue, handleSubmit }) => (
                <form id="forgotPasswordForm" onSubmit={handleSubmit}>
                  <Input
                    isRequired
                    required
                    errorMessage={errors.email}
                    id="email"
                    isInvalid={!!errors.email}
                    label="Correo"
                    name="email"
                    placeholder="wittyapp@example.com"
                    type="email"
                    value={values.email}
                    variant="bordered"
                    onChange={(e) => setFieldValue("email", e.target.value)}
                  />
                </form>
              )}
            </Formik>
          </div>
        }
        confirmButton={{
          text: "Enviar",
          form: "forgotPasswordForm",
          type: "submit",
          isLoading: pending,
        }}
        isOpen={isOpen}
        title="Recupera tu contraseña"
        onOpenChange={onOpenChange}
      />
    </>
  );
}

export default RecoverPasswordModal;
