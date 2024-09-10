import React from "react";
import { Badge, Card, CardBody } from "@nextui-org/react";

import SectionTitle from "@/components/SectionTitle";

function NextServices() {
  return (
    <div className="my-10">
      <SectionTitle title="Próximos servicios" />
      <div className="mt-5 flex justify-center gap-2">
        <Card fullWidth isPressable className="py-5" shadow="sm">
          <CardBody>
            <div className="flex flex-col items-center">
              <Badge color="primary" content="+5">
                <div className="text-3xl font-bold">
                  <p className="px-5">17</p>
                </div>
              </Badge>
              <p>Julio</p>
            </div>
          </CardBody>
        </Card>
        <Card fullWidth isPressable className="py-5" shadow="sm">
          <CardBody>
            <div className="flex flex-col items-center">
              <Badge color="primary" content="+10">
                <div className="text-3xl font-bold">
                  <p className="px-5">02</p>
                </div>
              </Badge>
              <p>Septiembre</p>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default NextServices;
