import { AWSBrand } from "@/components/icons";

function AWSBanner() {
  return (
    <section className="bg-secondary px-10 text-center py-10">
      <p className="font-bold text-3xl text-gray-800">
        Confianza y Rendimiento Impulsados por{" "}
        <span className="text-white">AWS</span>
      </p>
      <p className="text-gray-800 text-start font-light py-10">
        Nuestros servicios están impulsados por Amazon Web Services (AWS),
        garantizando alta disponibilidad, seguridad y rendimiento superior para
        su negocio.
      </p>
      <div className="flex justify-center">
        <AWSBrand size={100} />
      </div>
    </section>
  );
}

export default AWSBanner;
