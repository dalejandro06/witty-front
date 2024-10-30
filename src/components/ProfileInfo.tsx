import InfoEditText from "./InfoEditText";

import { UserData } from "@/types/ApiTypes";

type Props = {
  userData: UserData;
};

function ProfileInfo({ userData }: Props) {
  const profileInfoData = [
    {
      icon: "at-sign",
      value: userData.email,
    },
    {
      icon: "phone",
      value: userData.phone_number,
    },
    {
      icon: "map-pin",
      value: `${userData.state.name} - ${userData.city.name}`,
    },
    {
      icon: "navigation",
      value: userData.physical_address,
    },
    {
      icon: "globe",
      value: userData.web_page,
    },
    {
      icon: "facebook",
      value: userData.facebook_page,
    },
    {
      icon: "instagram",
      value: userData.instagram_page,
    },
  ];

  return (
    <div>
      {profileInfoData.map(
        (item) =>
          item.value && (
            <InfoEditText
              key={item.icon + item.value}
              icon={item.icon}
              infoText={item.value}
            />
          ),
      )}
    </div>
  );
}

export default ProfileInfo;
