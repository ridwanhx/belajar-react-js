import { ProfileContext } from "./ProfileContext";
import { ProfileAddress } from "./ProfileAddress";
import { Profile } from "./Profile";
import { Container } from "../utils/Container";

function ProfileApp() {
  return (
    <>
      <ProfileContext.Provider value="Ridwan">
        <h1>Profile App</h1>
        <Profile />
        <ProfileAddress />
      </ProfileContext.Provider>
    </>
  );
}

export { ProfileApp };
