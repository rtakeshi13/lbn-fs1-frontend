import { useState, useEffect } from "react";
import { getProfileByNickname } from "../services/axios";

const useProfile = (nickname) => {
  const [profile, setProfile] = useState();

  useEffect(() => {
    (async () => {
      const response = await getProfileByNickname(nickname);
      setProfile(response);
    })();
  }, [nickname]);

  return profile;
};

export default useProfile;
