import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

function Profile() {
  const profile = useContext(ProfileContext);

  return (
    <>
      <h3>Welcome Back!</h3>
      <p>Hello, {profile}</p>
    </>
  );
}

export { Profile };