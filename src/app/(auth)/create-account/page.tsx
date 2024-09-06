import Image from "next/image";
import { Link } from "@nextui-org/link";

import Logo from "@/assets/Logo.svg";
import FooterLogin from "@/app/modules/login/FooterLogin";
import RegisterForm from "@/app/modules/create-account/RegisterForm";

function CreateNewAccount() {
  return (
    <div className="pt-10 pb-20 px-6">
      <div className="flex flex-col my-10 items-center">
        <div>
          <Link href="/">
            <Image alt="Witty Logo" src={Logo} />
          </Link>
        </div>
        <p className="text-secondary-blue dark:text-white text-xl font-bold text-center mt-5">
          ¡Tu aventura de servicios comienza aquí!
        </p>
      </div>

      <RegisterForm />
      <div className="border-1 border-default-200 my-10" />
      <div className="d-flex text-center">
        <p>
          Al registrarte aceptas los{" "}
          <Link className="font-bold">Términos y Condiciones.</Link>
        </p>
        <p>
          A su vez autorizas el
          <Link className="font-bold">
            Tratamiento de los datos suministrados.
          </Link>
        </p>
      </div>
      <FooterLogin />
    </div>
  );
}

export default CreateNewAccount;
