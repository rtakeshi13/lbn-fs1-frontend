import { useState, useEffect } from "react";
import { getProfile } from "../functions/axios";

const useProfile = (nickname) => {
  const [profile, setProfile] = useState();

  useEffect(() => {
    (async () => {
      const response = await getProfile(nickname);
      setProfile(response);
    })();
  }, [nickname]);

  return profile;
};

export default useProfile;
