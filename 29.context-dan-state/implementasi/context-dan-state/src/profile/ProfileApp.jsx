import { useState } from "react";
import { Profile } from "./Profile";
import { ProfileAddress } from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";

// implementasi context dan state
import { ProfileForm } from "./ProfileForm";

function ProfileApp() {
    // inisiasi state
    // default: Guest
    const [name, setName] = useState("Guest");
    const [address, setAddress] = useState("No Address");

    return (
        <ProfileContext.Provider value={{ name, setName, address, setAddress }}>
            <ProfileForm/>
            <Profile />
            <ProfileAddress/>
        </ProfileContext.Provider>
    );
}

export { ProfileApp };