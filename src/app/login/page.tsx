import Image from "next/image";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import Logo from "@/src/assets/Logo.svg";
import RecoverPasswordModal from "@/src/modules/login/RecoverPasswordModal";
import FooterLogin from "@/src/modules/login/FooterLogin";
import { authOptions } from "@/src/utils/authOptions";
import LoginForm from "@/src/modules/login/LoginForm";

async function Login() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <>
      <div className="pt-10 pb-20 px-6">
        <div className="flex flex-col my-10 items-center">
          <div>
            <Image alt="Witty Logo" src={Logo} />
          </div>
          <p className="text-secondary-blue dark:text-white text-xl font-bold text-center mt-5">
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
