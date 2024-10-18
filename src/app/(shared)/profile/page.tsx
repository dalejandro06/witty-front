import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

import ProfileAvatar from "@/components/ProfileAvatar";
import ProfileInfo from "@/components/ProfileInfo";

function Profile() {
  return (
    <div>
      <Card className="py-6">
        <CardHeader className="flex flex-col justify-center">
          <ProfileAvatar />
          <h1 className="text-3xl mt-4 font-bold">Pablo torres</h1>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="text-xl my-3">Sobre ti</p>
          <p className="text-gray-500 mb-4">
            Soy Pablo Torres, apasionado por ofrecer soluciones rápidas y
            personalizadas para facilitar tu vida. Me comprometo a brindarte un
            servicio confiable y de alta calidad.
          </p>
          <ProfileInfo />
        </CardBody>
      </Card>
    </div>
  );
}

export default Profile;
