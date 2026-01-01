import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

function Profile() {
  const {name} = useContext(ProfileContext);

  return (
    <>
      <h3>Profile</h3>
      <p>Hello, {name}</p>
    </>
  );
}

export { Profile };
