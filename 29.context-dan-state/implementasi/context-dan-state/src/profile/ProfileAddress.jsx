import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

function ProfileAddress() {
  const {address} = useContext(ProfileContext);
  return (
    <>
      <h3>Profile Address</h3>
      <p>{address}</p>
    </>
  );
}

export { ProfileAddress };
