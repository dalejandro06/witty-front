import { useContext } from "react";
import { CircularProgress } from "@heroui/react";

import { SupplierLocation } from "@/types/ApiTypes";
import LocationCard from "@/components/LocationCard";
import { CreateServiceContext } from "@/context/CreateServiceContext";
import { useUserLocations } from "@/hooks/useUserLocations";

function AddLocationService() {
  const { selectedLocations, setSelectedLocations } =
    useContext(CreateServiceContext);

  const { loadingLocations, availableUserLocations } = useUserLocations();

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

  if (loadingLocations) {
    return (
      <div className="w-full h-full grid place-items-center mt-10">
        <CircularProgress color="secondary" size="lg" />
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {availableUserLocations.map((location) => (
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
