import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

function ProfileAddress() {
  // menggunakan Context
  const profile = useContext(ProfileContext);

  return (
    <>
      <h3>Profile Address</h3>
      <p>{profile}</p>
    </>
  );
}

export { ProfileAddress };