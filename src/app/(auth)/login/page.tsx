import Image from "next/image";
import { Link } from "@nextui-org/link";

import Logo from "@/assets/Logo.svg";
import RecoverPasswordModal from "@/app/modules/login/RecoverPasswordModal";
import FooterLogin from "@/app/modules/login/FooterLogin";
import LoginForm from "@/app/modules/login/LoginForm";

function Login() {
  return (
    <>
      <div className="pt-10 pb-20 px-6">
        <div className="flex flex-col my-10 items-center">
          <div>
            <Link href="/">
              <Image alt="Witty Logo" src={Logo} />
            </Link>
          </div>
          <p className="text-secondary-blue dark:text-white text-xl text-center mt-5">
            ¡De vuelta en Witty! Disfruta y agenda tus servicios favoritos.
          </p>
        </div>
        <LoginForm />
        <div className="border-1 border-default-200 mt-10" />
        <RecoverPasswordModal />
      </div>
      <FooterLogin isLogin />
    </>
  );
}

export default Login;
