import ProfileComponent from "../Components/ProfileComponent";
import LoginForm from "../Components/LoginForm";
import OtpVerification from "../Components/OTPVerifyForm";
import { fetchUser } from "../Api";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader";

function ProfilePage() {
  const [loading, setLoading] = useState(false);

  const [profilePageRefresh, setProfilePageRefresh] = useState(0);
  const [user, setUser] = useState(null);

  const getUser = async () => {
    setLoading(true);
    try {
      const response = await fetchUser();
      setUser(response.data);
      setLoading(false);
    } catch (err) {
      setUser(null);
      setLoading(false);
      console.error("Failed to fetch user:", err);
    }
  };

  useEffect(() => {
    getUser();
  }, [profilePageRefresh]);

  return (
    <div className="fixed inset-0 flex items-center justify-center  overflow-hidden">
      {loading && <Loader />}

      <div className="w-full max-w-md relative z-10">
        {!user ? (
          <LoginForm
            setProfilePageRefresh={setProfilePageRefresh}
            setLoading={setLoading}
          />
        ) : user.verifiedStatus ? (
          <ProfileComponent
            user={user}
            setProfilePageRefresh={setProfilePageRefresh}
            setLoading={setLoading}
          />
        ) : (
          <OtpVerification
            phoneNumber={user.phoneNumber}
            setProfilePageRefresh={setProfilePageRefresh}
            setLoading={setLoading}
          />
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
