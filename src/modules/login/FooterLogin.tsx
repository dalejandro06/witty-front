import { Link } from "@nextui-org/link";

type Props = {
  isLogin?: boolean;
};

function FooterLogin({ isLogin }: Props) {
  const ctaText = isLogin ? "¿Aún no tienes cuenta?" : "¿Ya tienes una cuenta?";

  const linkText = isLogin ? "Regístrate" : "Ingresa";

  const href = isLogin ? "/create-account" : "/login";

  return (
    <div className="absolute bottom-0 mt-5 left-0 right-0 bg-blue-900 p-4 flex justify-center w-full">
      <p className="text-white text-center mx-1">{ctaText}</p>
      <Link className="text-white text-linear-gradient" href={href}>
        {linkText}
      </Link>
    </div>
  );
}

export default FooterLogin;
