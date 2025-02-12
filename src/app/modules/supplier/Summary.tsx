import { Button, Link } from "@nextui-org/react";

import SummaryButton from "./SummaryButton";

import SectionTitle from "@/components/SectionTitle";
import CalendarResume from "@/assets/CalendarResume.png";
import CalendarZoom from "@/assets/CalendarZoom.png";

function Summary() {
  return (
    <div className="grid gap-3">
      <SectionTitle title="Resumen servicios" />
      <SummaryButton
        date="hoy"
        image={CalendarResume}
        servicesLength={2}
        sizeImage={100}
      />
      <SummaryButton
        date="esta semana"
        image={CalendarZoom}
        servicesLength={0}
        sizeImage={80}
      />
      <Button showAnchorIcon as={Link} className="bg-white" variant="flat">
        Revisa todas tus estadisticas
      </Button>
    </div>
  );
}

export default Summary;
