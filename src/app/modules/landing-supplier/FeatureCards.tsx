import FeatureCardItem from "./FeatureCardItem";
import { featureItems } from "./FeatureData";

function FeatureCards() {
  return (
    <div className="px-16 py-16">
      <p className="uppercase text-3xl text-gray-800 text-center font-bold">
        Descubre cómo marcar la{" "}
        <strong className="text-secondary">diferencia</strong> como proveedor
      </p>
      <div className="pt-16">
        {featureItems.map((item) => (
          <FeatureCardItem
            key={item.id}
            checkList={item.checkList}
            imageBanner={item.image}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default FeatureCards;
