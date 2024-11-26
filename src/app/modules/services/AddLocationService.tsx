import { useContext, useEffect, useState } from "react";
import { CircularProgress } from "@nextui-org/react";

import { getSupplierLocations } from "@/repositories/ApiRepository";
import { SupplierLocation } from "@/types/ApiTypes";
import LocationCard from "@/components/LocationCard";
import { CreateServiceContext } from "@/context/CreateServiceContext";

function AddLocationService() {
  const [locations, setLocations] = useState<SupplierLocation[]>([]);
  const [loading, setLoading] = useState(false);
  const { selectedLocations, setSelectedLocations } =
    useContext(CreateServiceContext);

  const handleSelect = (location: SupplierLocation) => {
    const isSelected = selectedLocations.find(
      (item) => item.id === location.id,
    );

    if (isSelected) {
      setSelectedLocations(
        selectedLocations.filter((item) => item.id !== location.id),
      );
    } else {
      setSelectedLocations([...selectedLocations, { ...location }]);
    }
  };

  useEffect(() => {
    setLoading(true);
    getSupplierLocations()
      .then(setLocations)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full grid place-items-center mt-10">
        <CircularProgress color="secondary" size="lg" />
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {locations.map((location) => (
        <LocationCard
          key={location.id}
          isDisabled={!location.status}
          isPrincipal={location.available_all_services}
          isSelected={Boolean(
            selectedLocations.find((item) => item.id === location.id),
          )}
          location={location}
          onSelect={() => handleSelect(location)}
        />
      ))}
    </div>
  );
}

export default AddLocationService;
