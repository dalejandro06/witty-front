import InfoEditText from "./InfoEditText";

function ProfileInfo() {
  return (
    <div>
      <InfoEditText canEdit icon="at-sign" infoText="witty@email.com" />
      <InfoEditText icon="phone" infoText="3130123123" />
      <InfoEditText icon="map-pin" infoText="Bogotá - Cundinamarca" />
      <InfoEditText icon="navigation" infoText="Cra 11a 89 - 25" />
      <InfoEditText icon="globe" infoText="https://trywitty.co" />
      <InfoEditText icon="facebook" infoText="Somos Witty" />
      <InfoEditText icon="instagram" infoText="@trywitty" />
    </div>
  );
}

export default ProfileInfo;
